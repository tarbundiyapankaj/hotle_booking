import React from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
import img1 from "../assets/img/logo.png"


export const Nav = () => {
  return (
<>
<div className="main">
    <div className="left">
<h1>SONA</h1>
    </div>
    <div className="right">
    <nav>
    <ul>
        <Link className='for'  to={'/'}>HOME</Link>
        <Link className='for' to={'/Room'}>ROOM</Link>
        <Link  className='for' to={'/About'}>ABOUT</Link>
        <Link  className='for' to={'/Shope'}>BLOG</Link>
        <Link  className='for' to={'/Content'}> CONTACT</Link>
    </ul>
</nav>

    </div>
</div>



</>
  )
}
