import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import CreateAccount from './pages/CreateAccount/CreateAccount';
import Account from './pages/Account/Account';
import CustomerContact from './pages/CustomerContact/CustomerContact';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>

        <Route path='/' element={<LoadingPage />}>Hello</Route>
        <Route path='/signup-bench-free-month-bookkeeping' element={''}></Route>
        <Route path='/company-details' element={''}></Route>
        <Route path='/book' element={''}></Route>
        <Route path='/create-account' element={<CreateAccount />}></Route>
        <Route path='/customer-contact' element={<CustomerContact />}></Route>
        <Route path='/accounts' element={<Account/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
