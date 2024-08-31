import { useQuery } from "react-query";

const fetchPosts = async () => {
   const res = await fetch ( 'https://jsonplaceholder.typicode.com/posts');
   return res.json();
}

const PostsComponent = () => {

const {data, error, isLoading} = useQuery('posts', fetchPosts);

 if(isLoading) return <div>Loading...</div>;
 if(error) return <div>Error loading data</div>;

  return (
    <div>
        {data.map(item => (
                <div key={item.id} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ddd' }}>
                <h2>{item.title}</h2>
                <p>{item.body}</p>
              </div>
            ))}
    </div>
  )
}

export default PostsComponent;