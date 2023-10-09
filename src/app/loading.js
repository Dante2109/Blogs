import Image from 'next/image';
import React from 'react';
import loader from "../../Assets/Eclipse-1s-200px.svg"
const Loading = () => {
  return (
    <div>
      <Image src={loader}  className='m-auto md:py-40'/>
    </div>
  );
}

export default Loading;
