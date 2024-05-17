import React from 'react'
import Link from 'next/link'

const StickyBar = () => {
  return (
   <div className='fixed bottom-0 w-full left-0 bg-[#242424] px-6 py-3'>
      <div className='flex justify-between'>
        
        <Link href="/">
          <div className='flex flex-col items-center gap-[2px]'>
            <img src='/fire.svg' className='w-[40px] h-[40px]'/>
            <div className='text-[10px] text-[#D15439]'>Page1</div>
          </div>
        </Link>
        
        <Link href="/page2">
          <div className='flex flex-col items-center gap-[2px]'>
            <img src='/training.svg' className='w-[40px] h-[40px]'/>
            <div className='text-[10px] text-[#D15439]'>Page2</div>
          </div>
        </Link>
        
        <Link href="/page3">
          <div className='flex flex-col items-center gap-[2px]'>
            <img src='/food.svg' className='w-[40px] h-[40px]'/>
            <div className='text-[10px] text-[#D15439]'>Page3</div>
          </div>
        </Link>
        
        <Link href="/page4">
          <div className='flex flex-col items-center gap-[2px]'>
            <img src='/progress.svg' className='w-[40px] h-[40px]'/>
            <div className='text-[10px] text-[#D15439]'>Page4</div>
          </div>
        </Link>
        
      </div>
    </div>
  )
}

export default StickyBar
