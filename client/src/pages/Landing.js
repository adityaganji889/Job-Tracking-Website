import main from '../assets/images/main.svg'
import Jobs from '../assets/images/Jobs.svg'
import Wrapper from '../assets/wrappers/LandingPage'
import { Logo } from '../components'
import { Link } from 'react-router-dom'
const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> website
          </h1>
          <p>
          An online job tracking software for an applicant to keep track of his/her progress during the job search process. Tracks the number of pending, interviewed and declined applications.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={Jobs} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
