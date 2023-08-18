const User = require("../model/userModel");
const bcrypt = require("bcrypt");

const userController = {
  register: async (req, res, next) => {
    try {
      const { username, email, password } = req.body;
      const usernameCheck = await User.findOne({ username });
      if (usernameCheck) {
        return res.json({ msg: "Username already used", status: false });
      }
      const emailCheck = await User.findOne({ email });
      if (emailCheck) {
        return res.json({ msg: "Email already used", status: false });
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = await User.create({
        username,
        email,
        password: hashedPassword,
      });
      delete user.password;
      return res.json({ status: true, user });
    } catch (err) {
      next(err);
    }
  },
  login: async (req, res, next) => {
    try {
      const { email, password } = req.body;
      //從資料庫尋找該用戶
      const user = await User.findOne({ email });
      //未找到發送錯誤訊息到前端
      if (!user) {
        return res.json({ msg: "Incorrect email or password", status: false });
      }
      //密碼是否正確
      const isPasswordValid = await bcrypt.compare(password, user.password);
      //密碼錯誤發送訊息
      if (!isPasswordValid) {
        return res.json({ msg: "Incorrect email or password", status: false });
      }
      delete user.password;
      return res.json({ status: true, user });
    } catch (err) {
      next(err);
    }
  },
  setAvatar: async (req, res, next) => {
    try {
      const userId = req.params.id;
      const avatarImage = req.body.image;
      const userData = await User.findByIdAndUpdate(userId, {
        isAvatarImageSet: true,
        avatarImage,
      });
      return res.json({
        isSet: userData.isAvatarImageSet,
        image: userData.avatarImage,
      });
    } catch (err) {
      next(err);
    }
  },
  getAllUsers: async (req, res, next) => {
    try {
      const users = await User.find({ _id: { $ne: req.params.id } }).select([
        "email",
        "username",
        "avatarImage",
        "_id",
      ]);
      return res.json(users)
    } catch (err) {
      next(err);
    }
  },
};

module.exports = userController;
