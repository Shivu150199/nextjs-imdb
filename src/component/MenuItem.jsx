import Link from 'next/link'

const MenuItem = ({ title, address, Icon }) => {
  return (
    <Link href={address} className='text-white text-2xl'>
      <Icon className="md:hidden"/>
      <p className="uppercase hidden md:inline">{title}</p>
    </Link>
  )
}

export default MenuItem
