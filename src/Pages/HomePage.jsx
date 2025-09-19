import React from 'react'
import About from '../components/About'
import Banner from '../components/Banner'
import Rooms from '../components/Rooms'
import Ours from '../components/Ours'


export default function HomePage() {
  return (
    <>
      <Banner />
      <Rooms />
      <About />
      <Ours />
    </>
  )
}
