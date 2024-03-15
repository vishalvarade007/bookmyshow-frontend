import React from 'react'

export default function Movie(props) {
   const {images} = props;
  return (
    <>
        <div className='container-movie'>
            <h2>Select a Movie</h2>
            <hr/>
            <div style={{display:"inline-block"}}>
                <div className='movie-div'>
                    {images.map((imageurl,index)=>(
                        <img 
                          key={index}
                          src={imageurl}
                          alt={`Movie ${index + 1}`}
                          className='movie-img'
                        />
                    ))}
                </div>
                {props.data.map((el,i)=>(
                   <div className='movie-name' style={{display:"inline-block"}} key={i}>
                     <div style={{backgroundColor:`${props.movieData === el?"#f08e33":"white"}`,border:"1px solid black",height:"100%",display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer"}} onClick={()=>props.movieSelector(el)} key={i} className='element1'>
                           <h3>{el}</h3>
                     </div>
                   </div>
                ))}
            </div>
        </div>
    </>
  )
}
