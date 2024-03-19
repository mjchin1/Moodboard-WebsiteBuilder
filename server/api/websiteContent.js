const express = require("express");
const router = express.Router();

const {
  createWebsite,
  getWebsiteById,
  deleteWebsite,
  updateWebsite,
} = require("../db/sqlHelperFunctions/websiteContent");

router.post("/", async (req, res, next) => {
  try {
    const website = await createWebsite(req.body);
    res.send(website);
  } catch (error) {
    next(error);
    throw new Error(`${error.message}`);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const website = await getWebsiteById(req.params.id);
    res.send(website);
  } catch (error) {
    next(error);
  }
});

router.delete("/:id", async (req, res, next) => {
  try {
    const website = await deleteWebsite(req.params.id);
    res.send(website);
  } catch (error) {
    next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const website = await updateWebsite(req.params.id, req.body);
    res.send(website);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
