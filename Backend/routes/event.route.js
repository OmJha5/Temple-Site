import express from "express"
import {createEvent , deleteEvent , editEvent , allEvents} from "../controller/event.controller.js"
const router = express.Router();

router.route("/create").post(createEvent);
router.route("/all").get(allEvents);
router.route("/delete/:id").delete(deleteEvent);
router.route("/edit/:id").put(editEvent);

export default router