"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const StickyBar = () => {
  const pathname = usePathname();
  return (
    <div className='fixed bottom-0 w-full left-0 bg-[#242424] px-6 py-3'>
      <div className='flex justify-between'>

        <Link href="/">
          <div className='flex flex-col items-center gap-[2px]'>
          <Image src={pathname === '/' ? "/firered.svg" : "/fire.svg"} width={40} height={40} className='w-[40px] h-[40px]' alt="Icon"/>

            <div className={`text-[10px] ${pathname === '/' ? "text-[#D15439]" : "text-[#B5B5B5]"}`}>Page1</div>
          </div>
        </Link>

        <Link href="/page2">
          <div className='flex flex-col items-center gap-[2px]'>
            <Image src={pathname === '/page2' ? "/trainingred.svg" : "/training.svg"} width={40} height={40}  className='w-[40px] h-[40px]' alt="Icon"/>
            <div className={`text-[10px] ${pathname === '/page2' ? "text-[#D15439]" : "text-[#B5B5B5]"}`} >Page2</div>
          </div>
        </Link>

        <Link href="/page3">
          <div className='flex flex-col items-center gap-[2px]'>
            <Image src={pathname === '/page3' ? "/foodred.svg" : "/food.svg"}  width={40} height={40}  className='w-[40px] h-[40px]'alt="Icon" />
            <div className={`text-[10px] ${pathname === '/page3' ? "text-[#D15439]" : "text-[#B5B5B5]"}`}>Page3</div>
          </div>
        </Link>

        <Link href="/page4">
          <div className='flex flex-col items-center gap-[2px]'>
            <Image src={pathname === '/page4' ? "/progressred.svg" : "/progress.svg"}  width={40} height={40}   className='w-[40px] h-[40px]' alt="Icon" />
            <div className={`text-[10px] ${pathname === '/page4' ? "text-[#D15439]" : "text-[#B5B5B5]"}`}>Page4</div>
          </div>
        </Link>

      </div>
    </div>
  );
};

export default StickyBar;
