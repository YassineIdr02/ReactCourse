import { useSelector } from 'react-redux';
import { selectAllPosts, getPostsStatus, getPostsError, fetchPosts } from './postSlice';
import Post from './Post';

function Posts() {
  const posts = useSelector(selectAllPosts);
  const postsStatus = useSelector(getPostsStatus);
  const postsError = useSelector(getPostsError);

  let content = null;

  switch (postsStatus) {
    case 'loading':
      content = <p>Loading...</p>;
      break;
    case 'succeeded':
      const orderedPosts = posts && posts.length > 0 ?
        posts.slice().sort((a, b) => b.date.localeCompare(a.date)) : [];
      content = orderedPosts.map((post) => <Post post={post} key={post.id} />);
      break;
    case 'failed':
      content = <p>Error: {postsError}</p>;
      break;
    default:
      content = <div>No posts available</div>;
      break;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
}

export default Posts;
