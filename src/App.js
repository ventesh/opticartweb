/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { Home } from './Main-Web/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Main-Web/login/login';
import Register from './Main-Web/registration/register';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/regis" element={<Register/>}/>
      </Routes>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
