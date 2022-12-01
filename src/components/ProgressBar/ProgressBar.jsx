import { Link } from "react-router-dom"
import './ProgressBar.scss'
import check from '../../assets/icons/icons8-done-24.png'

export default function ProgressBar (){
  
    return(
    <div class="stepper-wrapper">
    
      <Link to='/company-details' className="stepper-item completed">
        <div className="step-counter"><img src={check} alt="1" /></div>
        <div className="step-name">Company Details</div>
      </Link>
      <Link to='/book' className="stepper-item completed">
        <div className="step-counter">2</div>
        <div className="step-name">Contact Info</div>
      </Link>
      <Link to='/create-account' className="stepper-item">
        <div className="step-counter">3</div>
        <div className="step-name">Create Account</div>
      </Link>
      <Link to='/accounts' className="stepper-item">
        <div className="step-counter">4</div>
        <div className="step-name">Link Banking</div>
      </Link>
    </div>
    )
}