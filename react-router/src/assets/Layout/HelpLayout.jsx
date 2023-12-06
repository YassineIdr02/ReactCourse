import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout(){
    return(
        <>
            <h1>Welcome to the help page</h1>
            <div className='nav-links'>
                <NavLink to='faq'><h3>FAQ</h3></NavLink>
                <NavLink to='contact'><h3>Contact</h3></NavLink>
            </div>

            <Outlet/>
        </>
    )
}