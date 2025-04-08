const express = require("express");

const router = express.Router();

const { LOGOUT_LINKS } = require("../constants/navigation");

router.get("/", (_request, response) => {
  response.render("logout", {
    headTitle: "Shop - Logout",
    path: "/logout",
    menuLinks: LOGOUT_LINKS,
    activeLinkPath: "/logout"
  });
});

module.exports = router;
