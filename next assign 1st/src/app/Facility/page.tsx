import NestedCss from "./Facility.module.css"
import Link from "next/link"
export default function Facility(){
    return(
        <>
        <div className={NestedCss.maintextfacility}>
      <div><h1>FACILITY</h1></div>
        <Link href={"/Facility/Discovermore"}><button className={NestedCss.btn}>DISCOVER</button></Link>
    </div>
        </>
    )
}