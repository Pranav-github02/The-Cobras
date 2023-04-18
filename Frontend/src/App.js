import './App.css';
import { Routes, Route } from "react-router-dom";
import ButtonsPage from './components/buttonspage/ButtonsPage';
import Getpage from './components/buttonspage/pages/Getpage';
import Home from './components/home/Home';
// import { Navbar } from './components/navbar/Navbar';
import Postpage from './components/buttonspage/pages/Postpage';
import PatchPage from './components/buttonspage/pages/PatchPage';
import DeletePage from './components/buttonspage/pages/DeletePage';
import ConnInfo from './components/connInfo/ConnInfo';
import Results from './components/buttonspage/pages/Results';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <ToastContainer /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/info' element={<ConnInfo />} />
        <Route path='/buttons' element={<ButtonsPage />} />
        <Route path='/get' element={<Getpage />} />
        <Route path='/post' element={<Postpage />} />
        <Route path='/patch' element={<PatchPage />} />
        <Route path='/delete' element={<DeletePage />} />
        <Route path='/results' element={<Results />} />
      </Routes>
    </div>
  );
}

export default App;
