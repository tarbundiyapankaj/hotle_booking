import React from 'react'
import "./Footer.css"
import img3 from "../assets/img/footer-logo.png"

export const Footer = () => {
  return (
   <>
  <footer>

<div className="footer_main">

    <div className="one_footer">
    <img src={img3} alt="" />
    <p>We inspire and reach millions of travelers <br />across 90 local websites</p>
    <div class="fa-social">
                                <a href="#"><i class="fa-brands fa-facebook icone"></i></a>
                                <a href="#"><i class="fa-brands fa-twitter icone"></i></a>
                                <a href="#"><i class="fa-brands fa-linkedin icone"></i></a>
                                <a href="#"><i class="fa-brands fa-instagram icone"></i></a>
                                <a href="#"><i class="fa-brands fa-youtube icone"></i></a>
                            </div>
    </div>
    <div className="two_footer">
    <h4>Contact Us</h4>
    <ul>
                             <li>(12) 345 67890</li>
                                <li>info.colorlib@gmail.com</li>
                                <li>856 Cordia Extension Apt. 356, Lake, <br /> United State</li>
                            </ul>
    </div>
    <div className="theer_footer">
    <h4>New latest</h4>
    <p>Get the latest updates and offers.</p>
    <p>Get the latest updates and offers.</p>
    <p>Get the latest updates and offers.</p>
   
    </div>
</div>
<div className="li"></div>
  </footer>
   </>
  )
}
