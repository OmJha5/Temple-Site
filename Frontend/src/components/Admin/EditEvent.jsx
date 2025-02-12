import React, { useEffect, useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogTitle
} from "@/components/ui/dialog"
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Loader2 } from 'lucide-react'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import axios from 'axios'
import { EVENT_API_ENDPOINT } from '@/utils/apiendpoint'

export default function EditEvent({open , setOpen , allEvents , setAllEvents , event , loading , setLoading}) {
    let [message , setMessage] = useState(event?.message);

    useEffect(() => {
        setMessage(event?.message)
    } , [event])

    let editEventHandler = async() => {
        try{
            setLoading(true);
            let res = await axios.put(`${EVENT_API_ENDPOINT}/edit/${event._id}` , {message : message} , {
                headers : {
                    "Content-Type" : "application/json"
                },
                withCredentials : true
            })

            if(res.data.success){
                let currKeAlawa = allEvents.filter((e) => e._id != event._id);
                let allUpdated = [...currKeAlawa , res.data.event]
                setAllEvents(allUpdated);
                setOpen(false);
            }
        }
        catch(e){
            toast.error(e?.response?.data?.message)
        }
        finally{
            setLoading(false);
        }
    }
  return (
    <div>
        <Dialog open={open}>
                <DialogContent onInteractOutside={() => setOpen(false)} className="w-[95%]">

                    <DialogTitle></DialogTitle>

                    <div className="flex flex-col gap-4">
                        <Label htmlFor="message" className="text-xl">Message</Label>
                        <Input placeholder="Enter the event message" name="message" id="message" value={message} onChange={(e) => setMessage(e.target.value)} className="w-full h-full py-2" />
                        {
                            (loading) ? <Button className="w-fit"><Loader2 className='animate-spin w-5 h-5 mr-2' /><span>please wait..</span></Button> : <Button className="w-fit" onClick={editEventHandler}>Edit</Button>
                        }
                    </div>


                </DialogContent>
            </Dialog>
    </div>
  )
}
