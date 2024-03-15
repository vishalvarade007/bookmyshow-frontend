import "./App.css";
import Movie1 from "./Components/Images/Suraj_Pe_Mangal_Bhari.jpg";
import Movie2 from "./Components/Images/tenet.jpg";
import Movie3 from "./Components/Images/the_war_with_grandpa.jpg";
import Movie4 from "./Components/Images/david.jpg";
import Movie5 from "./Components/Images/comeplay.jpg";
import data from "./Components/Data";
import { useEffect, useState } from "react";
import axios from "axios";
import {BASE_URL} from "./url";
import img from "./Components/Images/bookmyshownew.png";
import Movie from "./Components/Movie";
import Slot from "./Components/Slot";
import Seats from "./Components/Seats";
import Lastbooking from "./Components/Lastbooking";


function App() {
  //images array
   let images = [
      `${Movie1}`,
      `${Movie2}`,
      `${Movie3}`,
      `${Movie4}`,
      `${Movie5}`
   ];

   //save moviedata
   const [movieData,setMovieData] = useState({
    movie:"",
    slot:"",
    seats:[],
   });
   const [fetched,setFetched] = useState([]);

   const movieHandler = (movie)=>{
      setMovieData((prev)=>{
        return {
          ...prev,
          movie,
        };
      });
   };

   const slotHandler = (slot)=>{
    setMovieData((prev)=>{
      return {
        ...prev,
        slot,
      };
    });
   };

   const seatHandler = (seat)=>{
     const seatIndex = movieData.seats.findIndex(
      (el)=>el.seatType === seat.seatType
     );

     if(seatIndex !== -1){
        const newseatData = [...movieData.seats];
        newseatData[seatIndex] = seat;

        setMovieData((prev)=>{
          return {
            ...prev,
            seats:newseatData,
          };
        });
     } else {
          setMovieData((prev)=>{
            return {
              ...prev,
              seats:[...prev.seats,seat]
            };
          });
     }

   };

   movieData.seats = movieData.seats.filter(
    (item)=> item.seatNo !== "" && item.seatNo !== 0
   );

  

   const postData = async()=>{
     await axios
         .post(`${BASE_URL}/api/booking`,movieData)
         .then((res)=> {setFetched(res.data);console.log(res.data)})
         .catch((err)=>{
          console.log(err);
         })
   };

   const handleSubmit = ()=>{
         if(
          movieData.movie === "" ||
          movieData.slot === "" ||
          movieData.seats.length === 0
         ){
            return alert("Select all the details and then submit !");
         } else {
          postData();
          return alert("Your Booking is successful !!");
         }
   };

   const fetchData = async()=>{
        await axios
        .get(`${BASE_URL}/api/booking`)
        .then((res)=>setFetched(res.data))
        .catch((err)=>console.log(err.toJSON()));
   };

   useEffect(()=>{
     fetchData();
   },[]);

   const handleDelete = async()=>{
          await axios
          .delete(`${BASE_URL}/api/booking`)
          .then((res)=>res.data)
          .then(setFetched("No Previous Booking Found !!!"))
          .catch((err)=>console.log(err));
   };
   console.log(movieData,"moviedata");
   console.log(fetchData,"fetchdata");
  return (
    <div className="mainContainer">
        <div className="img-container">
             <img src={img} alt="logo" height="50px" width="150px"></img>
        </div>
        <div style={{display:"flex"}}>
        <div className="AppContainer">
          <div className="container-outer">
            <Movie images={images} data={data.movies} movieSelector={movieHandler} movieData={movieData.movie} />
            <Slot data={data.slots} slotSelector={slotHandler} slotData={movieData.slot}/>
            <Seats data={data.seats} seatSelector={seatHandler}/>
            <div className="btn">
              <button className="submit-btn" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
        <div>
          <Lastbooking data={fetched}/>
        <div className="btn-2" onClick={handleDelete}>
          <button className="submit-btn">
            clear
          </button>
        </div>
        </div>
        </div>
        
        

    </div>
  );
}

export default App;
