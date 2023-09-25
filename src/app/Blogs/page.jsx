import axios from 'axios';
import React from 'react';
import Post from '../Components/post';



export async function generateMetadata(){
    return {
      title: "Blogs - NextJS 13"
    }
}
const Blogs = async() => {
  let data;
  try {
    data= await axios.get("http://localhost/wordpress/wp-json/wp/v2/posts?per_page=20")
    data=data.data
  } catch (error) {
    console.log(error)
  }
  if(data){
    return (
      <div style={{maxWidth:"1250px"}} className='py-20 m-auto'>
      <h1 className='text-4xl text-center mb-20'>Trending Places</h1>
      <div className='grid sm:grid-co ls-1 md:grid-cols-2 lg:grid-cols-3  gap-10'>
        {data.map(post => (
            <Post key={post.slug} post={post}/>
        ))}
      </div>
    </div>
  );
  }else{
    return (<div>
      Error
    </div>)
  } 
}

export default Blogs;
