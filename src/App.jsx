import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Account from './pages/Account/Account';
import CustomerContact from './pages/CustomerContact/CustomerContact';
import CompanyDetails from './pages/CompanyDetails/CompanyDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LoadingPage />}>Hello</Route>
        <Route path='/company-details' element={<CompanyDetails/>}></Route>
        <Route path='/book' element={<CustomerContact />}></Route>
        <Route path='/create-account' element={<CreateAccount />}></Route>
        <Route path='/accounts' element={<Account/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
