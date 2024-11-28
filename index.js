// Importing required libraries
const cron = require("node-cron");
const express = require("express");

app = express();

// Creating a cron job which runs on every 10 second
cron.schedule("*/10 * * * * *", function () {
  console.log("running a task every 10 second");
  const response = fetch("https://chat-go-taupe.vercel.app/").then(
    (res, rej) => {
      console.log(`res : ${res.data}`);
    }
  );
});

app.listen(3000);
