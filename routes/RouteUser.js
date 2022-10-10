import  * as userController from "../controllers/userController.js";
import express  from "express";
import * as middleWare from "../middleWares/autMiddleWare.js"

var Router = express.Router();

Router.route('/register').post(userController.createUser);
Router.route('/login').post(userController.loginUser);
Router.route('/dashboard').get(middleWare.authenticateToken, userController.getDashboard);

export default Router;
