import './LoadingPage.scss';
import BenchHeader from '../../components/BenchHeader/BenchHeader';
import GetStarted from '../../components/GetStarted/GetStarted';
import logo from '../../assets/logos/bench_logo.jpeg'

export default function LoadingPage() {
  return (
    <>
      <BenchHeader />
      <p className='test'>Hello</p>
      <h1>TEST</h1>
      <div>your text here</div>
      <img src={logo} alt="" />
    </>
  )
}