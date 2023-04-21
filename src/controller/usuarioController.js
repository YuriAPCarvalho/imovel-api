const express = require("express");
const router = express.Router();

router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: `/` }),
  async (req, res) => {
    let formatted_user = {
      code: req.user.id,
      name: req.user.displayName,
      email: req.user.emails[0].value,
      active: true,
    };
    const user = await authenticateGoogle(formatted_user);
    const query = qs.stringify(user);
    return res.redirect("http://localhost:3000/inquilino" + query);
  }
);

module.exports = router;
