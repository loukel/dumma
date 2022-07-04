import { BrowserRouter as Router } from 'react-router-dom'
import PublicRoutes from "@/routes/PublicRoutes"

function App() {
  return (
    <div className="App font-varela-round">
      <Router>
        <PublicRoutes />
      </Router>
    </div>
  )
}

export default App