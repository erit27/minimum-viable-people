import '../../pages/CustomerContact/CustomerContact.scss';
import Logo from '../../assets/logos/bench-logo.svg';
import Image from '../../assets/image/call-expert.png';
import { useNavigate, Link } from 'react-router-dom';
import ProgressBar from "../../components/ProgressBar/ProgressBar";

function CustomerContact() {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate('/create-account')
  }
  return (
    <div className='contact'>
      <div className='contact-main'>
        <div className="contact-top">
          <Link to='/'><img className='contact-logo' src={Logo} alt="logo" /></Link>
          <h1 className='contact-title'>Let's get your business verified!</h1>
          <p className='contact-paragraph'>Before we can get your free month of bookkeeping started, we'll need a few more details. </p>
          <form className='contact-form'>
            <label className='contact-company'>COMPANY NAME</label>
            <input className='contact-input' type="text" />
            <label className='contact-number'>PHONE NUMBER</label>
            <input className='contact-input'type="text" />
            <label className='contact-number'>BUSINESS REGISTRATION #:</label>
            <input className='contact-input'type="text" />
            <label className='contact-number'>BUSINESS ADDRESS</label>
            <input className='contact-input'type="text" />
            <div className='contact-detail'>
              <div className='contact-detail__country'>
                <label className='contact-detail__country-name'>STATE</label>
                <input className='contact-detail__country-input' type="text"/>
              </div>
              <div className='contact-detail__time'>
                <label className='contact-detail__time-zone'>CITY</label>
                <input className='contact-detail__time-input'type="text" />
              </div>
              <div className='contact-detail__time'>
                <label className='contact-detail__time-zone'>ZIP CODE</label>
                <input className='contact-detail__time-input'type="text" />
              </div>
            </div>
            <div className="contact-buttonWrap">
              <div className="contact-wrap">
                  <div className="contact-buttonWrap--id">
                Upload Photo ID</div>
                  <div className="contact-buttonWrap--turq contact-btns">Upload</div>
              </div>
              <div className="contact-wrap">
                <div className="contact-buttonWrap--selfie">
                Upload Selfie </div>
                  <div className="contact-buttonWrap--turq contact-btns">Upload</div>
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