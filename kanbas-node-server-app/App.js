import express from 'express';
import "dotenv/config";
import session from "express-session";
import Hello from "./Hello.js"
import Lab5 from "./Lab5.js";
import mongoose from "mongoose";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import cors from "cors";
import UserRoutes from "./Users/routes.js";
import QuizRoutes from './Kanbas/Quizzes/routes.js';



const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors({
    origin: process.env.FRONTEND_URL,
    secret: process.env.SESSION_SECRET,
  }
 ))

const sessionOptions = {
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  proxy: true,
};
if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
}
app.use(session(sessionOptions));
  
  
app.use(express.json());
UserRoutes(app);
QuizRoutes(app);
CourseRoutes(app);
ModuleRoutes(app);
Lab5(app)
Hello(app)
app.listen(4000)
//app.listen(process.env.PORT || 4000)

