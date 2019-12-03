const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/test", userController.test);
router.get("/", userController.readAll);
router.post("/", userController.create);
router.put("/", userController.update);

module.exports = router;
