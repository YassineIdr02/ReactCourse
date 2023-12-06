import { useEffect } from "react"
import { useLoaderData, useParams } from "react-router-dom"

export default function PeopleDeatails (){
    const PersonDetails = useLoaderData()

    return (
        <>
            <h3>{PersonDetails.name}</h3>
            <p>Age: {PersonDetails.age}</p>
            <p>Gender: {PersonDetails.gender}</p>
        </>
    )
}

export const PeopleDeatailsLoader = async ({params}) => {

    const response = await fetch( ` http://localhost:8000/People/${params.id}`)
    if(!response.ok)
        throw Error("Could not find the person")
    return response.json()
}