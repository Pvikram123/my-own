const createerror = require('http-errors');
const User = require("../model/auth_reg");
const bcrypt = require("bcryptjs");



const register = async (req, res) => {
  console.log(req.body);
  const { username, userpassword, useremail,userphno,dateofbirth } = req.body;
  const doesexist = await User.findOne({useremail: useremail});
        if(doesexist){res.send("email already exist")
         return
        }

  const phnodoesexist = await User.findOne({userphno: userphno});
     if(phnodoesexist){res.send("phnumber already exist")
    return  
  }

  bcrypt.hash(userpassword, 10).then(
    async (hash) =>
      await User.create({
        useremail,
        username,
        userpassword: hash,
        userphno,
        dateofbirth,
        date:new Date().toLocaleDateString('es-MX'),
      })
    
    
      

        .then((user) =>
        res.sendFile("/home/vikram/Desktop/folder/git/karthi/HTML/log.html")
            
        
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