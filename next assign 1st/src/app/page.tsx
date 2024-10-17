import Link from "next/link"
export default function Home(){
  return(
    <>
    <div className="maintext">
      <div className="mainlimit"><center><h1><q>EMPOWERING BRIGHT <span className="oneword">FUTURE</span></q></h1></center></div>
      <div className="sublimit"><center><p><q>At Aspire Academy, we empower students to achieve their full potential. With a focus on academic excellence and personal growth, we prepare our students for a bright and successful future</q></p></center></div>
      <Link href={"/About"}><button className="rmorebtn">READ MORE</button></Link>
    </div>
    </>
  )
}