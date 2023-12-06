import {
    NavLink,
    Outlet
} from 'react-router-dom'
import BreadCrumbs from '../components/BreadCrumbs'


const RootLayout = () => {
    return (
        <>
            <div className='nav'>
                <h1>Welcome to react router</h1>
                <div className='nav-links'>
                    <NavLink to='/'><h2>Home </h2></NavLink>
                    <NavLink to='about'><h2>About</h2></NavLink>
                    <NavLink to='help'><h2>Help</h2></NavLink>
                    <NavLink to='people'><h2>People</h2></NavLink>
                </div>
            </div >
            <BreadCrumbs/>
            <main>
                <Outlet className='content'/> 
                {/* this outlet Componenet tells react where it should outputs 
                    the content of <RootLayout/> child element int the Routes */}
            </main>
        </>
        
    )
}

export default RootLayout