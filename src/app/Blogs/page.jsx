import axios from 'axios';
import React from 'react';
import Post from './[slug]/(post)/post';
const Blogs = async() => {
  let data;
  try {
    data= await axios.get("http://localhost/wordpress/wp-json/wp/v2/posts")
    data=data.data
    // console.log(data)
  } catch (error) {
    console.log(error)
  }
  if(data){
    return (
      <div>
      <h1>Latest Posts</h1>
      <ul>
        {data.map(post => (
            <Post post={post}/>
        ))}
      </ul>
    </div>
  );
  }else{
    return (<div>
      Eror
    </div>)
  } 
}

export default Blogs;
