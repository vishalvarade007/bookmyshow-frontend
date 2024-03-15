import React from 'react'

export default function Slot(props) {
  return (
    <div className='container'>
        <h2>Select a Time Slot</h2>
        {props.data.map((el,i)=>(
          <h3 style={{backgroundColor:`${props.slotData === el?"#f08e33":"white"}`,cursor:"pointer"}} onClick={()=>{props.slotSelector(el);console.log("clicked")}} className='element' key={i}>{el}</h3>
        ))}
    </div>
  )
}
