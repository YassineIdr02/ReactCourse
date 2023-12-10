import id from 'date-fns/esm/locale/id/index.js'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { selectAllUsers } from '../users/usersSlice'
import { selectPostById } from './postSlice'

const EditPost = () => {
    const { postId } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const users = useSelector(selectAllUsers)
    const post = useSelector(selectPostById(state, postId))
    const [userId, setUserId] = useState(post?.userId)
    const [content, setContent] = useState(post?.body)
    const [title, setTitle] = useState(post?.title)
    const [requestStatus, setStatus] = useState('idle')

    if (!post)
        return <h3>No post found</h3>


    const canSave = [title, content, userId].every(Boolean) && requestStatus == 'idle';
    const handleTitleInput = e => setTitle(e.target.value);
    const handleContentInput = e => setContent(e.target.value);
    const handleAuthorInput = e => setUserId(e.target.value);

    const userIdOption = users.map(user => (
        <option key={user.id} value={user.id}>
            {user.name}
        </option>
    ));

    if (canSave) {
        try {
            setStatus('pending')
            dispatch(updatePost({ id: post.id, body: content, title, userId })).unwrap()
            setTitle('')
            setContent('')
            setUserId('')
            navigate(`posts/${post.id}`)
            setStatus('idle')
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='container'>
            <form className='add-form'>
                <h1>AddPosts</h1>
                <label htmlFor='title'>Title</label>
                <input type='text' name='title' id='title' value={title} onChange={handleTitleInput} />

                <label htmlFor='content'>Content</label>
                <textarea type='text' name='content' id='content' value={content} onChange={handleContentInput} />

                <label htmlFor='userId'>Author</label>
                <select name='userId' id='userId' defaultValue={userId} onChange={handleAuthorInput}>
                    <option value=''>Select author</option>
                    {userIdOption}
                </select>
                <button type='button' onClick={handleSubmit} disabled={!canSave}>
                    Add Post
                </button>
            </form>
        </div>
    )
}

export default EditPost