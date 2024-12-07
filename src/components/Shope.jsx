import React from 'react'
import { Nav } from './Nav'
import { Footer } from './Footer'
import { Section } from './Section'

export const Shope = () => {
  return (
 <>

 <Nav/>


 <div className="ourroom_main">
    <h1> BLOG LIFE </h1>
<div className="li_one"></div>

</div>



 <div className="blog_main">
    <div className="one_blog">
        <div class="bi-text">
                            <span class="b-tag">Travel Trip</span>
                            <h4><a href="#">Tremblant In Canada</a></h4>
                            <div class="b-time"><i class="icon_clock_alt"></i> 15th April, 2019</div>
                        </div>
 
    </div>
    <div className="two_blog">
    <div class="bi-text">
                            <span class="b-tag">Travel Trip</span>
                            <h4><a href="#">Tremblant In Canada</a></h4>
                            <div class="b-time"><i class="icon_clock_alt"></i> 15th April, 2019</div>
                        </div>
 
    </div>
    <div className="theer_blog">
    <div class="bi-text">
                            <span class="b-tag">Travel Trip</span>
                            <h4><a href="#">Tremblant In Canada</a></h4>
                            <div class="b-time"><i class="icon_clock_alt"></i> 15th April, 2019</div>
                        </div>
 
    
    </div>
</div>
<Footer/>



 </>
  )
}
