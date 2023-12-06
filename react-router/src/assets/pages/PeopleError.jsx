import { useRouteError, Link } from "react-router-dom";

export default function PeopleError () {
    const error = useRouteError()

    return (
        <>
            <h1>Oops!</h1>
            <p>{error.message} go back to the  
                <Link to='/people'> people </Link>
                main page
            </p>  
        </>
    )
}