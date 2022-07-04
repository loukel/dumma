import { Route, Routes } from 'react-router-dom'
import About from '@/features/about/About'
import Team from '@/features/team/Team'
import NotFound from '@/features/NotFound'
import Wrapped from './Wrapped'

const PublicRoutes = () => {
  return (
    <Routes>
      <Route exact={true} path='/' element={<Wrapped><About /></Wrapped>}/>
      <Route exact={true} path='/team' element={<Wrapped><Team /></Wrapped>} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
 
export default PublicRoutes