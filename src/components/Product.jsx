import React from 'react';
import { Link } from 'react-router-dom';
// import icon 
import {BsEyeFill, BsPlus} from 'react-icons/bs';

const Product = () => {
  return (
    <div className=' border border-[/e4e4e4] rounded-md  bg-white'>
    <div className='border-b border-[/e4e4e4] h-[200px] xl:h-[300px] mb-2 relative oevrflow-hidden group transition'>
      <div className='w-full h-full flex justify-center items-center'>
        {/* {image} */}
        <div className='w-[200px] mx-auto flex justify-center items-center'>
          <img alt="title" className='max-h-[160px] group-hover:scale-110 transition duration-300' src="https://via.placeholder.com/800x400?text=Slide+1" />
        </div>
      </div>
      {/* buttons */}
      <div className='absolute top-6 -right-11 group-hover:right-5  p-1 flex flex-col  items-center justify-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-all'>
        <button >
          <div className='flex justify-center  items-center text-white w-12 h-12 bg-blue-500'>
          <BsPlus className='text-3xl' />
          </div>
        </button>
        <Link className='w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl'>
          <BsEyeFill />
        </Link>
      </div>
    </div>
    {/* Category, price and title */}
    <div className='p-2'>
      <div className='text-sm capitalize text-gray-500 mb-1'>category</div>
      <Link >
      <h2 className='font-semibold mb-1'>title</h2>
      </Link>
      <div className='font-semibold'>$ price</div>
    </div>
  </div>
  )
}

export default Product