// SinglePost.js
import React from 'react';
import { useSelector } from 'react-redux';
import { selectPostById } from './postSlice';
import Author from '../users/Author';
import Reactions from './Reactions';
import TimeAgo from './TimeAgo';
import { Link, useParams } from 'react-router-dom';

const SinglePost = () => {
    const { postId } = useParams();
    const post = useSelector(state => selectPostById(state, postId))
    if (!post) return <h2>No post found</h2>;
    return (
        <article>
            <h3>{post.title}</h3>
            <Author userId={post.userId} />
            <p>{post.body.substring(0, 100)}</p>
            <p>
                <TimeAgo timestamp={post.date} />
            </p>
            <Reactions post={post} />
            <Link to={`edit/${post.id}`}>Edit post</Link>
        </article>
    );
};

export default SinglePost;
