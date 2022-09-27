import React from 'react'

const BlogPost = ({ 
        date, 
        blogPost, 
        blogPosts, 
        setBlogPosts, 
        title, 
        content, id }) => {

    const deleteHandler = () => {
        setBlogPosts(blogPosts.filter((el) => el.id !== blogPost.id))
    }

    const unHide = () => {
        const editForm = document.querySelector('#editForm');
        editForm.classList.toggle('hide');
    }

    const editHandler = (e) => {
      e.preventDefault();
      unHide();
    }

  return (
    <div className='blogpost'>
        <li>
            <h2>{title}</h2>
            <span>{date}</span>
        </li>
        <li><p>{content}</p></li>
       <div className='buttons'>
       <button  className = "edit" onClick={unHide} >
             <i className = 'fas fa-pen'></i> <p>Edit</p>
        </button>
        <button  className = "delete" onClick={deleteHandler}>
             <i className = 'fas fa-trash'></i> <p>Remove</p>
        </button>
       </div>

       <div className='hide editForm' >
            <form>
                <label>Title</label>
                <br/>
                <input type="text" id="title-input" />
                <br/>
                <label>Content</label>
                <br/>
                <textarea className='content'  id="content-input"></textarea>
                <br/>
                <button onClick={editHandler}><i class="fa-solid fa-check"></i> Done</button>
            </form>
        </div>
    </div>
  )
}

export default BlogPost