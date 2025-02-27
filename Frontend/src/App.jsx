import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Guest/Home'
import Privacy from './components/Guest/Privacy'
import RefundAndCancellation from './components/Guest/RefundAndCancellation'
import About from './components/Guest/About'
import Gallary from './components/Guest/Gallary'
import Contact from './components/Guest/Contact'
import Admin from './components/Admin/Admin'
import AdminLogin from './components/Admin/AdminLogin'


let appRouter = createBrowserRouter([
  {
      path : "/",
      element : <Home/>
  },
  {
      path : "/privacy",
      element : <Privacy/>
  },
  {
      path : "/refundandcancellation",
      element : <RefundAndCancellation/>
  },
  {
      path : "/about",
      element : <About/>
  },
  {
      path : "/gallary",
      element : <Gallary/>
  },
  {
      path : "/contact",
      element : <Contact/>
  },
  {
      path : "/admin",
      element : <Admin/>
  },
  {
      path : "/admin/login",
      element : <AdminLogin/>
  }

])

export default function App() {
  return (
    <div className='overflow-hidden bg-[#f1f1f1]'>
         <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}
