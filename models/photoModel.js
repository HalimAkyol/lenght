import mongoose from "mongoose";
import validator from "validator";

var {Schema} = mongoose;

var photoModel = new  Schema({
    name:{
        type:String,
        required:true,
        trim:true,
        validate:[validator.isAlphanumeric,'only is alphanumeric']
    },
    description:{
        type:String,
        required:true,
        trim:true,
        validate:[validator.isAlphanumeric,'onliy is alphanumeric']
    },
    uploadedAt:{
        type:String,
        default:Date.now
    }
});

var photo = mongoose.model('photo',photoModel);

export default photo;