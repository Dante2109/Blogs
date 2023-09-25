import axios from 'axios';
import React from 'react';
import { cache } from "react"
import styles from "../../../styles/postslug.module.css"
async function getBlog(slug){
  let data=await axios.get(`http://localhost/wordpress/wp-json/wp/v2/posts?slug=${slug}`)
  data=data.data
  data=data[0]
  return data
}

const getBlogCached=cache(getBlog)

export async function generateMetadata({params}){
    const response = await getBlogCached(params.slug)
    
    return {
      title :  response.title.rendered.split(" ")[0]=="Truffles"?"Truffles - Ice & Spice":response.title.rendered  + " - Nextjs 13 Blog Page"
    }
}

export function generateStaticParams(){
  let arr=["sunrise-dhaba","fusion-bites","momo-hut","saffron-spice","dolci-desserts","kakapo","brahmin-coffee-bar","smoke-house-deli","dakshinayan","saravana-bhavan","toit-brewpub","ardor-brewing-company","vidyarthi-bhavan","karavali","truffles-ice-spice"]
  return arr.map(slug=>{{slug}})
}
const Page = async ({params}) => {
  let data;
  let updated;
    data=await getBlogCached(params.slug)
    updated= data.content.rendered.replace(/<p class="description"/g,`<p class="${styles.description}"`)
    updated= updated.replace(/<p class="more-info"/g,`<p class="${styles.moreinfo}"`)
    updated= updated.replace(/<img "/g,`<img class="${styles.image}"`)
    updated= updated.replace(/<p class="location"/g,`<p class="${styles.location}"`)
  console.log(updated)
  if(data){
    return (
       <div style={{maxWidth:"1200px",margin:"auto"}} className='pb-20'>
          <h1 className='text-6xl text-center my-10' dangerouslySetInnerHTML={{ __html: data.title.rendered }}/>
          <div dangerouslySetInnerHTML={{ __html: updated }} />
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
