import Link from 'next/link'

const Header = () => {
  return (
    <nav className="layout flex items-center justify-between py-4">
      <ul className="flex items-center justify-between space-x-3 text-xs md:space-x-4 md:text-base">
        <li>
          <Link href="/" className="hover:underline">
            首页
          </Link>
        </li>
        <li>
          <Link href="/#posts" className="hover:underline">
            生活
          </Link>
        </li>
        <li>
          <Link href="/#projects" className="hover:underline">
            技术
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
