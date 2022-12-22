const express = require("express");
const app = express();
require("dotenv").config();
app.use(express.json());
const Insta = require("@arashgh/insta-js");
const cors = require('cors');

app.use(cors({
  origin: '*'
}));

const client = new Insta.Client();

client.on("connected", () => {
  console.log(`Logged in as ${client.user.username}`);
});

app.listen(process.env.PORT, () => {
  console.log("Starting on " + process.env.PORT);
});

app.get("/getInfo/:user", async (req, res) => {
  let searchUser = req.params.user;
  console.log(searchUser);
  try {
    const user = await client.fetchUser(searchUser);

    res.json({username: user.username,name: user.fullName, picture: user.avatarURL})
  }
  catch (err) {
    console.log(err)
    res.status(404);
    res.send("Not found");
  }
});

const proxy = require('pass-cors')
app.use('/proxy', proxy);  //You can customise the route name

client.login("iglovecalculator", "19791101qwerty");
