import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"


var createUser= async (req,res)=>{
    
   try {

    var user = await User.create(req.body);
    res.status(201).json({user:user._id});

   } catch (err) {


    let error2={}

    if (err.name=='ValidationError') {
        Object.keys(err.errors).forEach((key)=>{
            error2[key]=err.errors[key].message
        });
    }

    if(err.code===11000){
        error2.email='user is already have been registered';
     }  

    res.status(400).json({
        succeded:false,
        error:error2
    });
    
   }
}

var loginUser = async (req, res) => {

    try {
        var { email, password } = req.body;
        
        var user = await User.findOne({ email });
        var same = false;
        if (user) {
            same = await bcrypt.compare(password, user.password);
        } else {
            res.status(401).json({
                succeded: false,
                message: 'user is not matched'
            });
        }
        if (same) {

            var token = createToken(user._id)
            res.cookie('jwt', token, {
                httpOnly: true,
                maxAge: 1000 * 60 * 60 * 24
            });
            res.redirect("/user/dashboard");
        }
        else {
            res.status(401).json({
                succeded: false,
                error: 'user is not matched'
            });
            // res.redirect('/login');
        }

    } catch (err) {
        res.status(401).json({
            succeded: false,
            error: err.message
        });
    }
}

var createToken=(userId)=>{
    return jwt.sign({userId},process.env.JWT_SECRET,
        {
            expiresIn:'1d'
        });

}

var getDashboard=(req,res)=>{

    res.render('dashboard',{
        link:'dashboard'
    });

}
export {createUser,loginUser,getDashboard}
