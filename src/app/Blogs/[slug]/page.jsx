import axios from 'axios';
import React from 'react';

const Page = async ({params}) => {
  let data;
  try {
    data=await axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts?slug=${params.slug}`)
    data=data.data
    console.log(data.length)
    data=data[0]
  } catch (error) {
    console.log(error)
  }
  if(data){
    return (
      <div>
       <div>
        <h1>{data.title.rendered}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.content.rendered }} />
    </div>
    </div>
  );
}else{
  return (
    <div>
      Error
    </div>
  )
}
}

export default Page;
