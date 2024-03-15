import React from 'react';
import nobooking from "./Images/nobookingnew.jpg";
import spinner from "./Images/Spinner-3.gif";

export default function Lastbooking(props) {
  console.log(props.data);
  return (
    <div className='bookingContainer'>
       {!props.data ?(
        <img
          className='loaderImg'
          src={spinner}
          alt={"No Booking Found"}
        />
       ):props.data === "No Previous Booking Found !!!"?(
        <div className='noBooking'>
           <h2>No Booking Found</h2>
           <img
            src={nobooking}
            alt={"No-Booking"}
            style={{ height: "180px", width: "180px", marginTop: "1px" }}
          />
        </div>
       ):(
         <>
           <h2 style={{marginBottom:"6px"}}>Last Booking Details:</h2>
           <h3>Seats:</h3>
           {props.data.seats && props.data.seats.map((el,i)=>(
            <div key={i}>
              <span style={{fontWeight:"bold"}}>{el.seatType} :{" "}</span>
              <span style={{fontWeight:"bold",fontStyle:"italic",color:"#333545"}}>{el.seatNo}</span>
            </div>
           ))}
           <div>
            <h3 style={{display:"inline"}}>Slot: {" "}</h3>
            <p style={{display:"inline",fontWeight:"bold",fontStyle:"italic",color:"#333545"}}>{props.data.slot}</p>
           </div>
           <div>
             <h3 style={{display:"inline"}}>Movie:{" "}</h3>
             <p style={{display:"inline",fontWeight:"bold",fontStyle:"italic",color:"#333545"}}>{props.data.movie}</p>
           </div>
           

         </>
       )}
    </div>
  )
}
