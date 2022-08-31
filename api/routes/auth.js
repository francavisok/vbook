const express = require("express");
const { User, Favorite } = require("../models");
const router = express.Router();
const { validateAuth } = require("../middleware/auth");
const AuthController = require("../controllers/auth");
const { get } = require("lodash");
const axios = require("axios");
const queryString = require("query-string");

const GITHUB_CLIENT_ID = "e0eca9e086336811ccf5";
const GITHUB_CLIENT_SECRET = "de5359490081c49cd159079bab72280c5c3ea5e2";

const responseGitHub = async (code) => {
  const githubToken = await axios
    .post(
      `https://github.com/login/oauth/access_token?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}&code=${code}`
    )
    .then((res) => res.data);

  const { access_token } = queryString.parse(githubToken);

  return axios
    .get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${access_token}` },
    })
    .then((res) => res.data)
    .catch((error) => {
      console.error("Error getting user from GitHub");
      throw error;
    });
};

router.post("/login", AuthController.userLogin);

router.get("/login", async (req, res) => {
  const code = get(req, "query.code");
  const path = get(req, "query.path", "/");
  const gitHubUser = await responseGitHub(code);
  console.log("un console.log");
  const usuario = await axios.post("http://localhost:3001/api/auth/login", {
    userName: gitHubUser.login,
    name: gitHubUser.login,
    lastName: "github",
    loginWithOauth: true,
    email: `${gitHubUser.login}@gmail.com`,
  });
  res.send(usuario);
});

router.post("/signin", AuthController.userSignUp);

router.post("/logout", AuthController.logOut);

router.get("/me", validateAuth, async (req, res) => {
  const user = await User.findOne({
    where: req.user,
    include: [
      {
        model: Favorite,
      },
    ],
  });
  res.send(user);
});

module.exports = router;
