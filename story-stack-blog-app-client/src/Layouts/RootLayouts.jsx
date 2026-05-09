
import { Outlet } from 'react-router'
import Navbar from '../Shared/Navbar/Navbar'
import Footer from '../Shared/Footer/Footer'

const RootLayouts = () => {
    return (
        <main>
            <Navbar />
            <Outlet />
            <Footer />
        </main>
    )
}

export default RootLayouts
