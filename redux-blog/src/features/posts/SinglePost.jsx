import { useDispatch, useSelector } from 'react-redux';
import { selectPostById, deletePost } from './postSlice';
import Author from '../users/Author';
import Reactions from './Reactions';
import TimeAgo from './TimeAgo';
import {  useParams, Link, useNavigate } from 'react-router-dom';


const SinglePost = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { postId } = useParams();
    const post = useSelector(state => selectPostById(state, postId))
    const handleDelete = () => {
        try {
            dispatch(deletePost({id: postId}))
        console.log('deleting...')
        navigate('/')
        } catch (error) {
            console.log(error)
        }finally{
            console.log('deleted')
        }
          

    }
    if (!post) return <h2>No post found</h2>;
    return (
        <article>
            <h3>{post.title}</h3>
            <Author userId={post.userId} />
            <p>{post.body.substring(0, 100)}</p>
            <p>
                <TimeAgo timestamp={post.date} />
                <Link to={`/posts/edit/${post.id}`}> Edit post</Link>
                
            </p>
            <p onClick={handleDelete}> Delete post</p>
            <Reactions post={post} />
            
        </article>
    );
};

export default SinglePost;
