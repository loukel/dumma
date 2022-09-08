import Events from "./Events"
import TimetableDisplay from "./TimetableDisplay"

const About = () => {
  return ( 
    <div className="animate-fade lg:mx-16">
      <div className='p-6'>
        <h1 className="text-3xl font-bold text-center mb-6">Welcome to Durham University MMA</h1>
        <p className="text-center">
          Durham University Mixed Martial Arts Club (DUMMA) was established with the intention of combining the best martial art traditions around. Whether it be kickboxing, Muay Thai, or Jiu-jitsu; we are determined to challenge ourselves to grow and become more well-rounded. We currently receive coaching from top-tier BJJ and MMA specialists from the North East. There are a range of sessions available, from Kick-boxing to Muay Thai to BJJ.
        </p>
        {/* <button className='flex mx-auto text-black bg-logo-yellow border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg font-bold'>
          Join
        </button> */}
      </div>
      <Events />
      <div className='p-6'>
        <TimetableDisplay />
      </div>
    </div>
  )
}
 
export default About