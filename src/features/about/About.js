// import Events from "./Events"
import Socials from "./Socials"
import TimetableDisplay from "./TimetableDisplay"
import { useNavigate } from 'react-router-dom'

const About = () => {
  const navigate = useNavigate()

  return ( 
    <div className="animate-fade lg:mx-16">
      <div className='p-6'>
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to Durham University MMA</h1>
        <p className="text-center">
          Durham University Mixed Martial Arts Club (DUMMA) was established with the intention of combining the best martial art traditions around. Whether it be kickboxing, Muay Thai, or Jiu-jitsu; we are determined to challenge ourselves to grow and become more well-rounded. We currently receive coaching from top-tier BJJ and MMA specialists from the North East. There are a range of sessions available, from Kick-boxing to Muay Thai to BJJ.
        </p>
        <div className='flex justify-center my-4'>
          <button className='mr-3 text-white bg-logo-yellow border-0 focus:outline-none hover:bg-yellow-300 rounded text-lg font-bold px-3 py-2' onClick={() => navigate('/join')}>
              Join Now
          </button>
        </div>
      </div>
      {/* <Events /> */}
      <Socials />
      <div className='p-6 mb-52'>
        <TimetableDisplay />
      </div>
    </div>
  )
}
 
export default About