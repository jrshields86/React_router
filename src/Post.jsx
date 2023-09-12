import { useParams, Link } from 'react-router-dom';

const Post = ({ posts })=> {
  const params = useParams();
  const id = params.id*1;
  
  const post = posts.find( post => post.id === id);

    if(!post){
      return null;
    }

  return(
    <div>
      <h1>Detail for Post: { post.title }</h1>
      <Link to='/posts'>
        Back to All Posts
      </Link>
    </div>
  );
};

export default Post;
