import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import axios from 'axios'
import { USER_API_ENDPOINT } from '@/utils/apiendpoint'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '@/redux/userSlice'
import { useNavigate } from 'react-router-dom'
import { Button } from '../ui/button'
import { toast } from 'sonner'

export default function AdminLogin() {
  let [input, setInput] = useState({
    email: "",
    password: "",
    role: "",
  })

  let {user} = useSelector((state) => state.user);
  let dispatch = useDispatch();
  let navigate = useNavigate();

  let changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  }

  let isValidEmail = () => {
    var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
    return re.test(input.email);
  }

  let isFormValid = () => {
    if (input.password == "") {
      toast.error("Password is Required");
      return false;
    }

    if (input.role == "") {
      toast.error("Role is required");
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
        let res = await axios.post(`${USER_API_ENDPOINT}/login` , input , {
          headers : {
            "Content-Type" : "application/json"
          },
          withCredentials : true
        })

        if(res.data.success){
            dispatch(setUser(res.data.user));
            navigate("/admin");
            setInput({
              email: "",
              password: "",
              role: "",
            });
        }
        else{
          toast.error(res.data.message);
        }

      }
      catch(e){
        toast.error(e?.response?.data?.message);  
      }

    }
  }

  return (
    <div className='!bg-white'>
      <div className="w-screen h-screen flex justify-center items-center flex-col">
        <h1 className='text-2xl font-semibold my-5 '>Admin Login</h1>

        <div className='rounded-md shadow-xl p-5 w-1/2'>
          
          <form onSubmit={submitHandler} className='flex flex-col gap-5 my-3'>
            <div>
              <Label className="mb-2" htmlFor="email" >Email</Label>
              <Input name="email" id="email" value={input.email} onChange={changeEventHandler} />
            </div>

            <div>
              <Label className="mb-2" htmlFor="password" >Password</Label>
              <Input type="password" name="password" id="password" value={input.password} onChange={changeEventHandler} />
            </div>

            <div className='flex gap-6'>
              <div className="flex gap-2 items-center">
                <Input type="radio" name="role" id="admin" value="admin" onChange={changeEventHandler} />
                <Label htmlFor="admin" >Admin</Label>
              </div>

              <div className="flex gap-2 items-center">
                <Input type="radio" name="role" id="superadmin" value="superadmin" onChange={changeEventHandler} />
                <Label htmlFor="superadmin" >Superadmin</Label>
              </div>
            </div>

            <Button type="submit" className="mt-3 h-0 py-4 bg-blue-500 hover:bg-blue-400">Submit</Button>
          </form>

        </div>
      </div>
    </div>
  )
}
