import axios from 'axios';
import React from 'react';
import Post from '../Components/post';
import styles from "../../styles/blogs.module.css"


export function generateMetadata(){
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
     
      <div  className='py-20 m-auto flex flex-col max-w-[1250px]'>
      <h1 className={`font-bold text-[30px] ${styles.trending} mb-20`}>Trending Places</h1>
      <div className='grid sm:grid-co ls-1 md:grid-cols-2 lg:grid-cols-3  gap-10 gap-y-16'>
        {data.map(post => (
            <Post key={post.slug} post={post}/>
        ))}
      </div>
    </div>
  );
  }else{
    return (<div>
      Error
    </div>
  )
  } 
}

export default Blogs;
