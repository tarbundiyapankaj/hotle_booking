import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Home } from './components/Home'
import { Shope } from './components/Shope'
import { Room } from './components/Room'
import { About } from './components/About'
import { Content } from './components/Content'
import { Heder } from './components/Heder'
import { Section } from './components/Section'
import { Footer } from './components/Footer'
import { Ourroom } from './components/Ourroom'
import { Contactone } from './components/Contactone'
import { Aboutus } from './components/Aboutus'







<>
<Nav/>
<Heder/>
<Section/>
<Footer/>
<Ourroom/>
<Contactone/>
<Aboutus/>
</>


function App() {


 
let router = createBrowserRouter([

  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/Shope',
    element:<Shope/>
  },
  {
    path: '/Room',
    element:<Room/>
  },
  {
    path: '/About',
    element:<About/>
  },
  
  {
    path: '/Content',
    element:<Content/>
  },
  

   

])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}



export default App
