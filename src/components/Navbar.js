import logo from './images/logo.png'
import {useNavigate} from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()
  return (
    <nav>
    <div className= "logo-container">
        <img src={logo} alt="logo" fontSize='12px'/>
    </div>
    <div className="menu">
      <div className='./login'>Login</div>
      <div className='./signup'>Signup</div>
    </div>
    <div className="controls-container">
        <div className='icon' onClick={() => navigate('/ticket')}>+</div>
        <div className='icon' onClick={() => navigate('/Home')}>+</div>
        <div className='icon' onClick={() => navigate('/login')}>+</div> 
        <div className='icon' onClick={() => navigate('/signup')}>+</div>
    </div>
    </nav>

  )
}

export default Navbar
