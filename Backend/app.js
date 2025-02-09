import express, { urlencoded } from "express"
import cors from "cors";
import dotenv from "dotenv"
import nodejsmailer from "nodemailer"

const app = express();
dotenv.config({})
let port = process.env.PORT;

app.use(express.json())
app.use(urlencoded({ extended: true }))
const corsOptions = {
    origin: "https://temple-site-frontend.onrender.com/",
}

app.use(cors(corsOptions))

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

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})