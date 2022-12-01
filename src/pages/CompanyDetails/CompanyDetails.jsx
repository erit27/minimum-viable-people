import './CompanyDetails.scss'
import logo from '../../assets/logos/bench-logo.svg'
import lars from '../../assets/image/lars-full.jpg'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import progress from '../../assets/image/Property 1=stage 1.png'
import info from '../../assets/image/copy to replace Lars 1.png'
import { useNavigate} from 'react-router-dom/dist';
import { useState } from 'react'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage'

function CompanyDetails() {
    const [error, setError] = useState(false);

    const navigate = useNavigate();
        const navigateHome = () => {
            navigate('/')
        }
        function handleSubmit(event) {
            event.preventDefault();
            navigate('/book')
        }
        const navigateNext = () => {
            navigate('/book')
        }

        const handleError = (e) =>{
            if(e.target.value === '2'){
                setError(true)
            }
            else {
                setError(false)
            }
        }

    return (<>
        <div className='container'>
            <div className='container-large'>
                <div className='container-medium'>
                    <div className='company-details'>
                        <img src={logo} alt="Bench Company Logo" className='company-details__logo' onClick={navigateHome} />

                        <h1 className='company-details__title'>Tell us about your business</h1>
                        <p className='company-details__description'>We'd like to learn more about your business so that we can provide you with the best experience possible.</p>
                        <h2 className='company-details__sub'>COUNTRY</h2>
                        <p className='company-details__sub-info'>Select country your business is registered in</p>
                        <form action="submit" onSubmit={handleSubmit}>
                            <div>
                                <select onChange={(e)=>handleError(e)} className={`company-details__selector ${error === true? "invalid":null}`}>
                                    <option selected disabled hidden>Select</option>
                                    <option value='1'>America</option>
                                    <option value='2'>Canada </option>
                                </select>
                                <ErrorMessage display={error}/>
                            </div>
                            <h2 className='company-details__sub'>COMPANY SIZE</h2>
                            <p className='company-details__sub-info'>Select number of owners, employees, and contractors</p>
                            <div>
                                <select className='company-details__selector'>
                                    <option value="" selected disabled hidden> Select</option>
                                    <option value='1'>1</option>
                                    <option value='2'>2-5</option>
                                    <option value='3'>6-10</option>
                                    <option value='4'>11-25</option>
                                    <option value='5'>25+</option>
                                    <option value='6'>I'm not sure</option>
                                </select>
                            </div>
                            <h2 className='company-details__sub'>MONTHLY REVENUE</h2>
                            <p className='company-details__sub-info'>Select average monthly revenue before deductions</p>
                            <div>
                                <select className='company-details__selector'>
                                    <option value="" selected disabled hidden> Select</option>
                                    <option value='1'>$0 (Pre-revenue)</option>
                                    <option value='2'>$1-$1,000</option>
                                    <option value='3'>$1,000-$10,0000</option>
                                    <option value='4'>$10,000-$100,000</option>
                                    <option value='5'>More than $100,000</option>
                                    <option value='6'>I'm not sure</option>
                                </select>
                            </div>
                            <h2 className='company-details__sub'>LAST TAX RETURN</h2>
                            <p className='company-details__sub-info'>Select most recent business income tax filing</p>
                            <div>
                                <select className='company-details__selector'>
                                    <option value="" selected disabled hidden> Select</option>
                                    <option value='1'>Tax year 2021</option>
                                    <option value='2'>Tax year 2020</option>
                                    <option value='3'>Tax year 2019 or prior</option>
                                    <option value='4'>My business is new</option>
                                    <option value='5'>I'm not sure</option>
                                </select>
                                <div>

                                    <footer className='next-page'>
                                    <ProgressBar/>
                                        <button type='submit' className='next-page__button' >NEXT &#8594;</button>
                                    </footer>
                                </div>

                            </div>
                        </form>
                    </div>
                    <div>
                        <img src={info} alt="" className='company-details__lars' />
                    </div>
                </div>

            </div>
        </div>
    </>)
}
export default CompanyDetails