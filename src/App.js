/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { Home } from './Main-Web/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Main-Web/login/login';
import Register from './Main-Web/registration/register';
import Contact from './ContactUs/contact';
import About from './About/about';
import Shop from './Shopping/shop';
import ShopDetail from './Shopping/shopdetail';
import AddTocart from './AddToCart/addtocart';
import Catshow from './Category/categoryshow';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/regis" element={<Register/>}/>
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route path="/detail/:productId" element={<ShopDetail/>}/>
        <Route path="/addtocart/:productId" element={<AddTocart/>}/>
        <Route path="/catshow/:categoryid" element={<Catshow/>}/>        
      </Routes>
    
    
    </div>
    </BrowserRouter>
    
  );
}

export default App;
