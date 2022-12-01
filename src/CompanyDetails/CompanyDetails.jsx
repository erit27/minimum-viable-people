import './CompanyDetails.scss'
import logo from '../assets/logo/bench-logo.svg'
function CompanyDetails() {
    return (<>
        <div>
            <img src={logo} alt="Bench Company Logo" />
            <h1>Tell us about your business</h1>
            <p>We'd like to learn more about your business so that we can provide you with the best experience possible.</p>
            <h2>COMPANY SIZE</h2>
            <p>Select number of owners, employees, and contractors</p>
            <div>
                <select>
                    <option>1</option>
                    <option>2-5</option>
                    <option>6-10</option>
                    <option>11-25</option>
                    <option>25+</option>
                    <option>I'm not sure</option>
                </select>
            </div>
        </div>




    </>)
}
export default CompanyDetails