import { Outlet } from "react-router-dom";
// import Navbar from '../component/navbar/Navbar'
import Navbar1 from '../component/navbar/trend'

import Footer from '../component/Footer'
const MainLayOut = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col ">
      <Navbar1/>
      
      <main className="flex-grow "> <Outlet /></main>
      <Footer />
    </div>
  )
}

export default MainLayOut