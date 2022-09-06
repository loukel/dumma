import InstagramIcon from "@/components/icons/InstagramIcon"
import FacebookIcon from "@/components/icons/FacebookIcon"

const Footer = () => {
  const instagramLink = process.env.REACT_APP_INSTAGRAM
  const facebookLink = process.env.REACT_APP_FACEBOOK

  return ( 
    <footer className="text-gray-400 bg-secondary body-font">
      <div className="bg-tertiary bg-opacity-75">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-400 text-sm text-center sm:text-left">© 2022 Durham University MMA —
            <a href="https://www.instagram.com/durhamentrepreneurs/" className="text-gray-500 ml-1" target="_blank" rel="noopener noreferrer">@durham_mma</a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            {facebookLink &&
              <a 
                className="ml-3 text-gray-400" 
                href={facebookLink}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FacebookIcon />
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
          </span>
        </div>
      </div>
    </footer>
  )
}
 
export default Footer