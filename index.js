const express=require("express")
const Mongoose=require("mongoose")
Mongoose.set('strictQuery', false);
const router=require("./routes/userRoute")
const authrouter=require("./routes/authRoutes")
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
const jwt_auth=require('./auth/authvadalation')
const cookieParser = require("cookie-parser");
app.use(cookieParser())



app.use(express.json())

app.use('/try',router)
app.use('/',jwt_auth)
app.use('/exe',authrouter)


const uri =`mongodb+srv://vikram24:${process.env.password}@cluster0.pwfx8lq.mongodb.net/karthi`;
Mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Port is running`);
  });