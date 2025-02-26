import './../../assets/CSS/main.css'
import { Outlet } from "react-router-dom"
  // import components
import Header from "../../components/Header/Header"
import Footer from "./../../components/Footer/Footer"
export default function ClientLayout() {
  return (
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}
