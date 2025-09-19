import React, { use } from 'react'
import BanerForm from './form'
import Room from './Room'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Rooms() {


  let[roomsApi,setRoomsApi] = useState([]);

  async function getRooms() {
   try {
    let respuesta = await axios.get("http://localhost:3000/api/habitaciones");
    //console.log('respuesta api', respuesta.data);
    setRoomsApi(respuesta.data);
    
    
   } catch (error) {
    console.log(error);
    
   } 
  }
   console.log(roomsApi);
   

  useEffect(() => {
    getRooms();
  }, []) 

  return (
    <>
        

    <div className="w3-container w3-margin-top" id="rooms">
        <h3>Rooms</h3>
        <p>Make yourself at home is our slogan. We offer the best beds in the industry. Sleep well and rest well.</p>
    </div>

    <div className="w3-container w3-margin-top">
        <h3>Check Availability</h3>
        <BanerForm />
    </div>

    <div className="w3-row-padding w3-padding-16">

        {roomsApi.map((room) => (
          <Room key={room.id} dataRoom={room} />
        ))}
    </div>

    </>
  )
}
