import React from 'react'
import "./Aboutus.css"
import img7 from "../assets/img/play.png"

export const Aboutus = () => {
  return (
   <>


   <div className="ourroom_main">
    <h1> ABOUT US</h1>
<div className="li_one">

</div>
</div>


<div className="aboutus_Main">
    <div className="aboutus_left">

        <h1>Welcome To Sona.</h1>
        <p>Built in 1910 during the Belle Epoque period, this hotel is located in the</p>
        <p>center of Paris, with easy access to the city’s tourist attractions. It offers</p>
        <p>tastefully decorated rooms.</p>
    </div>
    <div className="aboutus_right">
        <ul class="ap-services">
                            <li><i class="fa-solid fa-check in"></i> 20% Off On Accommodation.</li>
                            <li><i class="fa-solid fa-check in"></i>Complimentary Daily Breakfast</li>
                            <li><i class="fa-solid fa-check in"></i> 3 Pcs Laundry Per Day</li>
                            <li><i class="fa-solid fa-check in"></i> Free Wifi.</li>
                            <li><i class="fa-solid fa-check in"></i> Discount 20% On F&amp;B</li>
                        </ul>
    </div>
</div>

<div class="video">
                        <h2>Discover Our Hotel &amp; Services.</h2>
                        <p>It S Hurricane Season But We Are Visiting Hilton Head Island</p>
                        <a href="https://youtu.be/XsdP-bL3cmU?si=PWI1kCjf5z2xi22y" class="play-btn video-popup"> <img src={img7} alt="" /></a>
                    </div>
   
   
   </>
  )
}
