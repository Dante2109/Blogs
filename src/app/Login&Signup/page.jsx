import dynamic from 'next/dynamic';
import React from 'react';
let AuthBox =dynamic(()=>import("../Components/Authbox"))

const Page = () => {
  return (
    <AuthBox  />
  );
}

export default Page;
