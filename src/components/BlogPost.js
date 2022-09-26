import React from 'react'

const BlogPost = ({ date, blogPost, blogPosts, setBlogPosts, title, content, id }) => {
    const deleteHandler = () => {
        setBlogPosts(blogPosts.filter((el) => el.id !== blogPost.id))
    }

  return (
    <div className='blogpost'>
        <li>
            <h2>{title}</h2>
            <span>{date}</span>
        </li>
        <li><p>{content}</p></li>
        <button onClick={deleteHandler}>
             <i className = 'fas fa-trash'></i>
        </button>
    </div>
  )
}

export default BlogPost