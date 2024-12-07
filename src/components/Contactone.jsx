import React from 'react'
import "./Contactone.css"
export const Contactone = () => {
  return (
   <>


<div className="ourroom_main">
    <h1> CONTACT </h1>
<div className="li_one">

</div>
</div>
   <div className="contactone_main">
    <div className="contact_one_left">
        <h1>Contact Info</h1>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br /> sed do eiusmod tempor incididunt ut labore et <br />  dolore magna aliqua.</p>
        <table>
                            <tbody>
                                <tr>
                                    <td class="c-o">Address:</td>
                                    <td>856 Cordia Extension Apt. 356, Lake, US</td>
                                </tr>
                                <tr>
                                    <td class="c-o">Phone:</td>
                                    <td>(12) 345 67890</td>
                                </tr>
                                <tr>
                                    <td class="c-o">Email:</td>
                                    <td>info.colorlib@gmail.com</td>
                                </tr>
                                <tr>
                                    <td class="c-o">Fax:</td>
                                    <td>+(12) 345 67890</td>
                                </tr>
                            </tbody>
                        </table>
    </div>
    <div className="contact_one_right">
<div className='oi'><input type="text"  placeholder='your name' className='name' />
<input type="email"  placeholder='your email' className='email' /></div>

<input type="text" placeholder='your message' className='message' />

<button type='submit' className='submit'>SUBMIT NOW</button>

    </div>
   </div>


   <div className="map_one">
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29379.410509689245!2d71.1626708916902!3d23.0081142197069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395a2ab850611bf3%3A0x4ee9eb2bf06fa337!2sHalvad%2C%20Gujarat%20363330!5e0!3m2!1sen!2sin!4v1730006288368!5m2!1sen!2sin" width="100%" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
   </div>
   </>
  )
}


