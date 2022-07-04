import FacebookIcon from "@/components/icons/FacebookIcon"
import InstagramIcon from "@/components/icons/InstagramIcon"
import LinkedInIcon from "@/components/icons/LinkedInIcon"
import TwitterIcon from "@/components/icons/TwitterIcon"

const Footer = () => {
  const facebookLink = process.env.REACT_APP_FACEBOOK
  const twitterLink = process.env.REACT_APP_TWITTER
  const instagramLink = process.env.REACT_APP_INSTAGRAM
  const linkedInLink = process.env.REACT_APP_LINKEDIN

  return ( 
    <footer className="text-gray-400 bg-secondary body-font">
      <div className="bg-tertiary bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">© 2021 Entrepreneurs Durham —
            <a href="https://www.instagram.com/durhamentrepreneurs/" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@entrepreneursdurham</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {facebookLink &&
              <a 
                className="text-gray-400" 
                href={facebookLink}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            }
            {twitterLink &&
              <a
                className="ml-3 text-gray-400" 
                href={twitterLink}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            }
            {instagramLink &&
              <a 
                className="ml-3 text-gray-400" 
                href={instagramLink}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
            }
            {linkedInLink && 
              <a
                className="ml-3 text-gray-400" 
                href={linkedInLink}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
            }
          </span>
        </div>
      </div>
    </footer>
  )
}
 
export default Footer