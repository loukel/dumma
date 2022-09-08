import FacebookIcon from "@/components/icons/FacebookIcon"
import InstagramIcon from "@/components/icons/InstagramIcon"

const TeamCard = ({ name, role, imgFile, description, facebook, instagram, bordered=false }) => {
  return ( 
    <div className="p-4 lg:w-1/2">
      <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
        <img alt="profile" className={`flex-shrink-0 rounded-lg w-60 h-60 object-cover object-center sm:mb-0 mb-4 ${bordered ? 'border-4 border-black' : ''}`} src={imgFile ? `/resources/${imgFile}` : 'https://dummyimage.com/200x200'} />
        <div className="flex-grow sm:pl-8">
          <h2 className="title-font font-medium text-lg text-gray-900">{name}</h2>
          <h3 className="text-gray-500 mb-3">{role}</h3>
          <p className="mb-4 text-sm">{description}</p>
          <span className="inline-flex">
            {facebook && 
              <a href={facebook} rel="noopener noreferrer" target="_blank" className="text-gray-500">
                <FacebookIcon />
              </a>
            }
            {instagram &&
              <a href={instagram} rel="noopener noreferrer" target="_blank" className="ml-2 text-gray-500">
                <InstagramIcon />
              </a>
            }
          </span>
        </div>
      </div>
    </div>
  )
}
 
export default TeamCard