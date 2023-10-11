import dynamic from 'next/dynamic';
import React from 'react';
let AuthBox =dynamic(()=>import("../Components/Authbox"))



export function generateMetadata({ params }) {
  return {
    title:  "Profile - Nextjs 13 Blog Page",
  };
}

const Page = () => {

  return (
    <AuthBox  />
  );
}

export default Page;
