import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './ProgressBar.scss'
import check from '../../assets/icons/icons8-done-24.png'

export default function ProgressBar (){
    const [step, setStep] = useState(window.location.pathname);
    const [oneOn, setOneOn] = useState(false);
    const [twoOn, setTwoOn] = useState(false);
    const [threeOn, setThreeOn] = useState(false);
    const [fourOn, setFourOn] = useState(false);

    let path = window.location.pathname;

    useEffect(() => {
      if (path.includes('/company-details')) {
        setStep(path);
        console.log(step);
        setOneOn(true);
        setTwoOn(false);
        setThreeOn(false);
        setFourOn(false);
      } else if (path.includes('/book')) {
        setStep(path);
        console.log(step);
        setOneOn(true);
        setTwoOn(true);
        setThreeOn(false);
        setFourOn(false);
      } else if (path.includes('/create-account')) {
        setStep(path)
        console.log(step)
        setOneOn(true);
        setTwoOn(true);
        setThreeOn(true);
        setFourOn(false);
      } else {
        setStep(path)
        console.log(step)
        setOneOn(true);
        setTwoOn(true);
        setThreeOn(true);
        setFourOn(true);
      } 
        },[path])

    return(
    <div className="stepper-wrapper">
    
      <Link to='/company-details' 
      className= {oneOn? "stepper-item completed": "stepper-item"}
      >
        <div className="step-counter"><img src={oneOn? `${check}`:''} alt="1" /></div>
        <div className="step-name">Company Details</div>
      </Link>
      <Link to='/book' className={twoOn? "stepper-item completed": "stepper-item"}>
        <div className="step-counter">2</div>
        <div className="step-name">Contact Info</div>
      </Link>
      <Link to='/create-account' className={threeOn? "stepper-item completed": "stepper-item"}>
        <div className="step-counter">3</div>
        <div className="step-name">Create Account</div>
      </Link>
      <Link to='/accounts' className={fourOn? "stepper-item completed": "stepper-item"}>
        <div className="step-counter">4</div>
        <div className="step-name">Link Banking</div>
      </Link>
    </div>
    )
}