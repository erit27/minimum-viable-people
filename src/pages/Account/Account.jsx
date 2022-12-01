import "./Account.scss";
import Safe from "../../assets/icons/safe.png";
import Wallet from "../../assets/icons/wallet.png";
import Lock from "../../assets/icons/lock.png";
import Logout from "../../assets/icons/logout.png";
import Logo from "../../assets/icons/logo.png";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";

export default function Account() {
    const [openModal, setOpenModal] = useState(false)
  return (
    <div>
      <div className="">
        <img src={Logo} alt="logo" />
        <img src={Logout} alt="logout" />
      </div>
      <div>
        <h1>Great, now let's link your accounts</h1>
        <h3>
          We'll be calling you on the next business day to help you set up your
          free trial.
        </h3>
        <p>
          In the mean time, if you have business specific checkings, savings, or
          credit cards we need to set those up. We'll use these connections to
          complete your free month of bookkeeping.
        </p>
      </div>
      <div>
        <img src={Safe} alt="safe" />
        <p>We never store your bank account credentials</p>
      </div>
      <div>
        <img src={Lock} alt="lock" />
        <p>We encrypt data with the same level of security as online banking</p>
      </div>
      <div>
        <img src={Wallet} alt="wallet" />
        <p>You'll have the ability to disconnect personal accounts</p>
      </div>
      <div>
        <p>
          Can't find your institution, or having trouble linking? No worries,
          we'll cover this on our call. Need to set up a business specific
          banking? We can help wtih that too!
        </p>
      </div>
      <footer>
        <p>READY FOR A CHAT</p>
        <button onClick={setOpenModal(true)}> LINK BUSINESS ACCOUNTS</button>
      </footer>
      <Modal/>
    </div>
  );
}
