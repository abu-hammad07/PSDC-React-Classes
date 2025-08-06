import { Outlet } from "react-router-dom"
import Footer from "./Footer"
import Navbar from "./Navbar"


const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <Footer />
        </>
    )
}

// const Layout = ({children}: {children: React.ReactNode}) => {
//     return (
//         <>
//         <Navbar />
//         {children}
//         <Footer />
//         </>
//     )
// }

export default Layout