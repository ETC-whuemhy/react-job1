import {Outlet} from "react-router-dom"
import NavBar from "./component/NavBar"
import "react-toastify/dist/ReactToastify.css"
import {ToastContainer} from "react-toastify"


const MainLayout = () => {
  return (
    <div>

     <NavBar/>
     <Outlet/>
     <ToastContainer />
    </div>
  )
}

export default MainLayout