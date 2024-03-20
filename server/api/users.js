const express = require("express");
const router = express.Router();

const {
  createUser,
  getUserById,
  logUserIn,
  getUserByUsername,
  deleteUser,
} = require("../db/sqlHelperFunctions/users");

router.post("/", async (req, res, next) => {
  try {
    const user = await createUser(req.body);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const user = await getUserById(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const user = await logUserIn(req.body);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const user = await deleteUser(req.params.id);
    res.send(user);
  } catch (error) {
    next(error);
  }
});

router.get("/users/:username", async (req, res, next) => {
  try {
    const places = await getUserByUsername(req.params.username);
    res.send(places);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
