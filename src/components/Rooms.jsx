import React from 'react'
import BanerForm from './form'
import Room from './Room'


export default function Rooms() {
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

        <Room />
        <Room />
        <Room />
    </div>

    </>
  )
}
