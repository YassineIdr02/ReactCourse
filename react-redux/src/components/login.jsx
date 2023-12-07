import React from 'react'
import { useDispatch } from 'react-redux'
import { login, logout } from '../features/users'

export default function Login() {
    const dispatch = useDispatch()
    return (
        <>
            <button
                onClick={() => {
                    dispatch(login({name: "Yassine", age: 21, email: "Yassine@gmail.com" }))
                }}
            >
            Login
            </button>
            <button onClick={() => {
                    dispatch(logout())
                }}
            >Logout</button>
        </>
    )
}
