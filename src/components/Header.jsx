import Link from "next/link";
import MenuItem from "./MenuItem";
import {AiFillHome} from 'react-icons/ai';
import {BsInfoCircleFill} from 'react-icons/bs'
export default function Header() {
  return (
    <div className="flex h-[50px] justify-between items-center px-2 max-w-6xl sm:mx-auto">
      <div className="flex">
        <MenuItem title="HOME" address="/" Icon={AiFillHome}/>
        <MenuItem title="ABOUT" address="/about" Icon={BsInfoCircleFill}/>
      </div>
      <div className="flex">
        <Link href="/">
          <h2 className="text-2xl"><span className=" font-bold bg-amber-500 py-1 px-2 rounded-lg">IMDb</span><span className="text-xl hidden sm:inline">Clone</span></h2>
        </Link>
      </div>
    </div>
  )
}