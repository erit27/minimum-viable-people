import './BenchHeader.scss';
import benchLogo from '../../assets/logos/bench_logo.jpeg';
import { Link } from "react-router-dom";

export default function BenchHeader() {
  return (
    <>
    <div className="header__wrapper">
    <Link to='/'><img src={benchLogo} alt="bench logo" className='header__logo' /></Link>
    </div>
    </>
  )
}