import './LoadingPage.scss';
import BenchHeader from '../../components/BenchHeader/BenchHeader';
import GetStarted from '../../components/GetStarted/GetStarted';
import CallInfo from '../../components/CallInfo/CallInfo';
import logo from '../../assets/logos/bench_logo.jpeg'

export default function LoadingPage() {
  return (
    <>
      <BenchHeader />
      <div className="loadPage__wrapper">
        <GetStarted />
        <CallInfo />
      </div>
    </>
  )
}