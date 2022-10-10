import User from "../models/userModel.js";
import jwt from "jsonwebtoken";

const checkUser = async (req,res,next)=>{
    var token =  req.cookies.jwt;

    if (token) {
        jwt.verify(token,process.env.JWT_SECRET, async (err,decodedToken)=>{
            if (!err) {
               var user =  await User.findById(decodedToken.userId);
               res.locals.user = user;
                next();
            }else{
                res.locals.user=null;
                res.redirect('/login');
                next();
            }
        
        });
       
    }else{
        res.locals.user=null;
        next();

    }
}


const authenticateToken = async (req, res, next) => {
    try {
        var token = req.cookies.jwt;
        if (token) {

            jwt.verify(token, process.env.JWT_SECRET, (err) => {

                if (!err) {
                    next();
                }
                else {
                    console.log(err.message);
                    res.redirect('/login');
                }
            });
        }else{
            res.redirect('/login');
        }
    } catch (error) {
        res.status(401).json({
            succeded: false,
            error: 'ERROR : ' + error.message
        });
    }
}

export {
    authenticateToken,
    checkUser
}