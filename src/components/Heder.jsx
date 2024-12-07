import React from 'react'
import "./Heder.css"

export const Heder = () => {
  return (
   <>
   <div className="heder_main">
    <div className="left_heder">
        <h1>SONAL  A LUXURY <br />HOTEL</h1>
        <p>Here are the best hotel booking sites, brincluding recommendations for <br />international
        travel and for finding low-priced hotel rooms.</p>

     <div className="btn_one"> <button type="button" className="btn btn-success ">Discover Now</button></div>  

       
    </div>
    <div className="right_heder">
      <div className="booking">
        <h3>BOOKING  YOUR HOTEL</h3>
        <form action="">
       <div className="check_in"><label for="date-in">Check In:</label>
        <input type="date" className="date-input hasDatepicker" id="date-in" fdprocessedid="f7hxqs"></input></div> 
      <div className="check_out">  <label for="date-out">Check Out:</label>
        <input type="date" className="date-input hasDatepicker" id="date-out" fdprocessedid="7y02th"></input></div>
      <div className="guest">  <label for="date-out">Guests:</label>
        <input type="number" className="date-input hasDatepicker" id="date-out" fdprocessedid="7y02th"></input></div>
      <div className="room">  <label for="date-out">Room:</label>
        <input type="number" className="date-input hasDatepicker" id="date-out" fdprocessedid="7y02th"></input></div>

      <div className="b_one"> </div> 
     
<button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#exampleModal">
BOOKING NOW
</button>


<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">BOOKING NOW</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        YES YOUR HOTEL  BOOKING SUCCESS
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
      

        </form>
      </div>
    </div>
   </div>
   </>
  )
}
