import Menu from "./components/Menu"
import Footer from "./components/Footer"
import HomePage from "./Pages/HomePage"
import RoomPage from "./Pages/RoomPage"
import OursPage from "./Pages/OursPage"
import AboutPage from "./Pages/AboutPage"
import ContactPage from "./Pages/ContactPage"
import NotFoundPage from "./Pages/NotFoundPage"
import InfoRoomPage from "./Pages/InfoRoomPage"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
     <Menu />
      <div className="w3-content" style={{"max-width":"1900px"}}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Rooms" element={<RoomPage />} />
          <Route path="/Rooms/:id" element={<InfoRoomPage />} />
          <Route path="/Ours" element={<OursPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
