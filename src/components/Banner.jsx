import React from 'react'
import BanerForm from './form'

export default function Banner() {
  return (
    <>
        <header className="w3-display-container w3-content" style={{ maxWidth: "1500px" }}>
        <img className="w3-image" src="https://www.w3schools.com/w3images/hotel.jpg" alt="The Hotel" style={{ minWidth: "1000px" }} width="1500" height="800" />
        <div className="w3-display-left w3-padding w3-col l6 m8">
            <div className="w3-container w3-red">
            <h2><i className="fa fa-bed w3-margin-right"></i>Hotel Name</h2>
            </div>
            <div className="w3-container w3-white w3-padding-16">
                <BanerForm />
            </div>
        </div>
        </header>
    </>
  )
}
