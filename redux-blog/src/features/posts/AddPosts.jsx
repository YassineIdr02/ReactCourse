import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewPost } from './postSlice';
import { selectAllUsers } from '../users/usersSlice';
import { useNavigate } from 'react-router-dom';

const AddPosts = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectAllUsers);
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const canSave = [title, content, userId].every(Boolean);

  const handleTitleInput = e => setTitle(e.target.value);
  const handleContentInput = e => setContent(e.target.value);
  const handleAuthorInput = e => setUserId(e.target.value);

  const userIdOption = users.map(user => (
    <option key={user.id} value={user.id}>
      {user.name}
    </option>
  ));

  const handleSubmit =  () => {
    if (canSave) {
      try {
        dispatch(addNewPost({ title, body: content, userId }));
        setTitle('');
        setContent('');
        setUserId('');
        navigate('/');
      } catch (error) {
        console.error('Error adding post:', error);
      }
    }
  };

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
  );
};

export default AddPosts;
