import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Account from './pages/Account/Account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={""}>Hello</Route>
        <Route path='/signup-bench-free-month-bookkeeping' element={''}></Route>
        <Route path='/company-details' element={''}></Route>
        <Route path='/book' element={''}></Route>
        <Route path='/create-account' element={''}></Route>
        <Route path='/accounts' element={<Account/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
