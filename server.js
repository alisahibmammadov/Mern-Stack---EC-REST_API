import  express from "express";
import dotenv from 'dotenv'
import morgan from 'morgan'
import db from "./config/db.js";
import authRoutes from './routes/authRoute.js'

//configure env
dotenv.config()

//database config
db()

// rest object
const app = express();

// middlewares
app.use(express.json())
app.use(morgan("dev"))

// routes
app.use('/api/v1/auth', authRoutes)


//rest api
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to ecommerce app",
  });
});
//PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`Server Running on ${process.env.DEV_MODE} mode port ${PORT}`);
});


