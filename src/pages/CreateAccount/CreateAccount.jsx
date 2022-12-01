import '../../pages/CreateAccount/CreateAccount.scss';
import Logo from '../../assets/logos/bench-logo.svg';
import Image from '../../assets/image/copy to replace Lars 2.png';
import { useNavigate, Link } from 'react-router-dom';
import ProgressBar from "../../components/ProgressBar/ProgressBar";

function CreateAccount (){

  const navigate = useNavigate ();

  const handleBtnClick = () =>{
    navigate('/accounts')
  }

  return (
    <div className='account'>
      <div className='account-main'>
        <div className="account-top">
        <Link to='/'><img className='contact-logo' src={Logo} alt="logo" /></Link>
          <h1 className='account-title'>Create Your Bench account</h1>
          <p className='account-paragraph'>Review your account details and create a password.</p>
          <form className='account-form'>
            <label className='account-name'>FIRST NAME</label>
            <input className='account-input' type="text" />
            <label className='account-lastName'>LAST NAME</label>
            <input className='account-input'type="text" />
            <label className='account-email'>EMAIL</label>
            <input className='account-input' type="text" placeholder='test@test.com'/>
            <label className='account-password'>PASSWORD</label>
            <input className='account-input'type="text" />
          </form>
          <p className='account-agreement'>By signing up you accept our <span> End User License Agreement And Terms of Service.</span>
          </p>
        </div>
        

        <footer className="account-footer">
          <button onClick={handleBtnClick} className='contact-btn'>NEXT</button>
          <ProgressBar />
        </footer>
      </div>
      <div className='account-img'>
        <img className='account-img__lars' src={Image} alt="larsImage" />
      </div>
    </div>
    
    
    
  )
}

export default CreateAccount;