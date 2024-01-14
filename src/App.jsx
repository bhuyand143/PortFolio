import { BrowserRouter } from "react-router-dom"
import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas } from './components'
import Educations from "./components/Educations"
// import "./app.scss";
import SocialMedia from "./components/SocialMedia";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Educations />
          <Tech />
          <Works />
          {/* <Feedbacks /> */}
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      </BrowserRouter>
      <SocialMedia />
    </>
  )
}

export default App
