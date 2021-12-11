"use strict";
const {
  getAllUsers,
  getUserById,
  addNewUser,
  updateUser,
  getExistingUser,
  addReview,
} = require("./handlers");

// import the needed node_modules.
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const PORT = 8000;

express()
  // log more info to the console.
  .use(morgan("tiny"))
  .use(express.json())

  // Any requests for static files will go into the public folder
  .use(express.static("public"))

  // endpoints are added below
  .get("/users", getAllUsers)
  .get("/profile/:_id", getUserById)
  .post("/users/:email", getExistingUser)
  .post("/users", addNewUser)
  .patch("/users/:_id", updateUser)
  .post("/profile/:_id", addReview)
  // endpoints are added above

  .listen(PORT, function () {
    console.info("🌍 Listening on port " + PORT);
  });
