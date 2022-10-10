import mongoose from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

var {Schema} = mongoose;

var userShema= new Schema(
    {
        email:{
            type:String,
            required:[true,'email is required'],
            validate:[validator.isEmail,'only is email']
        },
        firstname:{
            type:String,
            required:[true,'firstname is required'],
            validate:[validator.isAlphanumeric,'only Alphanumeric character']
        },
        lastname:{
            type:String,
            required:[true,'lastname is required'],
            validate:[validator.isAlphanumeric,'only Alphanumeric character']
        },
        password:{
            type:String,
            required:[true,'password is required'],
            minLenght:[4,'At least 4 characters']
        },    
    },
    {
        timestamps:true
    }
    
);


userShema.pre('save',function(next) {

    var user= this;
    console.log(user.password);

    bcrypt.hash(user.password,10,(err,has)=>{

        user.password=has;
        console.log(user.password);
        next();
    });
    
    
});



var User = mongoose.model('User',userShema);
export  default  User;