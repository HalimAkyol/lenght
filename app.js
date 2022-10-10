import express from "express";
var app = express();

import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyparser from "body-parser";
import cookieParser from "cookie-parser";
import UserModel from "./models/userModel.js";
import routerPage from "./routes/routerPage.js";
import routerPhoto from "./routes/routerPhoto.js";
import RouterUser from "./routes/RouteUser.js";
import {checkUser} from "./middleWares/autMiddleWare.js"
dotenv.config();
var Router = express.Router();
// app.use(bodyparser.json());
var url="mongodb://localhost:27017/teacherbase"
mongoose.connect(url|| process.env.DB_URI,(err,db)=>{
    if (!err) console.log('connected');
    else console.log('disconnected');
});
//static file middleware
app.set('view engine',"ejs");
app.use(express.static('public'));

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('*',checkUser);
app.use('/',routerPage);
app.use('/photos',routerPhoto);
app.use('/user',RouterUser);



app.post('/user',(req,res)=>{
    
    try {
        
        var user = new UserModel(req.body);
        user.save((err, res) => {
            if (!err) console.log('save');
            else console.log(err);    
    });

    res.status(201).json({
        succeded:true,
        user
    });
    

    res.send('user page');

    } catch (err) {
        console.log(err);
    }

});


app.listen(process.env.PROT || 3030);