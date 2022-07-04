import Footer from '../components/Footer'
import Header from '../components/Header'

const Wrapped = ({ children}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  )
}

export default Wrapped