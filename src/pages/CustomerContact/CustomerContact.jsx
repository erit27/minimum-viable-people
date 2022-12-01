import "../../pages/CustomerContact/CustomerContact.scss";
import Logo from "../../assets/logos/bench-logo.svg";
import Image from "../../assets/image/call-expert.png";
import { useNavigate, Link } from "react-router-dom";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

function CustomerContact() {
  const navigate = useNavigate();
  const handleBtnClick = () => {
    navigate("/create-account");
  };
  return (
    <div className="contact">
      <div className="contact-main">
        <div className="contact-top">
          <Link to="/">
            <img className="contact-logo" src={Logo} alt="logo" />
          </Link>
          <h1 className="contact-title">Let's get your business verified!</h1>
          <p className="contact-paragraph">
            Before we can get your free month of bookkeeping started, we'll need
            a few more details.{" "}
          </p>
          <form className="contact-form">
            <label className="contact-company">COMPANY NAME</label>
            <input className="contact-input" type="text" />
            <label className="contact-number">PHONE NUMBER</label>
            <input className="contact-input" type="text" />
            <label className="contact-number">BUSINESS REGISTRATION #:</label>
            <input className="contact-input" type="text" />
            <label className="contact-number">BUSINESS ADDRESS</label>
            <input className="contact-input" type="text" />
            <div className="contact-detail">
              <div className="contact-detail__country">
                <label className="contact-detail__country-name">COUNTRY</label>
                <select className="contact-detail__country-input">
                  <option value="">Select</option>
                  <option value="1">Canada</option>
                  <option value="2">United State</option>
                </select>
              </div>
              <div className="contact-detail__time">
                <label className="contact-detail__time-zone">TIME ZONE</label>
                <select className="contact-detail__time-input">
                  <option value="">Select</option>
                  <option value="1">Pacific</option>
                  <option value="2">Hawaii</option>
                  <option value="3">Alaska</option>
                  <option value="4">Mountain</option>
                  <option value="5">Central</option>
                  <option value="6">Eastern</option>
                </select>
              </div>
              <div className="contact-detail__time">
                <label className="contact-detail__time-zone">ZIP CODE</label>
                <input className="contact-detail__time-input" type="text" />
              </div>
            </div>
            <div className="contact-buttonWrap">
              <div className="contact-wrap">
                <div className="contact-buttonWrap--id">Upload Photo ID</div>
                <div className="contact-buttonWrap--turq contact-btns">
                  Upload
                </div>
              </div>
              <div className="contact-wrap">
                <div className="contact-buttonWrap--selfie">Upload Selfie </div>
                <div className="contact-buttonWrap--turq contact-btns">
                  Upload
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="contact-img">
        <img className="contact-img__lars" src={Image} alt="larsImage" />
      </div>

      <footer className="next-page">
        <div className="progress">
          <ProgressBar />
        </div>
        <button onClick={handleBtnClick} className="next-page__button">
          NEXT
        </button>
      </footer>
    </div>
  );
}

export default CustomerContact;
