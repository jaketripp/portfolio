import classnames from 'classnames'
import Image from 'next/image'
import Link from 'next/link'
import {useState} from 'react'
import {MdMenu} from 'react-icons/md'
import logo from 'images/jt_logo.svg'

const Nav = () => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="navbar">
      <div className="navbar__content content-container-fluid">
        <Link href="/" className="navbar__title">
          <Image src={logo} alt="Jake Tripp Logo" priority />
          <h1>Jake Tripp</h1>
        </Link>
        <button
          className="navbar__menu"
          onClick={() => setIsExpanded(!isExpanded)}
          aria-label="Toggle nav bar"
        >
          <MdMenu />
        </button>
        <div className={classnames('navbar-links', isExpanded && 'expanded')}>
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#skills">Skills</Link>
          <Link href="/#work">Work</Link>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
