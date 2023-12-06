import { Link } from "react-router-dom";

export default function PageNotFound(){
    return(
        <h1>Page not found, please go to the <Link to='/'>HomePage</Link></h1>
    )
}