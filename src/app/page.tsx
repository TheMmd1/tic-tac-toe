"use client"
import Image from "next/image";
import "./intro.css"
import logo from "./images/Logo.png"
import xLeft from "./images/Group (1).png"
import oLeft from "./images/Group (2).png"
import oRight from "./images/Group (3).png"
import xRight from "./images/Group (4).png"
import { useRouter } from "next/navigation";


export default function Home() {

  const router = useRouter();

  const handleClick = () => {
    router.push("Board")
  }

  return (

    <div className="intro">
        <Image  src={logo} width={560} height={391} alt="logo" className="logo animate-bounce" onClick={handleClick}/>
        <Image  src={xLeft} width={95} height={111} alt="img" className="xLeft"/>
        <Image  src={oLeft} width={224} height={230} alt="img" className="oLeft"/>
        <Image  src={oRight} width={121} height={125} alt="img" className="oRight"/>
        <Image  src={xRight} width={346} height={402} alt="img" className="xRight"/>
      <div className="center">
      </div>
  </div>
  );
}
