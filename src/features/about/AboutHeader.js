import header from '@/resources/header.jpg'
import LinkedInLargeIcon from '@/components/icons/LinkedInLargeIcon'
import InstagramLargeIcon from '@/components/icons/InstagramLargeIcon'
import TwitterLargeIcon from '@/components/icons/TwitterLargeIcon'
import FacebookLargeIcon from '@/components/icons/FacebookLargeIcon'

const AboutHeader = () => {
  const facebookLink = process.env.REACT_APP_FACEBOOK
  const twitterLink = process.env.REACT_APP_TWITTER
  const instagramLink = process.env.REACT_APP_INSTAGRAM
  const linkedInLink = process.env.REACT_APP_LINKEDIN

  return (
    <div className='relative'>
      <img src={header} alt='header' className='w-full'/>
      <span className="md:inline-flex absolute bottom-4 left-2 hidden inline-flex lg:ml-auto lg:mt-0 mt-6 w-full justify-center md:justify-start md:w-auto">
        {facebookLink &&
          <a 
            className="text-gray-400" 
            href={facebookLink}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <FacebookLargeIcon />
          </a>
        }
        {twitterLink &&
          <a
            className="ml-3 text-gray-400" 
            href={twitterLink}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <TwitterLargeIcon />
          </a>
        }
        {instagramLink &&
          <a 
            className="ml-3 text-gray-400" 
            href={instagramLink}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <InstagramLargeIcon />
          </a>
        }
        {linkedInLink && 
          <a
            className="ml-3 text-gray-400" 
            href={linkedInLink}
            target="_blank" 
            rel="noopener noreferrer"
          >
            <LinkedInLargeIcon />
          </a>
        }
      </span>
    </div>
  )
}
 
export default AboutHeader;