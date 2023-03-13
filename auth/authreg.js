const User = require("../model/auth_reg");
const bcrypt = require("bcryptjs");



const register = async (req, res) => {
  const { username, userpassword, useremail } = req.body;
 
  bcrypt.hash(userpassword, 10).then(
    async (hash) =>
      await User.create({
        useremail,
        username,
        userpassword: hash,
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



module.exports= register