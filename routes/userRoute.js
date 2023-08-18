const router = require("express").Router();
const { model } = require("mongoose");
const { userController } = require("../controller");

router.post("/register", userController.register);
router.post("/login", userController.login);
router.post("/setAvatar/:id", userController.setAvatar);
router.get("/allUsers/:id", userController.getAllUsers);

module.exports = router;
