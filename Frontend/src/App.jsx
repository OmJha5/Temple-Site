import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'

let appRouter = createBrowserRouter([
  {
      path : "/",
      element : <Home/>
  },

])

export default function App() {
  return (
    <div className='overflow-hidden'>
         <RouterProvider router={appRouter}></RouterProvider>
    </div>
  )
}
