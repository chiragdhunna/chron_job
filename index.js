// Importing required libraries
const cron = require("node-cron");
const express = require("express");

app = express();

// Creating a cron job which runs on every 10 second
cron.schedule("*/5 * * * * *", function () {
  console.log("running a task every 5 second");
  fetch("https://chron-job.onrender.com/").then((res, rej) => {});
  fetch("https://chat-go-taupe.vercel.app/").then((res, rej) => {});
  fetch("https://go-foods-backend.onrender.com").then((res, rej) => {});
});

app.listen(3000);
