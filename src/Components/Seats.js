import React from 'react'

export default function Seats(props) {
  const handleChange = (e,el)=>{
      const seatsData = {
        seatType:el,
        seatNo:Number(e.target.value)
      }
      props.seatSelector(seatsData);
  }
  return (
    <div className='container'>
      <h2>Select the Seats</h2>
       {props.data.map((el,i)=>(
         <div key={i} className='element'>
            <h3 style={{display:"flex",justifyContent:"center"}}>{el}</h3>
            <input type='number' style={{fontWeight:"bold"}} onChange={(e)=>handleChange(e,el)} min="1" max="10" step="1" name="seats"/>
         </div>
       ))}
    </div>
  )
}
