import { useQuery } from "react-query";

const fetchPosts = async () => {
   const res = await fetch ( 'https://jsonplaceholder.typicode.com/posts');

   if (!res.ok) {
    throw new Error('Network response was not ok');
 }
   return res.json();
}

const PostsComponent = () => {

    const { data,isError, error, isLoading, isFetching } = useQuery('posts', fetchPosts, {
        // Customizing the behavior of React Query with these options:
        staleTime: 10000, // 10 seconds
        cacheTime: 300000, // 5 minutes
        refetchOnWindowFocus: true, // Refetches when window gains focus
        keepPreviousData: true, // Keeps previous data while new data is being fetched
      });

 if(isLoading) return <div>Loading...</div>;
 if(isError) return <div>Error: {error.message}</div>;

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