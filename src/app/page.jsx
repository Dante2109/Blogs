import Image from "next/image";
import dynamic from "next/dynamic";
import Loading from "./loading";
import Logo from "../../Assets/Logo.png";
import styles from "../styles/app.module.css"
let Post=dynamic(()=>import("./Components/post"))
import axios from "axios";
export default async function Home() {
  let data;
  try {
    data= await axios.get("http://localhost/wordpress/wp-json/wp/v2/posts?per_page=3")
    data=data.data
  } catch (error) {
    console.log(error)
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between  md:p-24 max-[1200px]">
      {/* Banner start*/}
      <div
        style={{
          maxWidth: "1200px",
          boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
          backgroundImage:`url("https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg")`,
        }}
      >
        {/* <Image src={"https://www.cypressgreen.in/blog/wp-content/uploads/2021/03/food.jpg"} width={100} height={20}/> */}
        <div
          className="flex justify-between flex-col md:flex-row  p-10 items-center text-lg font-medium gap-14 text-white"
          style={{ backgroundColor: "rgb(0,0,0,0.5)" }}
        >
          <Image src={Logo} width={400} height={400} />
          <div>
            Welcome to{" "}
            <h3 className="inline font-semibold">
              Place: Flavours of Bangalore
            </h3>{" "}
            your ultimate guide to the gastronomic wonders of the vibrant and
            diverse city of Bangalore! Nestled in the heart of Karnataka,
            Bangalore is a thriving metropolis renowned for its rich cultural
            heritage, technological prowess, and of course, its incredible
            culinary scene. Our blog is dedicated to unraveling the city's
            culinary tapestry, presenting you with a carefully curated list of
            the top, must-visit eateries and dining experiences that Bangalore
            has to offer. Whether you're a seasoned food enthusiast or a curious
            newcomer to the city, we promise to take you on an unforgettable
            gastronomic journey.
          </div>
        </div>
      </div>
      {/* Banner End  */}
      <div className="mt-20 mb-10">
        <h3 className={`text-center font-bold text-[30px] ${styles.trending}`}>Top Places</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 my-5 max-w-[1200px] border-red-600">
        {data?.map(post=><Post post={post}></Post>)}
      </div>
    </main>
  );
}
