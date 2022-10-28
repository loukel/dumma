import { Route, Routes } from 'react-router-dom'
import About from '@/features/about/About'
import Team from '@/features/team/Team'
import NotFound from '@/features/NotFound'
import Wrapped from './Wrapped'
import EventSignUp from '@/features/events/EventSignUp'
import Header from '@/components/Header'
import EventPeople from '@/features/events/EventPeople'
import ContactUs from '@/features/contactUs/ContactUs'
import MessagesAuth from '@/features/contactUs/MessagesAuth'
import Join from '@/features/join/Join'
import Calender from '../features/calender/Calender'
 
const PublicRoutes = () => {
  return (
    <Routes>
      <Route exact={true} path='/' element={<Wrapped><About /></Wrapped>}/>
      <Route exact={true} path='/team' element={<Wrapped><Team /></Wrapped>} />
      <Route exact={true} path='/contact-us' element={<><Header /><ContactUs /></>} />
      <Route exact={true} path='/calender' element={<><Header /><Calender /></>} />
      <Route exact={true} path='/join' element={<><Header /><Join /></>} />
      <Route exact={true} path='/messages' element={<><Header /><MessagesAuth /></>} />
      <Route exact={true} path='/events/:id' element={<><Header /><EventSignUp /></>} />
      <Route exact={true} path='/events/:id/people' element={<><Header /><EventPeople /></>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
 
export default PublicRoutes