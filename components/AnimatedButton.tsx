import Image from 'next/image';
import React from 'react';
import ArrowForward from '@mui/icons-material/ArrowForward';
import Link from 'next/link';

const AnimatedButton = ({black} : {black: string}) => {

  const blackBtn = "relative bg-zinc-800 p-2 rounded-full flex max-w-max items-center gap-2 md:gap-4 group  overflow-hidden";
  const whiteBtn = "relative bg-gray-100 p-2 rounded-full flex max-w-max items-center gap-2 md:gap-4 group  overflow-hidden"

  return (
    <Link href="https://cal.com/aringawande/15min?date=2024-12-03&month=2024-12">
    <div className={black == 'yes' ? blackBtn : whiteBtn}>
      {/* Logo */}
      <div className="rounded-full flex-shrink-0">
        <Image
          src="/icons/aiflow-purple-bg-logo.png"
          alt="logo"
          width={40}
          height={40}
          className="object-cover rounded-full"
        />
      </div>

      {/* Text */}
      <div className='w-[200px]'>
        <h4 className={black == 'yes' ? "font-medium text-gray-200 text-xs md:text-sm" : "font-medium text-gray-700 text-xs md:text-sm"}>
          Schedule your first meeting with, 
          <span className='text-gray-400 text-sm'>
            {" "}AI Sonnet
          </span>
        </h4>
      </div>

      {/* Static White Circle */}
      <div className={black == 'yes' ? "relative z-10 rounded-full bg-black p-2 flex-shrink-0" : "relative z-10 rounded-full bg-white p-2 flex-shrink-0"}>
        {black == 'yes' ? (

          <ArrowForward style={{ color: 'white', fontSize: 24}}/>
        ): (
          <ArrowForward style={{ color: 'black', fontSize: 24}}/>
        )}
      </div>

      {/* Animated Black Circle */}
      <div
        className=
        {black == 'yes' ? "absolute top-1/2  -translate-y-1/2  right-[-50px] bg-white p-2 rounded-full transition-all duration-500 ease-in-out transform group-hover:right-2 group-hover:translate-x-0 z-50"
          : "absolute top-1/2  -translate-y-1/2  right-[-50px] bg-black p-2 rounded-full transition-all duration-500 ease-in-out transform group-hover:right-2 group-hover:translate-x-0 z-50"
        }
      >
        
        {black == 'yes' ? (

<ArrowForward style={{ color: 'black', fontSize: 24}}/>
): (
<ArrowForward style={{ color: 'white', fontSize: 24}}/>
)}
      </div>
    </div>
    </Link>
  );
};

export default AnimatedButton;
