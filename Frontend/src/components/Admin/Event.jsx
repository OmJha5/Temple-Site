import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { Loader2, Pencil, Trash } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from 'sonner';
import axios from 'axios';
import { EVENT_API_ENDPOINT } from '@/utils/apiendpoint';
import EditEvent from './EditEvent';

export default function Event() {
    let [allEvents, setAllEvents] = useState([]);
    let [message, setMessage] = useState("");
    let [loading, setLoading] = useState(false);
    let [open, setOpen] = useState(false);
    let [editEvent, setEditEvent] = useState(null); // jispe click hoga edit hone ke liye yeh usko point karega

    useEffect(() => {

        let getAllEvents = async () => {
            try {
                let res = await axios.get(`${EVENT_API_ENDPOINT}/all`, { withCredentials: true });

                if (res.data.success) {
                    setAllEvents(res.data.events);
                }
            }
            catch (e) {
                toast.error(e?.response?.data?.message);
            }
        }

        getAllEvents();
    }, [])

    let createEventHandler = async () => {
        if (message == "") {
            toast.error("Event message is required")
        }

        try {
            setLoading(true);

            let res = await axios.post(`${EVENT_API_ENDPOINT}/create`, { message: message }, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true
            })

            if (res.data.success) {
                setAllEvents([...allEvents, res.data.event]);
                setOpen(false);
                toast.success(res.data.message);
                setMessage("");
            }
        }
        catch (e) {
            toast.error(e?.response?.data?.message);
        }
        finally {
            setLoading(false);
        }
    }

    let deleteEventHandler = async (eventId) => {
        try {
            let res = await axios.delete(`${EVENT_API_ENDPOINT}/delete/${eventId}`, { withCredentials: true });

            if (res.data.success) {
                let updatedEvents = allEvents?.filter((event) => event._id != eventId);

                setAllEvents(updatedEvents);
                toast.success(res.data.message);
            }
        }
        catch (e) {
            toast.error(e?.response?.data?.message);
        }
    }

    return (
        <div>
            <div className="xl:px-20 flex flex-col">
                <div className="flex flex-col gap-3">
                    <Label htmlFor="message" className="text-xl">Message</Label>
                    <Input placeholder="Enter the event message" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full h-full py-2" />
                    {
                        (loading) ? <Button className="w-fit"><Loader2 className='animate-spin w-5 h-5 mr-2' /><span>please wait..</span></Button> : <Button className="w-fit" onClick={createEventHandler}>Add</Button>
                    }
                </div>


                <div className="flex flex-col sm:gap-4 max-sm:gap-2 sm:my-10 max-sm:my-4">
                    <h1 className='sm:text-3xl max-sm:text-xl my-3'>All Events</h1>

                    {
                        allEvents.length == 0 ? (
                            <span className='w-full text-center'>Oops No Event Found!</span>
                        ) : (
                            allEvents.map((event) => {
                                return <Card key={event._id} className="flex justify-between items-center bg-gray-100 dark:bg-gray-800">
                                    <CardContent className="text-sm py-3 leading-relaxed">{event?.message}</CardContent>
                                    <div className="flex sm:gap-2 max-sm:space-x-1">
                                        <Button variant="ghost" size="icon" onClick={() => {
                                            setEditEvent(event),
                                            setOpen(true)
                                        }}>
                                            <Pencil className="w-4 h-4 text-blue-500" />
                                        </Button>
                                        <Button variant="ghost" size="icon" onClick={() => deleteEventHandler(event?._id)} >
                                            <Trash className="w-4 h-4 text-red-500" />
                                        </Button>
                                    </div>
                                </Card>
                            })
                        )
                    }
                </div>
            </div>

            <EditEvent event={editEvent} open={open} setOpen={setOpen} allEvents={allEvents} setAllEvents={setAllEvents} loading={loading} setLoading={setLoading} />


        </div>
    )
}
