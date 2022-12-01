import './BenchHeader.scss';
import benchLogo from '../../assets/logos/bench_logo.jpeg';
import { Link } from "react-router-dom";

export default function BenchHeader() {
  return (
    <>
    <div className="header__wrapper">
    </div>
    <Link to='/'>
      <img src={benchLogo} alt="bench logo" />
    </Link>
    <img src="../../assets/logos/bench_logo.jpeg" alt="" />
    </>
  )
}