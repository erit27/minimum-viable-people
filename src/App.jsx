import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage/LoadingPage';
import Account from './pages/Account/Account';
import CompanyDetails from './pages/CompanyDetails/CompanyDetails';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<LoadingPage />}>Hello</Route>
          <Route path='/signup-bench-free-month-bookkeeping' element={''}></Route>
          <Route path='/company-details' element={<CompanyDetails />}></Route>
          <Route path='/book' element={''}></Route>
          <Route path='/create-account' element={''}></Route>
          <Route path='/accounts' element={<Account />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
