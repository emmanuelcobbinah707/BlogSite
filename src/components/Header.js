import React, { useState, useEffect } from 'react'
import JohnDoe from './johndoe.jpeg'



const Header = ({ blogPosts, setBlogPosts }) => {

   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [date, setDate] = useState("");

    //Hiding the Create Blog Form
    const unHide = () => {
        const form = document.getElementById('form');
        form.classList.toggle('hide');
    }

    //Getting Title
    const titleHandler = (e) => {
        e.preventDefault()
        setTitle(e.target.value);
    }
    
    //Getting Body
    const contentHandler = (e) => {
        e.preventDefault()
        setContent(e.target.value);
    } 

    //Getting Date
    // const getDate =

    useEffect( () => {
        const datee = new Date();
        const day = datee.getDate();
        const month = datee.getMonth();
        const year = datee.getFullYear();

        setDate(`${day}/${month + 1}/${year}`);
    }, [blogPosts]  )

    //Combining Both Title and Body as an Object in an Array
    const blogPostHandler = (e) => {
        e.preventDefault();

    //Form Placeholder Error
        const titleInput = document.getElementById('title-input');
        const contentInput = document.getElementById('content-input');

        if (title === "" || content === "") {
            if (title === "" && content === "") {
                titleInput.placeholder = "Do the needful...";
                contentInput.placeholder = "One more thing...";
            } else if (title === "") {
                titleInput.placeholder = "You Forgot Something..."
            } else if (content === "") {
                contentInput.placeholder = "What about me?"
            }
        } else {
            setBlogPosts([
                ...blogPosts, {title: title, content: content, date: date, id: Math.round(Math.random() * 1000)}
            ]);
        }
    }

   

  return (
    <div className='container'>
        <h1 className='logo'>Journal By Day</h1>
       <div className='header'>
        <div>
                <img className='profilePic' src={JohnDoe} alt='johnDoe'/>
            </div>
            <div>
                <h1>John Doe</h1>
                <button onClick={unHide}>Create Post</button>
            </div>
       </div>
        <div id='form' className='hide'>
            <form>
                <label>Title</label>
                <br/>
                <input placeholder = "" value= {title} onChange={titleHandler} type="text" id="title-input" />
                <br/>
                <label>Content</label>
                <br/>
                <textarea placeholder = ""  className='content' onChange={contentHandler} id="content-input"></textarea>
                <br/>
                <button onClick={blogPostHandler}>Add <i class="fa-solid fa-plus"></i></button>
            </form>
        </div>
    </div>
  )
  }


export default Header