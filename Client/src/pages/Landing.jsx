import { Link } from "react-router-dom"

import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg'
import { Logo } from "../components";


const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job <span>tracking</span> app</h1>
          {/* <p>Im baby wayfarers hoodie next level taiyaki brooklyn cliche blue bottle single-origin coffee chia. Aesthetic post-ironic venmo, quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch narwhal.</p> */}
          <p>Effortlessly manage and track job applications with our intuitive app. Stay organized by keeping tabs on application statuses, interview schedules, and follow-ups—all in one place. Whether you are actively job hunting or planning your next career move, streamline your process and never miss an opportunity.</p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img"/>
      </div>
    </Wrapper>
  )
};


export default Landing