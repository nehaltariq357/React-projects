
import { blogData } from "../data/blogData";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <h1>latest blog post</h1>
      <ul>
        {blogData.map((post, i) => (
          <li key={i}>
            <h1>{post.title}</h1>
            <p>{post.summary}</p>
            <Link to={`/blog/${post.id}`}>Read more</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
