import React from 'react'

const Signup = () => {
    return (
        <>
            <div className="px-5 flex flex-col gap-10 mx-auto h-48 w-[800px]" >
                <form >
                    <h1 className="text-4xl text-center my-5 font-bold">Sign Up</h1>
                    <p className="text-md text-[#4D4D4D] text-center">Fill the form below</p>
                    <div className="relative">
                        <input type="text"
                            id="username"
                            placeholder="Enter username" required
                            className=" peer placeholder-transparent w-full bg-transparent border-b border-[#ADADAD] my-3 px-1 focus:border-black focus:outline-none"/>
                            <label htmlFor="username" className="absolute left-0  -top-3.5 hover:cursor-text  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm transition-all ">Username</label>
                    </div>
                    <div className="relative mt-3">
                        <input type="email"
                            id="email"
                            placeholder="Enter email" required
                            className="w-full peer placeholder-transparent bg-transparent border-b border-[#ADADAD] my-3 px-1  focus:border-black focus:outline-none"/>
                            <label htmlFor="email" className="absolute left-0 -top-3.5 hover:cursor-text  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-1.5 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm transition-all ">Email</label>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mt-3">
                        <div className="relative ">
                            <input type="password"
                                id="password"
                                placeholder="Enter your password" required
                                className="w-full peer placeholder-transparent bg-transparent border-b border-[#ADADAD]  my-3 px-1  focus:border-black focus:outline-none"/>

                                <label htmlFor="password"
                                    className="absolute left-0 -top-3.5 hover:cursor-text peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm transition-all ">Password</label>
                        </div>
                        <div className="relative">
                            <input type="password"
                                id="confirmPassword"
                                placeholder="Confirm your password" required
                                className="w-full peer placeholder-transparent bg-transparent border-b border-[#ADADAD]  my-3 px-1 focus:border-black focus:outline-none" />

                            <label htmlFor="confirmPassword"
                                className="absolute left-0 -top-3.5 peer-placeholder-shown:text-base hover:cursor-text peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-focus:-top-3.5 peer-focus:text-black peer-focus:text-sm transition-all ">Confirm password</label>
                        </div>

                    </div>
                    <div className="grid grid-cols-2 gap-5 my-5">
                        <div className="flex justify-center">
                            <button className="btn btn-active btn-neutral mt-5 w-2/3 px-10" >Register</button>
                        </div>
                        <div className="flex justify-center">
                            <button className="btn btn-active btn-neutral mt-5 w-2/3 px-1" >Back to login</button>
                    </div>
            </div>
        </form>
  </div >
    </>
  )
}

export default Signup