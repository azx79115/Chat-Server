# Chat-Server

這是一個 Chat-APP 的 Server 端程式，提供會員註冊登陸，發送訊息等 API 功能。

## Chat-Server URL

https://chat-server-sxk2.onrender.com

![image](./螢幕擷取畫面%202023-08-21%20102950.png)

## 功能

- 使用者可以註冊/登入帳號
- 使用者可以設定系統隨機抽取的 4 個頭像
- 登入後使用者可以查看所有註冊會員
- 使用者可以和所有註冊會員進行 1 對 1 即時通訊

## 測試帳號

```
  {
    email: "user1@example.com",
    password: 123456,
  },
  {
    email: "user2@example.com",
    password: 123456,
  },
  {
    email: "user3@example.com",
    password: 123456,
  },
  {
    email: "user4@example.com",
    password: 123456,
  },
  {
    email: "user5@example.com",
    password: 123456,
  },
  {
    email: "user6@example.com",
    password: 123456,
  }
```

## Tools

```
    "bcrypt": "^5.1.0",
    "cors": "^2.8.5",
    "dotenv": "^16.3.1",
    "express": "^4.18.2",
    "mongoose": "^7.4.2",
    "socket.io": "^4.7.2"
```
