import React from 'react'

import Author from '../users/Author'
import TimeAgo from './TimeAgo'
import Reactions from '../posts/Reactions'
import { Link } from 'react-router-dom'

const Post = ({ post }) => {
  return (
    <article >
      <h3>{post.title}</h3>
      <Author userId={post.userId} />
      <p>{post.body.substring(0,20)}... <Link to={`posts/${post.id}`}> View more...</Link> </p>
      <p><TimeAgo timestamp={post.date} /></p>
      <Reactions post={post} />
    </article>
  )
}

export default Post