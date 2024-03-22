import MenuItem from './MenuItem'
import { AiFillHome } from 'react-icons/ai'
import { BsFillInfoCircleFill } from 'react-icons/bs'
import Link from 'next/link'
import DarkModeSwitch from './DarkModeSwitch'

const Header = () => {
  return (
    <div className="flex p-4 items-center justify-between bg-slate-700">
      <div className="flex gap-6">
        <MenuItem title="home" address="/" Icon={AiFillHome} />
        <MenuItem title="about" address="/about" Icon={BsFillInfoCircleFill} />
      </div>
      <div className='flex items-center gap-4'>
<DarkModeSwitch />
        <Link href="/" className='flex gap-2 items-center'>
          <p className="p-2 rounded bg-yellow-500 font-bold">IMDB </p>
          <span className="hidden text-white md:inline">Clone</span>
        </Link>
      </div>
    </div>
  )
}

export default Header
