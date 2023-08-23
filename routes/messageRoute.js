const router = require("express").Router();
const { messageController } = require("../controller");

router.post("/addMsg", messageController.addMessage);
router.post("/getMsg", messageController.getAllMessages);

module.exports = router;
