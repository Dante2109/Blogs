import React from 'react';
import Post from '../Components/post';
import styles from "../../styles/blogs.module.css"
import { getBlogs } from '../api/services';


export function generateMetadata(){
    return {
      title: "Blogs - NextJS 13"
    }
}
const Blogs = async() => {
  let data=await getBlogs()
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
