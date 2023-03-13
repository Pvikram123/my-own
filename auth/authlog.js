require("dotenv").config()
const User = require("../model/auth_reg");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const login = async (req, res) => {
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
          expiresIn: "10m",
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
}
module.exports = login
