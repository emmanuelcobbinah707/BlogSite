import React from 'react'
import BlogPost from './BlogPost.js'

const Blog = ({ title, setTitle, content, setContent, blogPosts, setBlogPosts }) => {
  return (
    <div>
        <div className='blogContainer'>
            <ul className='blogList'>
                {blogPosts.map((blogPost) => (
                    <BlogPost 
                        blogPosts = {blogPosts}
                        setBlogPosts = {setBlogPosts}
                        blogPost = {blogPost}
                        title = {blogPost.title}
                        content = {blogPost.content}
                        id = {blogPosts.id}
                        date = {blogPost.date}
                    />
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Blog