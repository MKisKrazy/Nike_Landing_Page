import {headerLogo} from "../assets/images"
import {hamburger} from "../assets/icons"
import { navLinks } from "../constants/index.js"

const Nav = () => {
  return (
    <header className="padding-x py-8 w-full z-10 absolute">
        <nav className="flex justify-between items-center">
            <a href="/">
                <img src={headerLogo}
                    alt="logo"
                    width={130}
                    height={29} />
            </a>

            <ul className=" flex flex-1 justify-center items-center gap-16 max-lg:hidden">
                {navLinks.map((item)=>{
                    return(
                        <li key={item.label} className="hover:scale-105">
                            <a href={item.href} className="font-monsterrat leading-normal text-lg text-slate-gray  hover:text-black ">
                            {item.label}
                            </a>
                        </li>
                    )
                })}
            </ul>

            <div className="hidden max-lg:block">
                <img src={hamburger} alt="hamburger-menu" width={25} height={25} />
            </div>
        </nav>
    </header>
  )
}

export default Nav