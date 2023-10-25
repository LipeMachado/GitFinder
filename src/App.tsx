import { BrowserRouter as Router } from 'react-router-dom'
import MainRoutes from "./Router";

export function App() {

  return (
    <>
      <Router>
        <MainRoutes />
      </Router>
    </>
  )
}