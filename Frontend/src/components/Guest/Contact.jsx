import React, { useState } from 'react'
import Navbar from './Navbar'
import { Input } from '../ui/input'
import { Textarea } from "@/components/ui/textarea"
import { Label } from '../ui/label'
import { Button } from '../ui/button'
import { toast } from 'sonner'
import axios from 'axios'
import { Loader2 } from 'lucide-react'

export default function Contact() {
    let [input, setInput] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    })
    let [loading , setLoading] = useState(false);

    let changeHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value })
    }

    let isValidEmail = () => {
        var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
        return re.test(input.email);
    }

    let isFormValid = () => {
        if (input.name == "") {
            toast.error("Name is Required");
            return false;
        }

        if (input.message == "" || input.message.length <= 10) {
            toast.error("Please Enter Your message of atleast 10 characters");
            return false;
        }

        if (input.phone == "" || isNaN(input.phone) || input.phone.length != 10) {
            toast.error("Please enter phone number correctly");
            return false;
        }

        if (!isValidEmail(input.email)) {
            toast.error("Please enter valid email");
            return false;
        }

        return true;
    }

    let submitHandler = async (e) => {
        e.preventDefault();
        if (isFormValid()) {
            try{
                setLoading(true);
                // let res = await axios.post("https://temple-site-backend.onrender.com/sendmail" , input , {
                let res = await axios.post("http://localhost:8080/sendmail" , input , {
                    headers : {
                        "Content-Type" : "application/json"
                    },
                })  

                if(res.data.success){
                    setInput({
                        name: "",
                        email: "",
                        phone: "",
                        message: "",
                    })

                    toast.success("Mail send Sucessfully!");
                }
            }
            catch(e){
                console.log(e);
                toast.error(e?.response?.data?.message);
            }
            finally{
                setLoading(false);
            }
        }
    }


    return (
        <div>
            <div className="">
                <Navbar />

                <div className="w-full h-fit">
                    <div className="my-10 flex max-md:flex-col md:justify-around md:gap-20 max-md:gap-10 w-full h-fit max-sm:px-5 sm:p-10">
                        <div className="leftInfo md:w-1/2 flex flex-col justify-center">
                            <h1 className='md:text-5xl max-md:text-3xl text-center'><span className='font-bold'>Contact</span><span className='font-normal'> Us</span></h1>
                            <p className="md:text-lg max-md:text-sm text-gray-600 my-5 leading-loose text-center">
                                Reach Out to Us Regarding Marriage execution , Health Checkups , <br /> Or Tour Of <span className='text-red-500'>Ved Mata</span> Temple
                            </p>
                        </div>

                        <div className="rightInfo md:w-1/2">
                            <form onSubmit={submitHandler} className='md:p-10 max-md:p-5 rounded-md !bg-white ' noValidate>
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor='name' >Name</Label>
                                        <Input id="name" name="name" value={input.name} onChange={changeHandler} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor='email' >Email</Label>
                                        <Input id="email" name="email" value={input.email} onChange={changeHandler} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor='phone' >Phone</Label>
                                        <Input id="phone" name="phone" value={input.phone} onChange={changeHandler} />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <Label htmlFor='message' >Message</Label>
                                        <Textarea id="message" rows="7" name="message" value={input.message} onChange={changeHandler}></Textarea>
                                    </div>
                                    
                                    {
                                        (loading) ? <Button type="submit"><Loader2 className='w-6 h-6 mr-1 animate-spin' />please wait..</Button> : <Button type="submit">Submit</Button>
                                    }

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
