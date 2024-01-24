import { FC, useEffect, useState } from 'react';

export type Post = {
  id: string;
  text: string;
};

const Async: FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <ul>
      {posts.map((post: Post) => (
        <li key={post.id}>{post.text}</li>
      ))}
    </ul>
  );
};

export default Async;
