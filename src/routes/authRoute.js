const router = require("express").Router();
const authController = require("../controller/authController");
const passport = require("passport");

router.post("/login", authController.login);

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: `/` }),
  authController.authenticateGoogle
);

module.exports = router;
