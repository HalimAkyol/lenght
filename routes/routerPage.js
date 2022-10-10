
import express from "express";
import * as pageRouter from "../controllers/pageController.js";

var Router=express.Router();

Router.route('/').get(pageRouter.getIndex);
Router.route('/index').get(pageRouter.getIndex);
Router.route('/register').get(pageRouter.getRegister);
Router.route('/login').get(pageRouter.getLogin);
Router.route('/logout').get(pageRouter.getLogout);
Router.route('/projects').get(pageRouter.getProject);
Router.route('/about').get(pageRouter.getAbout);
Router.route('/contact').get(pageRouter.getContact);
Router.route('/blog').get(pageRouter.getBlog);
Router.route('/services').get(pageRouter.getServices);

export default  Router