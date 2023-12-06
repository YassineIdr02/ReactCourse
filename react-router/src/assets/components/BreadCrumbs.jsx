import { useLocation, Link } from "react-router-dom"

export default function BreadCrumbs( ){
    const loaction = useLocation()
    let currentLocation = ''
    const crumbs = location.pathname.split('/')
    .filter(crumb => crumb !== '')
    .map(crumb => {
        currentLocation += '/'+crumb

        return (
            <Link to={currentLocation} key={crumb}>{crumb} </Link>
        )
    })

    return (
        <>
            <div>{crumbs}</div>        
        </>
    )
}