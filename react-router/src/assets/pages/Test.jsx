import { Link, useLoaderData } from "react-router-dom"

const Test = () => {
    const people = useLoaderData()
    return (
        <div>
            <h1>People</h1>
            {people.map(person => (
                <Link to={person.id.toString()} key={person.id}>
                    <p>{person.name} age is: {person.age}</p>
                </Link>
            ))}
        </div>
    )
}

export const PeopleLoader = async () => {
    const response = await fetch('http://localhost:8000/People')
    return response.json()
}

export default Test