require("dotenv").config()
const User = require("../model/auth_reg");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const login = async (req, res) => {
if(req.body.useremail){
  try {
    const { useremail,userpassword } = req.body;
    if (!(useremail && userpassword)) {
      res.status(400).json({ Message: "All input required" });
    }
    const user = await User.findOne({ useremail: useremail });

    if (user && (await bcrypt.compare(userpassword, user.userpassword))) {
      const token = jwt.sign(
        { user_id: user._id, useremail },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );
  
      user.token = token;
      res                                                                                                                                                                                                                                                                             
      .status(200)
      .cookie("access_token", token)
      .send(`<body style="background-repeat: no-repeat;background-size:100%; background-image: url('https://images.unsplash.com/photo-1600577916048-804c9191e36c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2VsY29tZSUyMHNpZ258ZW58MHx8MHx8&w=1000&q=80')";><h1 style="color: white; text-align: center;">SUCCESS FULLY LOG IN</h1></body>`)
      return;
    }
    else{
    }    res.send(`<body  style="background-image:url('https://wallpaperset.com/w/full/d/3/7/355368.jpg');background-repeat: no-repeat;background-size:100%;"><p style="font-size: 80px;color: #cf3419;margin-top: 20%;margin-left: 13%;">stop!!</p><p>check password</p></body>`);


  } catch (err) {
    res.send("INVALID PASSWORD OR INFORMATION")
  }
}
else if (req.body.username)
{
  try {
    const { username,userpassword } = req.body;
    if (!(username && userpassword)) {
      res.status(400).json({ Message: "All input required" });
    }
    const user = await User.findOne({ username: username });

    if (user && (await bcrypt.compare(userpassword, user.userpassword))) {
      const token = jwt.sign(
        { user_id: user._id, username },
        process.env.TOKEN_KEY,
        {
          expiresIn: "1h",
        }
      );
      user.token = token;
      res
      .status(200)
      .cookie("access_token", token)
      .json({ message: "Log in"});
    }
    else{
    res.status(400).send("Invalid credentials");
    }

  } catch (err) {
    res.send("INVALID PASSWORD OR INFORMATION")
  }
}}

module.exports = login

