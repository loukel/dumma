import { Link } from 'react-router-dom'
import logo from '@/resources/logo.png'

const Header = () => {
  return ( 
    <header className="text-gray-400 bg-secondary body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt='logo' style={{ maxWidth: '60px' }}/>
          <span className="ml-3 text-2xl font-black text-logo-yellow">Durham University MMA</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l border-gray-600 flex flex-wrap items-center text-base justify-center leading-10 border-t md:border-t-0">
          <Link to='/' className="mr-5 hover:text-white">About</Link>
          <Link to='/calendar' className="mr-5 hover:text-white">Calendar</Link>
          <Link to='/team' className="mr-5 hover:text-white">Meet the Team</Link>
          <Link to='/contact-us' className="mr-5 hover:text-white">Contact Us</Link>
          <Link to='/join' className="mr-5 hover:text-white">Join</Link>
        </nav>
      </div>
    </header>
  )
}
 
export default Header