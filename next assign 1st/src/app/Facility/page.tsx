import NestedCss from "./Facility.module.css"
import Link from "next/link"
export default function Facility(){
    return(
        <>
        <div className={NestedCss.maintextfacility}>
      <div><h1>FACILITY</h1></div>
      <div className={NestedCss.faciul}>
      <dl className={NestedCss.dl}>
        <dt>Discover our facilities</dt>
        <dd>We have a wide range of facilities to cater to your needs</dd>
        <dt>Accommodation</dt>
        <dd>Our accommodation options cater to various budgets and preferences</dd>
        <dt>Transportation</dt>
        <dd>We offer convenient transportation options, including shuttle services and public transportation</dd>
        <dt>Learning Resources</dt>
        <dd>We have access to a vast library, online courses, and digital resources for your learning needs</dd>
        <dt>Health and Wellness</dt>
        <dd>We offer a variety of health and wellness services, including yoga, dance, and mindfulness</dd>
        <dt>Workshops and Seminars</dt>
        <dd>We organize workshops and seminars to help you develop your skills and knowledge</dd>
      </dl>
      </div>
        <Link href={"/Facility/Discovermore"}><button className={NestedCss.btn}>SUCCESS STUDENTS</button></Link>
    </div>
        </>
    )
}