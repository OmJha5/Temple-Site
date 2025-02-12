import Event from "../models/event.models.js";

export let createEvent = async (req, res) => {
    try {
        let { message } = req.body;

        if (message == "") {
            return res.status(400).json({
                message: "Message is required",
                success: false
            })
        }

        let event = await Event.create({
            message
        })

        return res.status(200).json({
            message: "Event created Successfully",
            success: true,
            event
        })
    }
    catch (e) {
        return res.status(400).json({
            message: "Internal server error",
            success: false
        })
    }
}

export let deleteEvent = async (req, res) => {
    try {
        let { id } = req.params;

        let event = await Event.findOne({ _id: id });
        if (!event) {
            return res.status(400).json({
                message: "Event Id is wrong",
                success: false
            })
        }

        await Event.deleteOne({ _id: id });
        return res.status(200).json({
            message: "Event Deleted Successfully",
            success: true
        })
    }
    catch (e) {
        return res.status(400).json({
            message: "Internal server error",
            success: false
        })
    }
}

export let editEvent = async (req, res) => {
    try {
        let { id } = req.params;
        let { message } = req.body;

        if (message == "") {
            return res.status(400).json({
                message: "Message is required",
                success: false
            })
        }

        let event = await Event.findOne({ _id: id });
        if (!event) {
            return res.status(400).json({
                message: "Event Id is wrong",
                success: false
            })
        }

        event = await Event.findByIdAndUpdate(id, {message : message} , {new:true});
        return res.status(200).json({
            message: "Event Updated Successfully",
            success: true,
            event
        })
    }
    catch (e) {
        return res.status(400).json({
            message: "Internal server error",
            success: false
        })
    }
}

export let allEvents = async (req, res) => {

    try {
        let events = await Event.find({});
        return res.status(200).json({
            events,
            success: true
        })
    }
    catch (e) {
        return res.status(400).json({
            message: "Internal server error",
            success: false
        })
    }
}

