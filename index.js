require('dotenv').config()
const express = require("express");
const app = express();
const port = 3000;

const githubData = {
  "login": "amareshmaharana",
  "id": 183964141,
  "node_id": "U_kgDOCvcR7Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/183964141?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/amareshmaharana",
  "html_url": "https://github.com/amareshmaharana",
  "followers_url": "https://api.github.com/users/amareshmaharana/followers",
  "following_url": "https://api.github.com/users/amareshmaharana/following{/other_user}",
  "gists_url": "https://api.github.com/users/amareshmaharana/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/amareshmaharana/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/amareshmaharana/subscriptions",
  "organizations_url": "https://api.github.com/users/amareshmaharana/orgs",
  "repos_url": "https://api.github.com/users/amareshmaharana/repos",
  "events_url": "https://api.github.com/users/amareshmaharana/events{/privacy}",
  "received_events_url": "https://api.github.com/users/amareshmaharana/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Amaresh Maharana",
  "company": null,
  "blog": "amareshmaharana.netlify.app",
  "location": "India",
  "email": null,
  "hireable": null,
  "bio": "Full Stack Developer || Experiencing with web apps to create solve big problems. Always enhancing the capabilities.",
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 4,
  "created_at": "2024-10-06T03:49:33Z",
  "updated_at": "2024-11-24T02:40:22Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/github", (req, res) => {
    res.send(githubData);
})

app.get("/login", (req, res) => {
    res.send("<h1>please Login at our website</h1>");
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
