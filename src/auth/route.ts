import express = require("express");
import { Request, Response } from "express";
import { Controller } from "./controller"
const router = express.Router();
// create get method which will return city weather status.
let controller = new Controller()
router.get("/:city", controller.get);
export default router;