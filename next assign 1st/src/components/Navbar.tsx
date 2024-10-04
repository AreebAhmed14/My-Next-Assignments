import Link from "next/link"
export default function Navbar(){
    return(
        <>
        <ul>
        <li><Link href={"/"}>Home</Link></li>
        <li><Link href={"/About"}>About</Link></li>
        <li><Link href={"/Contact"}>Contact</Link></li>
        <li><Link href={"/Facility"}>Facility</Link></li>
      </ul>
        </>
    )
}