import Exit from "../../assets/icons/close-24px.svg";
import Plaid from "../../assets/image/plaid.png";
import Connect from "../../assets/icons/connect.png";
import Privacy from "../../assets/icons/privacy.png";
import './Modal.scss';

export default function Modal() {
  return (
    <div className="modal-background">
      <div className="modal">
        <div>
          <div>
            <img src={Exit} alt="exit" />
          </div>
          <div>
            <img src={Plaid} alt="plaid logo" />
          </div>
          <div>
            <p>
              Bench Accounting uses <strong>Plaid</strong> to connect your
              account
            </p>
          </div>
          <div>
            <div>
              <img src={Connect} alt="connect" />
            </div>
            <div>
              <h3>Connect effortlessly</h3>
              <p>
                Plaid lets you securely connect your financial accounts in
                seconds
              </p>
            </div>
          </div>
          <div>
            <div>
              <img src={Privacy} alt="privacy eye" />
            </div>
            <div>
              <h3>Your data belongs to you</h3>
              <p>
                Plaid doesn't sell your personal info, and will only use it with
                your permision
              </p>
            </div>
          </div>
          <div>
            <div>
              <p>By selecting "Continue" you agree to the</p>
              <p>Plaid End User Privacy Policy</p>
            </div>
            <button className="modal__btn">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
}
