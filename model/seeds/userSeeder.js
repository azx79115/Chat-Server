const mongoose = require("mongoose");
require("dotenv").config();
//載入主要資料模型
const User = require("../userModel");

const bcrypt = require("bcrypt");

const seedData = [
  {
    username: "user1",
    email: "user1@example.com",
    password: 123456,
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    username: "user2",
    email: "user2@example.com",
    password: 123456,
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    username: "user3",
    email: "user3@example.com",
    password: 123456,
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    username: "user4",
    email: "user4@example.com",
    password: 123456,
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    username: "user5",
    email: "user5@example.com",
    password: 123456,
    isAvatarImageSet: false,
    avatarImage: "",
  },
  {
    username: "user6",
    email: "user6@example.com",
    password: 123456,
    isAvatarImageSet: false,
    avatarImage: "",
  },
];

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(async () => {
    console.log("DB Connection Successful!");

    const seedPromises = seedData.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password.toString(), 10);
      return User.create({
        username: user.username,
        email: user.email,
        password: hashedPassword,
        isAvatarImageSet: user.isAvatarImageSet,
        avatarImage: user.avatarImage,
      });
    });

    // 使用 Promise.all 等待所有使用者建立完成
    await Promise.all(seedPromises);

    console.log("Seed data inserted");
  })
  .catch((err) => {
    console.log(err.message);
  });
