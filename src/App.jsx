import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoadingPage from './pages/LoadingPage/LoadingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={LoadingPage}></Route>
        <Route path='/signup-bench-free-month-bookkeeping' element={''}></Route>
        <Route path='/company-details' element={''}></Route>
        <Route path='/book' element={''}></Route>
        <Route path='/create-account' element={''}></Route>
        <Route path='/accounts'></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
