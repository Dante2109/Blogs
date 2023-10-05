import axios from "axios";
import React, { useContext } from "react";
import { cache } from "react";
import styles from "../../../styles/postslug.module.css";
import { AuthContext } from "@/Context/authContext";
import Link from "next/link";
async function getBlog(slug) {
  let data = await axios.get(
    `http://localhost/wordpress/wp-json/wp/v2/posts?slug=${slug}`
  );
  data = data.data;
  data = data[0];
  return data;
}

const getBlogCached = cache(getBlog);

export async function generateMetadata({ params }) {
  const response = await getBlogCached(params.slug);

  return {
    title:
      response.title.rendered.split(" ")[0] == "Truffles"
        ? "Truffles - Ice & Spice"
        : response.title.rendered + " - Nextjs 13 Blog Page",
  };
}

export function generateStaticParams() {
  let arr = [
    "sunrise-dhaba",
    "fusion-bites",
    "momo-hut",
    "saffron-spice",
    "dolci-desserts",
    "kakapo",
    "brahmin-coffee-bar",
    "smoke-house-deli",
    "dakshinayan",
    "saravana-bhavan",
    "toit-brewpub",
    "ardor-brewing-company",
    "vidyarthi-bhavan",
    "karavali",
    "truffles-ice-spice",
  ];
  return arr.map((slug) => {
    {
      slug;
    }
  });
}
const Page = async ({ params }) => {
  let { data } = useContext(AuthContext);
  let newData;
  let updated;
  newData = await getBlogCached(params.slug);
  updated = newData.content.rendered.replace(
    /<p class="description"/g,
    `<p class="${styles.description}"`
  );
  updated = updated.replace(
    /<p class="more-info"/g,
    `<p class="${styles.moreinfo}"`
  );
  updated = updated.replace(/<img "/g, `<img class="${styles.image}"`);
  updated = updated.replace(
    /<p class="location has-medium-font-size"/g,
    `<p class="${styles.location}"`
  );
  updated = updated.replace(
    /<p class="rating has-small-font-size"/g,
    `<p class="${styles.rating}"`
  );
  updated = updated.replace(
    /<p class="has-large-font-size type"/g,
    `<p class="${styles.type}"`
  );

  // updated= updated.replace(/<p class="location"/g,`<p class="${styles.location}"`)
  if (data) {
    if (newData) {
      return (
        <div
          style={{ maxWidth: "1200px", margin: "auto" }}
          className="pb-20 blog-post-body"
        >
          <h1
            className="text-6xl text-center my-10 head"
            dangerouslySetInnerHTML={{ __html: data.title.rendered }}
          />
          <div
            dangerouslySetInnerHTML={{ __html: updated }}
            className="flex flex-col gap-5"
          />
        </div>
      );
    } else {
      return <div>Error</div>;
    }
  } else {
      return <div>
        <h1 className="text-[20px]">Please login first</h1>
        <button><Link href="/Login&Signup">Login Page</Link></button>
      </div>
  }
};

export default Page;
