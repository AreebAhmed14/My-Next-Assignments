import React from 'react'
import Link from "next/link"

const Navbar = () => {
  return (
    <div>
       <ul>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/About"}>About</Link></li>
        <li><Link href={"/Contact"}>Contact</Link></li>
        <li><Link href={"/Facility"}>Facility</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
