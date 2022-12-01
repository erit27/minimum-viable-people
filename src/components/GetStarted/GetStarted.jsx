import './GetStarted.scss';
import {useNavigate} from 'react-router-dom';

export default function GetStarted() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    navigate('/company-details')
  }

  return (
    <>
    <div className="getStarted__wrapper">
      <div className="getStarted__title">Get Started with America's largest bookkeeping service</div>
      <div className="getStarted__subtitle">A bench expert will give you a call and ask a few questions to ensure that bench is the best fit for your business</div>
      <form onSubmit={handleSubmit} className="getStarted__form">
        <div className="getStarted__formWrap">
          <input 
          type="text"
          placeholder='Full Name'
          className='getStarted__input' />
          <input 
          type="text"
          placeholder='Email'
          className='getStarted__input' />
          <button type='submit' className='getStarted__button'>Start a Free Trial</button>
        </div>
      </form>
      <div className="getStarted__finePrint">No credit check required. By clicking 'Start a Free Trial', I agree to Bench's Terms & Privacy Policy</div>
      <div className="getStarted__login"><p className="getStarted__login--white">Already have an account?</p><a href="/" className="getStarted__login--turq">  Log in here.</a></div>
    </div>
    </>
  )
}