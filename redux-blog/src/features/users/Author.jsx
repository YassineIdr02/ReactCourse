import React from 'react'
import { useSelector } from 'react-redux'
import { selectAllUsers } from './usersSlice'

function Author({userId}) {
    const users = useSelector(selectAllUsers)
    const author = users.find(user => user.id == userId)
  return (
    <span> by {author ? author.name : 'Unkown author'}</span>
  )
}

export default Author
