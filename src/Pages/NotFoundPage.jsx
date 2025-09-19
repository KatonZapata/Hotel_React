import {Link} from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div>
      <h1 style={{fontSize:"100px",textAlign:"center", color: "red" }}>404 - Not Found</h1>
      <p style={{textAlign: "center"}}>Lo sentimos, la página que buscas no existe.</p>
        <div style={{textAlign: "center", marginTop: "20px"}}>
            <Link to="/" style={{backgroundColor: "red", color: "white", padding: "10px 20px",
         textDecoration: "none", borderRadius: "5px"}}>Volver al inicio</Link>
         </div>
    </div>
  )
}
