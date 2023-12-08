import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../features/users';

export default function AddUser() {
    const dispatch = useDispatch()
    const [user, setUser] = useState({
        id:0,
        name: "",
        
    })

    const handleInput = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }

    const handleSubmit = (payload) => {
        dispatch(addUser(payload))
    }

    return (
        <>
            <div className='flex-row row-auto gap-4 my-auto'>
                <h1 className='text-2xl font-bold flex justify-center'>Add a user</h1>
                <div className='flex-row row-auto gap-4'>
                    <label htmlFor="key">ID</label>
                    <input type="number" placeholder="Enter user name" id="key" onChange={handleInput}
                         className="input input-bordered w-full max-w-xs" required />
                </div>
                <div className='flex-row row-auto gap-4'>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="Enter user age" id="name" onChange={handleInput}
                         className="input input-bordered w-full max-w-xs" required />
                </div>
                <button className="btn btn-success mt-3" onClick={() => handleSubmit(user)}>Add User</button>
            </div>

        </>
    )
}
