import React from 'react'
import useFetchpost from '../../custom-hook/useFetchpost'

const Home = () => {
    const post = useFetchpost()
    console.log(post)
  return (
    <div>
        <h1>Latest blog posts</h1>
        {post.map((blog,i)=>(
            <ul key={i}>
                <li>
                    {blog.title}
                </li>
            </ul>
        ))}
    </div>
  )
}

export default Home