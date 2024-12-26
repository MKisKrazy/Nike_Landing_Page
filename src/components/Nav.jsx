import {headerLogo} from "../assets/images"
import {hamburger} from "../assets/icons"
import { navLinks } from "../constants/index.js"
import { useState } from "react"

const Nav = () => {
    const [expanded,setExpanded]=useState(false)
  return (
    <header className="padding-x py-8 w-full z-10 absolute">
        <nav className="flex justify-between items-center relative">
            <a href="/">
                <img src={headerLogo}
                    alt="logo"
                    width={130}
                    height={29} />
            </a>

            <ul className={`flex flex-1 justify-center items-center gap-16 max-lg:flex-col max-lg:absolute max-lg:top-6 max-lg:right-0 max-lg:bg-white max-lg:shadow-lg max-lg:w-full max-lg:h-96 max-lg:z-15 ${expanded ? 'max-lg:block' :'max-lg:hidden'}`}>
                {navLinks.map((item)=>{
                    return(
                        <li key={item.label} className={`hover:scale-105 max-lg:z-15 ${expanded ? 'flex justify-center mt-10 ' :''} `} onClick={()=>{
                            if(!expanded){setExpanded(true)}
                            else{setExpanded(false)}
                        }}>
                            <a href={item.href} className="font-monsterrat leading-normal text-lg text-slate-gray  hover:text-black ">
                            {item.label}
                            </a>
                        </li>
                    )
                })}
            </ul>

          

            <div className="hidden max-lg:block">
                <img src={hamburger} alt="hamburger-menu" width={25} height={25}   onClick={()=>{
                    if(!expanded){setExpanded(true)}
                    else{setExpanded(false)}
                }} />
            </div>
        </nav>
    </header>
  )
}

export default Nav