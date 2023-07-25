import Navbar from "../Navbar/Navbar"
import {Outlet} from "react-router-dom"

export default function Root() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
