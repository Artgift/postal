import { createRoot } from 'react-dom/client'
import  Productagent  from "./Product"




function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0,  width: '100%', height: '80%' }}>
     
         <Productagent/>
       
      </div>

   
  )
}


function Appxp() {
createRoot(document.getElementById('root')).render(
  <>
    <Overlay />
   
  </>
)}
export default Appxp