import { BrowserRouter as Router } from 'react-router-dom'
import MainRoutes from "./Router";
import { BackToTop } from './Components/BackToTop';

export function App() {

  return (
    <>
      <Router>
        <BackToTop />
        <MainRoutes />
      </Router>
    </>
  )
}