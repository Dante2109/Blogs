import styles from "../../styles/post.module.css"
import Link from 'next/link';

const Post =({post}) => {
    let updated= post.content.rendered.replace(/<p class="description"/g,`<p class="${styles.description}"`)
        updated= updated.replace(/<p class="more-info"/g,`<p class="${styles.moreinfo}"`)
        updated= updated.replace(/<figure class="wp-block-image size-large is-resized"/g,`<figure class="${styles.image}"`)
        updated= updated.replace(/<p class="location"/g,`<p class="${styles.location}"`)
  return (
    <Link href={`blogs/${post.slug}`}>
    <div className={`${styles.card} flex flex-col`} > 
        <div style={{fontSize:"30px"}} dangerouslySetInnerHTML={{__html: post.title.rendered}}/>
        <div className="content" dangerouslySetInnerHTML={{ __html: updated }} ></div>
    </div>
    </Link>
  );
}
  
export default Post;
