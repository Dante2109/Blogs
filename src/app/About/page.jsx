import React from 'react';
import styles from "../../styles/about.module.css"
import Image from 'next/image';
const About = () => {
  return (
    <div className={`${styles.container} m-auto`}>
      <div className={`${styles.grid} grid grid-cols-1 md:grid-cols-2 justify-center md:pl-10 items-center content-center gap-20 m-auto`}>
        <div className={`${styles.card}`}>

        <h1>Exploring Bangalore's Culinary Delights:</h1>

        <p>Bangalore is a city that truly embraces the diversity of Indian cuisine. From authentic Karnataka delights to global fusion, the culinary landscape here is a melting pot of flavors, textures, and aromas that will tantalize your taste buds. We understand that choosing the best places to dine can be overwhelming in a city bursting with culinary options. Hence, we've set out on a gastronomic adventure to sift through the plethora of restaurants, cafes, street vendors, and fine dining establishments to bring you our top recommendations.</p>
        </div>
<Image src={"https://media.istockphoto.com/id/1433555981/photo/vidhana-soudha-in-bangalore-india-the-seat-of-the-state-legislature-of-karnataka.jpg?s=2048x2048&w=is&k=20&c=qyXOqzsRtRHucTTfeOJOkGULs4VEMOdvCSZk9C7ZDbY="} width={400} height={200} style={{objectFit:"contain"}}/>
        <div className={`${styles.card}`}>
        <h1>

        Diverse Cuisines, One City:
        </h1>
        <p>
        Our blog covers a range of cuisines - from traditional Kannadiga dishes like Bisi Bele Bath and Mysore Pak to the aromatic flavors of North Indian delicacies, the fiery spiciness of Andhra cuisine, the exotic tastes of Asian fusion, and the comforting familiarity of Italian and Continental fare. Bangalore has it all!
        </p>
        </div>

        <Image src={"https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=2048x2048&w=is&k=20&c=azft1MVw7FNLT3CjwcHTaPuYbJLlazIMZbJRxLYVsbA="} width={400} height={200} style={{objectFit:"contain"}}/>
        <div className={`${styles.card}`}>
          <h1>
            Hidden Gems and Popular Haunts:
          </h1>

        <p>

        We're on a mission to uncover the hidden gems tucked away in the city's labyrinthine lanes, as well as the popular and iconic establishments that have stood the test of time. Whether it's a hole-in-the-wall joint known only to locals or a renowned fine dining restaurant celebrated internationally, we'll guide you through the best spots in Bangalore for an unforgettable dining experience.
        </p>
        </div>
<Image src={"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"} width={400} height={400}/>
        <div className={`${styles.card}`} >
          <h1>

        Culinary Events and Food Festivals:
          </h1>
        <p>
        In addition to highlighting eateries, we'll keep you informed about upcoming food festivals, street food events, and culinary workshops happening in Bangalore. You can indulge in your passion for food by participating in these events, tasting a wide array of dishes, and learning from the city's culinary maestros.
        </p>
        </div>
        <Image src={"https://media.istockphoto.com/id/1399625161/photo/personal-perspective-shot-of-a-couple-eating-street-food-at-a-festival.jpg?s=2048x2048&w=is&k=20&c=BVlD-EMILWcDj0gb7RVIdTEPa1eeSQiSrcWvgaCHKyk="} width={400} height={200} style={{objectFit:"contain"}}/>
      </div>
    </div>
  );
}

export default About;
