import '../../pages/CustomerContact/CustomerContact.scss';
import Logo from '../../assets/logos/bench-logo.svg';
import Image from '../../assets/image/copy to replace Lars 3.png';
import { useNavigate, Link } from 'react-router-dom';
import ProgressBar from "../../components/ProgressBar/ProgressBar";

function CustomerContact (){
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate('/create-account')
  }
  return (
    <div className='contact'>
      <div className='contact-main'>
        <div className="contact-top">
          <Link to='/'><img className='contact-logo' src={Logo} alt="logo" /></Link>
          <h1 className='contact-title'>Thanks, and how can our team contact you?</h1>
          <p className='contact-paragraph'>Before we can get your free month of bookkeeping started, we'll need a few more details. Let us know the best phone number  reach you, and we'll get in touch ASAP to get started.</p>
          <form className='contact-form'>
            <label className='contact-company'>COMPANY NAME</label>
            <input className='contact-input' type="text" />
            <label className='contact-number'>PHONE NUMBER</label>
            <input className='contact-input'type="text" />
            <div className='contact-detail'>
              <div className='contact-detail__country'>
                <label className='contact-detail__country-name'>COUNTRY</label>
                <select className='contact-detail__country-input'>
                  <option value="">Select</option>
                  <option value="1">Canada</option>
                  <option value="2">United State</option>
                </select>
              </div>
              <div className='contact-detail__time'>
                <label className='contact-detail__time-zone'>TIME ZONE</label>
                <select className='contact-detail__time-input'>
                  <option value="">Select</option>
                  <option value="1">Pacific</option>
                  <option value="2">Hawaii</option>
                  <option value="3">Alaska</option>
                  <option value="4">Mountain</option>
                  <option value="5">Central</option>
                  <option value="6">Eastern</option>
                </select>
               
              </div>
            </div>
          </form>
        </div>
        
        <footer className="contact-footer">
          <button onClick={handleBtnClick} className='contact-btn'>NEXT</button>
          <ProgressBar />
        </footer>
          
      </div>
      <div className='contact-img'>
        <img className='contact-img__lars' src={Image} alt="larsImage" />
      </div>
    </div>
    
  )
}

export default CustomerContact;