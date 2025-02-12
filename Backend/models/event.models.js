import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    message : {
        type : String,
        required : true,
    },
} ,{timestamps : true})

const Event = mongoose.model("Event" , eventSchema);
export default Event

