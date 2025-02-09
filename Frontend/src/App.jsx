import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Privacy from './components/Privacy'
import RefundAndCancellation from './components/RefundAndCancellation'
import About from './components/About'
import Gallary from './components/Gallary'

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
  }

])

export default function App() {
  return (
    <div className='overflow-hidden bg-[#f1f1f1]'>
         <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}
