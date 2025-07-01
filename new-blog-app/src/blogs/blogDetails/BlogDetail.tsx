
import { useParams } from 'react-router-dom'
import useFetchpost from '../../custom-hook/useFetchpost'
interface BlogType {
  id: number;
  title: string;
  body: string;
}

const BlogDetail = () => {
  const params = useParams()
  const blogs:BlogType[] = useFetchpost()

  const blog = blogs.find((items) => items.id === Number(params.id))

  if (!blog) return <p className="text-red-500 text-center mt-8">Blog not found</p>

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-blue-700">{blog.title}</h1>
        <p className="text-gray-600 leading-relaxed">{blog.body}</p>
      </div>
    </div>
  )
}

export default BlogDetail
