
import useFetchpost from "../../custom-hook/useFetchpost";
import { Link } from "react-router-dom";
interface BlogType {
  id: number;
  title: string;
  body: string;
}
const Home = () => {
  const post:BlogType[] = useFetchpost();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-blue-700">Latest Blog Posts</h1>

        <div className="grid gap-6">
          {post.map((blog, i) => (
            <Link
              to={`/blog/${blog.id}`}
              key={i}
              className="block p-6 bg-white rounded shadow hover:shadow-md transition"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{blog.title}</h2>
              <p className="text-gray-600 line-clamp-2">{blog.body}</p>
              <span className="text-blue-500 mt-2 inline-block">Read more →</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
