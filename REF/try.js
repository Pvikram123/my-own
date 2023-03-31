const User = require("../models/user");
const jwt = require("jsonwebtoken");

const bcrypt = require("bcryptjs");

const register = async (req, res) => {
  const { username, password, email } = req.body;
  if (password.lenght < 6) {
    return res
      .status(400)
      .json({ message: "password must be at least 6 characters" });
  }

  bcrypt.hash(password, 10).then(
    async (hash) =>
      await User.create({
        email,
        username,
        password: hash,
      })
        .then((user) =>
          res.status(200).json({
            message: "User successfully created",
            user,
          })
        )
        .catch((error) =>
          res.status(400).json({
            message: "User not successful created",
            error: error.message,
          })
        )
  );
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!(email && password)) {
      res.status(400).json({ Message: "All input required" });
    }
    const user = await User.findOne({ email: email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "10m",
        }
      );

      res
      .status(200)
      .cookie("access_token", token)
      .json({ message: "Logged in successfully 😊 👌" });``
    }
    res.status(400).send("Invalid credentials");
  } catch (err) {
    res.send(err).status(500);
  }
};

const home = (req, res) => {
  res.status(200).json({ Message: "Welcome to Dashboard" });
};

const logout = (req, res) => {
  res
  .clearCookie("access_token")
  .status(200)
  .json({ message: "Successfully logged out 😏 🍀" });

};


module.exports = {
  login,
  home,
  register,
  logout
};