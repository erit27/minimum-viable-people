import './CompanyDetails.scss'
import logo from '../../assets/logos/bench-logo.svg'
import lars from '../../assets/image/lars-full.jpg'
function CompanyDetails() {
    return (<>
        <div className='container'>
            <div className='container-large'>
                <div className='container-medium'>

                    <div className='company-details'>
                        <img src={logo} alt="Bench Company Logo" className='company-details__logo' />

                        <h1 className='company-details__title'>Tell us about your business</h1>
                        <p className='company-details__description'>We'd like to learn more about your business so that we can provide you with the best experience possible.</p>
                        <h2 className='company-details__sub'>COUNTRY</h2>
                        <p className='company-details__sub-info'>Select country your business is registered in</p>
                        <div>
                            <select className='company-details__selector'>
                                <option>America</option>
                                <option>Canada</option>
                            </select>
                        </div>
                        <h2 className='company-details__sub'>COMPANY SIZE</h2>
                        <p className='company-details__sub-info'>Select number of owners, employees, and contractors</p>
                        <div>
                            <select className='company-details__selector'>
                                <option>1</option>
                                <option>2-5</option>
                                <option>6-10</option>
                                <option>11-25</option>
                                <option>25+</option>
                                <option>I'm not sure</option>
                            </select>
                        </div>
                        <h2 className='company-details__sub'>MONTHLY REVENUE</h2>
                        <p className='company-details__sub-info'>Select average monthly revenue before deductions</p>
                        <div>
                            <select className='company-details__selector'>
                                <option>$0 (Pre-revenue)</option>
                                <option>$1-$1,000</option>
                                <option>$1,000-$10,0000</option>
                                <option>$10,000-$100,000</option>
                                <option>More than $100,000</option>
                                <option>I'm not sure</option>
                            </select>
                        </div>
                        <h2 className='company-details__sub'>LAST TAX RETURN</h2>
                        <p className='company-details__sub-info'>Select most recent business income tax filing</p>
                        <div>
                            <select className='company-details__selector'>
                                <option>Tax year 2021</option>
                                <option>Tax year 2020</option>
                                <option>Tax year 2019 or prior</option>
                                <option>My business is new</option>
                                <option>I'm not sure</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <img src={lars} alt="" className='company-details__lars' />
                    </div>
                </div>



                <footer className='next-page'>
                    <button className='next-page__button'>NEXT &#8594;</button>
                </footer>
            </div>
        </div>
    </>)
}
export default CompanyDetails