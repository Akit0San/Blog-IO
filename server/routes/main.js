const express = require("express");
const router = express.Router();

/**
 * @description: This is the root route for testing
 */
router.get("/", (req, res) => {
  const locals = {
    title: "Blog-IO",
    description: "This Blog is make with Node.js, Express, EJS, and MongoDB",
  };

  res.render("index", { locals });
});
router.get("/about", (req, res) => {
  res.render("about");
});

module.exports = router;
