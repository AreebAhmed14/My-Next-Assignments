import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
      <nav className='w-full h-12 bg-white flex justify-center items-center'>
        <ul className='w-full h-12 flex justify-center items-center border-b-8 border-pink-600'>
            <Link href={"/"}><li className='mx-[4vw] font-serif text-2xl font-semibold hover:scale-90 cursor-pointer  text-pink-600'>Home</li></Link>
            <Link href={"/Contact"}><li className='mx-[4vw] font-serif text-2xl font-semibold hover:scale-90 cursor-pointer  text-pink-600'>Contact</li></Link>
            <Link href={"/About"}><li className='mx-[4vw] font-serif text-2xl font-semibold hover:scale-90 cursor-pointer  text-pink-600'>About</li></Link>
            <Link href={"/Facility"}><li className='mx-[4vw] font-serif text-2xl font-semibold hover:scale-90 cursor-pointer  text-pink-600'>Facility</li></Link>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
