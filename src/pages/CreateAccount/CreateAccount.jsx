import '../../pages/CreateAccount/CreateAccount.scss';
import Logo from '../../assets/logos/bench_logo.jpeg';
import Image from '../../assets/image/lars-full.jpg';

function CreateAccount (){
  return (
    <div className='account'>
      <div className='account-main'>
        <img className='account-logo' src={Logo} alt="logo" />
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
      <div className='account-img'>
        <img className='account-img__lars' src={Image} alt="larsImage" />
      </div>
    </div>
      // <button>NEXT</button>
    
  )
}

export default CreateAccount;