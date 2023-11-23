import React from "react";
import styles from "../../../styles/postslug.module.css";
import { getSlug,getBlogs } from "@/app/api/services";


export async function generateMetadata({ params }) {
  const response = await getSlug(params.slug);

  return {
    title: response.title.rendered + " - Nextjs 13 Blog Page",
  };
}

export async function generateStaticParams() {
  let data = await getBlogs()
  return data.map((slug) => {
    {
      slug.slug;
    }
  });
}
const Page = async ({ params }) => {
  let data;
  let updated;
  data = await getSlug(params.slug);
  updated = data.content.rendered.replace(
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
  
};

export default Page;
