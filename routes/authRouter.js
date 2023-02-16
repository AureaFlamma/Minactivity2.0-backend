const express = require("express");
const { auth, requiresAuth } = require("express-openid-connect");
const app = express();

const config = {
  authRequired: false,
  auth0Logout: true,
  baseURL: "http://localhost:3001",
  clientID: "SgRDWmzL2HRcroVrrSDIfAHW3zemrJPU",
  issuerBaseURL: "https://dev-trctt397.us.auth0.com",
  secret: "7a565b8ba34431bd8774249df9da1530125555980408d087a71526aad7e08b1a",
};

// The `auth` router attaches /login, /logout
// and /callback routes to the baseURL
app.use(auth(config));

// req.oidc.isAuthenticated is provided from the auth router
app.get("/", (req, res) => {
  res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
});

// The /profile route will show the user profile as JSON
app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user, null, 2));
});

app.listen(3000, function () {
  console.log("Listening on http://localhost:3000");
});
