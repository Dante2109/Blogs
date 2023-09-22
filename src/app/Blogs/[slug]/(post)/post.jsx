"use client"
import { usePathname, useRouter } from 'next/navigation';
import React from 'react';

const Post = ({post}) => {
    const router=useRouter()
    const pathname=usePathname()
  return (
<li key={post.id}  onClick={()=>router.push(`${pathname}/${post.slug}`)}> 
    <h2>{post.title.rendered}</h2>
    <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
  </li>
  );
}

export default Post;
