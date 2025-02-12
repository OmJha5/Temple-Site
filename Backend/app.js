import express, { urlencoded } from "express"
import cors from "cors";
import dotenv from "dotenv"
import nodejsmailer from "nodemailer"
import connectDB from "./utils/db.js"
import userRouter from "./routes/user.route.js"
import cookieParser from "cookie-parser";

const app = express();
dotenv.config({})
let port = process.env.PORT || 4000;

app.use(express.json())
app.use(urlencoded({ extended: true }))
const corsOptions = {
    // origin: "http://localhost:5173",
    origin : "https://temple-site-frontend.onrender.com",
    credentials : true,
}

app.use(cors(corsOptions))
app.use(cookieParser())

app.post("/sendmail", (req, res) => {
    let { name, email, phone, message } = req.body;

    var mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: process.env.RECEIVER_EMAIL,
        subject: "Ved Mata Trust ",
        text: message,
    }   

    var transporter = nodejsmailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.APP_PASSWORD   
        }
    }); 

    transporter.sendMail(mailOptions, function (error, info) {

        if (error) {
            console.log(error);
        } else {
            res.status(200).send({success : true});
        }
    });

})

// Api's
app.use("/api/user" , userRouter);

app.listen(port, () => {
    connectDB();
    console.log(`Server is listening on port ${port}`);
})