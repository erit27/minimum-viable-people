import '../../pages/CustomerContact/CustomerContact.scss';
import Logo from '../../assets/logos/bench-logo.svg';
import Image from '../../assets/image/lars-full.jpg';

function CustomerContact (){
  return (
    <div className='contact'>
      <div className='contact-main'>
        <img className='contact-logo' src={Logo} alt="logo" />
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
              <input className='contact-detail__country-input' type="text"/>
            </div>
            <div className='contact-detail__time'>
              <label className='contact-detail__time-zone'>TIME ZONE</label>
              <input className='contact-detail__time-input'type="text" />
            </div>
          </div>
        </form>
          <button className='contact-btn'>NEXT</button>
      </div>
      <div className='contact-img'>
        <img className='contact-img__lars' src={Image} alt="larsImage" />
      </div>
    </div>
    
  )
}

export default CustomerContact;