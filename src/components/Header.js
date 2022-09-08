import { Link } from 'react-router-dom'
import logo from '@/resources/logo.png'

const Header = () => {
  return ( 
    <header className="text-gray-400 bg-secondary body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to='/' className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img src={logo} alt='logo' style={{ maxWidth: '60px' }}/>
          <span class="ml-3 text-2xl font-black text-logo-yellow">Durham University MMA</span>
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
          <Link to='/' className="mr-5 hover:text-white">About</Link>
          {/* <Link to='/team' className="mr-5 hover:text-white">Join</Link> */}
          <Link to='/team' className="mr-5 hover:text-white">Meet the Team</Link>
          {/* <Link to='/events' className="mr-5 hover:text-white">Events</Link> */}
        </nav>
      </div>
    </header>
  )
}
 
export default Header