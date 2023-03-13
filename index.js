const express=require("express")
const Mongoose=require("mongoose")
Mongoose.set('strictQuery', false);
const router=require("./routes/routes")
const app=express()
const jwt_auth=require('./auth/authvadalation')
const register=require("./auth/authreg.js")
const login = require("./auth/authlog")
const userlogout= require("./auth/authlogout")
const delete_user=require("./controllers/delete")
const cookieParser = require("cookie-parser");
app.use(cookieParser())


app.use(express.json())
app.post("/reg",register)
app.post("/log",login)
app.delete("/out",userlogout)
router.delete('/del',jwt_auth,delete_user)

app.use('/',jwt_auth)
app.use('/exe',router)

const uri =`mongodb+srv://vikram24:${process.env.password}@cluster0.pwfx8lq.mongodb.net/karthi`;
Mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Port is running`);
  });