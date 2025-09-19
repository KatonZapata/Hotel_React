import { useParams } from "react-router-dom"

export default function InfoRoomPage() {
  const { id } = useParams();
  
  return (
    <div>
        <h1>Informacion de la habitacion #{id}</h1>
    </div>
  )
}
