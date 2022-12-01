import "./Account.scss";
import Safe from "../../assets/icons/safe.png";
import Wallet from "../../assets/icons/wallet.png";
import Lock from "../../assets/icons/lock.png";
import Logout from "../../assets/icons/logout.png";
import Logo from "../../assets/icons/logo.png";
import Example from "../../assets/image/example.png";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { useNavigate } from "react-router-dom";


export default function Account() {
  const [openModal, setOpenModal] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className="account">
      <div className="account__sidebar-left">
        <img onClick={handleClick} src={Logo} alt="logo" />
        <img onClick={handleClick} className="logout-img" src={Logout} alt="logout" />
      </div>
      <div className="main">
        <div className="main__header">
          <h1 className="main__header--heading">Great, now let's link your accounts</h1>
          <h3 className="main__header--subheading">
          To get full use of the Bench platform, we recommended you link your bank account to your dashboard.
          </h3>
          <p>
            Please note:
          </p>
        </div>
        <div className="main__fact">
          <img src={Safe} alt="safe" />
          <p className="main__fact--text">We never store your bank account credentials</p>
        </div>
        <div className="main__fact">
          <img src={Lock} alt="lock" />

          <p className="main__fact--text">We encrypt data with the same level of security as online banking</p>
        </div>
        <div className="main__fact">
          <img src={Wallet} alt="wallet" />
          <p className="main__fact--text">You'll have the ability to disconnect personal accounts</p>
        </div>
        <div className="main__block">
          <p className="main__block--text">
            Can't find your institution, or having trouble linking? No worries,
            we'll cover this on our call. Need to set up a business specific
            banking? We can help wtih that too!
          </p>
        </div>
      </div>
      <img className="example-img" src={Example} alt="example app" />
      <footer className="footer-account">
        <ProgressBar/>
        <div className="footer-account__section">
        <p className="footer-account__link">TRIAL DASHBOARD</p>
        <button
          onClick={() => setOpenModal(true)}
          className="footer-account__btn"
        >
          {" "}
          LINK BUSINESS ACCOUNTS
        </button>
        </div>
      </footer>
      {openModal && <Modal click={setOpenModal} />}
    </div>
  );
}

