import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.js';
import Blog from './components/Blog.js'
import Footer from './components/Footer.js'

function App() {

   const [title, setTitle] = useState("");
   const [content, setContent] = useState("");
   const [blogPosts, setBlogPosts] = useState([]);

  //Saving Progress
    const saveBlogPosts = () => {
      localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }

   //Retrieve blogPosts
    const getBlogPosts = () => {
   let getttIt = localStorage.getItem('blogPosts');
    let localBlogPosts = JSON.parse(getttIt);
    setBlogPosts(localBlogPosts);

    if (localStorage.getItem(blogPosts) === null) {
        localStorage.setItem(blogPosts, JSON.stringify([]));
    } else {
         let localBlogPosts = JSON.parse(localStorage.getItem('blogPosts'));
         console.log(localBlogPosts); 
    }
    }

   useEffect(() => {
    saveBlogPosts();
   }, [blogPosts])

   useEffect(getBlogPosts(), [])

  return(
    <div className='App'>
      <header>
        <Header 
        title = {title}
        setTitle = {setTitle}
        content = {content}
        setContent = {setContent}
        blogPosts = {blogPosts}
        setBlogPosts = {setBlogPosts} 
        />
        {/* <hr/> */}
        <Blog
        blogPosts = {blogPosts}
        setBlogPosts = {setBlogPosts}
        /> 
      </header>
      <Footer />
    </div>
  )
}

export default App
