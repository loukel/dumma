import Join from "./Join"
import AboutHeader from "./AboutHeader"

const About = () => {
  return ( 
    <div className="w-full animate-fade">
      <AboutHeader />
      <div className='p-6'>
        <Join />
      </div>
    </div>
  )
}
 
export default About