
import { useParams } from "react-router-dom";
import { blogData } from "../data/blogData";

const BlogDetail = () => {
  const { id } = useParams();
  const blog = blogData.find((b) => b.id === id);
  if (!blog) return <p>blog not found</p>;
  return (
    <div>
      <h1>{blog.title}</h1>
      <h1>{blog.content}</h1>
    </div>
  );
};

export default BlogDetail;
