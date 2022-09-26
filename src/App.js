import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header.js';
import Blog from './components/Blog.js'

function App() {

   const [blogPosts, setBlogPosts] = useState([]);

  //Saving Progress
    const saveBlogPosts = () => {
      localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    }

   //Retrieve blogPosts
   const getBlogPosts = () => {
    if (localStorage.getItem('blogPosts') === null ) {
      localStorage.setItem('blogPosts', JSON.stringify([]));
    }

    let blogParsed = JSON.parse(localStorage.getItem('blogPosts'))



      // let getIt = localStorage.getItem('blogPosts');
      // let localBlogPosts = JSON.parse(getIt);

      // console.log(localBlogPosts)

  //   let getttIt = localStorage.getItem('blogPosts');
  //   let localBlogPosts = JSON.parse(getttIt);
  //   setBlogPosts(localBlogPosts);

    // if (localStorage.getItem(blogPosts) === null) {
    //   // localStorage.setItem(blogPosts, JSON.stringify([]));
    //   console.log('yay');
    // } else {
    //   // let localBlogPosts = JSON.parse(localStorage.getItem('blogPosts'));
    //   // console.log(localBlogPosts);
    //   console.log('nay');
    // }
   }

   useEffect(() => {
    saveBlogPosts();
   }, [blogPosts])

   useEffect(() => {
    getBlogPosts();
   }, [])

  return(
    <div className='App'>
      <header>
        <Header 
        blogPosts = {blogPosts}
        setBlogPosts = {setBlogPosts} 
        />
        {/* <hr/> */}
        <Blog
        blogPosts = {blogPosts}
        setBlogPosts = {setBlogPosts}
        /> 
      </header>
    </div>
  )
}

export default App
