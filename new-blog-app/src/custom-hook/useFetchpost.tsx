import { useEffect, useState } from "react";

const useFetchpost = () => {
  const [post, setPost] = useState([]);
  const fetch_post = async () => {
    const fetch_data = await fetch(`https://dummyjson.com/posts`);
    const res = await fetch_data.json();
    setPost(res.posts); // api returing array odf object, but we want only array , so we get only posts array on object
  };
  useEffect(() => {
    fetch_post();
  }, []);
  return post;
};

export default useFetchpost;
