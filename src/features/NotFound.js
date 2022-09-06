import logo from '@/resources/logo.png'

const NotFound = () => {
  const facebookLink = process.env.REACT_APP_FACEBOOK
  const instagramLink = process.env.REACT_APP_INSTAGRAM
  
  return ( 
    <div className="flex items-center justify-center h-screen bg-secondary">
      <div className="container">
        <div className="bg-primary rounded-lg shadow-lg p-5 md:p-20 mx-1">
          <div className="text-center">
            <h2 className="text-3xl tracking-tight leading-10 font-black text-logo-yellow sm:text-5xl sm:leading-none md:text-5xl">
              Durham University MMA
            </h2>
            <div className='flex justify-center mt-3'>
              <img src={logo} alt='logo' className='w-20 md:w-28'/>
            </div>
            <h3 className='text-xl md:text-3xl mt-5 text-white'>404 Not Found</h3>
            <p className="mb-8 text-center text-gray-500 md:text-lg">
              The page you’re looking for doesn’t exist.
            </p>
            <a
              href="/"
              className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-gray hover:border-gray hover:bg-primary hover:text-white shadow-md py-2 px-6 inline-flex items-center"
              >Go home</a
            >
          </div>
          <div className="flex flex-wrap mt-10 justify-center text-white">
            {facebookLink &&
              <div className="m-3">
                <a href={facebookLink}
                  title="Entrepreneurs Durham On Facebook"
                  className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-blue-600 hover:border-blue-600 hover:bg-blue-600 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="mx-auto">Facebook</span>
                </a>
              </div>
            }
            {instagramLink &&
              <div className="m-3">
                <a href={instagramLink} 
                  title="Entrepreneurs Durham On Instagram"
                  className="md:w-32 bg-white tracking-wide text-gray-800 font-bold rounded border-2 border-pink-600 hover:border-pink-500 hover:bg-pink-500 hover:text-white shadow-md py-2 px-6 inline-flex items-center"
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <span className="mx-auto">Instagram</span>
                </a>
              </div>
            }

          </div>
        </div>
      </div>
    </div>
  )
}
 
export default NotFound