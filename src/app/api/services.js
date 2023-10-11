export const getBlogs=async(per_page=20)=>{
    try {
        let data=await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts?per_page=${per_page}`)
        data=await data.json();
        return data
    } catch (error) {
        return error
    }
}
export const getSlug=async(slug)=>{
    try {
        let data=await fetch(`http://localhost/wordpress/wp-json/wp/v2/posts?slug=${slug}`)
        data=await data.json();
        data=data[0]
        return data
    } catch (error) {
        return error
    }
}