import express from "express";
import * as photoController from "../controllers/photoController.js"

var Router = express.Router();

Router.route('/create').post(photoController.createPhoto);
Router.route('/').get(photoController.getAllPhotos);
      

export default Router