import './CallInfo.scss'
import calculator from '../../assets/image/calculator.jpg';

export default function CallInfo() {
  return (
    <>
    <div className="callInfo__wrapper">
      <img src={calculator} alt="savings calculator" className='calculator' />
    </div>
    </>
  )
}