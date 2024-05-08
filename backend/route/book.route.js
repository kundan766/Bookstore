// const express =require("express")
// import { getBook } from "../controller/book.controller"

// const router=express.router();

// router.get("/",getBook);

// export default router

const express = require("express");
const bookController = require("../controller/book.controller");

const router = express.Router();

router.get("/", bookController.getBook);

module.exports = router;
