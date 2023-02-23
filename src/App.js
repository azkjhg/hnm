import './App.css';
import {
  Route,
  Routes,
} from "react-router-dom";
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import ProductDetail from './page/ProductDetail';
import PrivateRoute from './route/PrivateRoute';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';

function App() {
  const[authenticate, setAuthenticate] = useState(false)// true면 로그인
  useEffect(()=>{
  console.log("aaa", authenticate)}
  , [authenticate])
  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ProductAll/>}></Route>
          <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>}></Route>
          <Route path='/product/:id/' element={<PrivateRoute authenticate={authenticate}/>}></Route>
        </Routes>
    </div>
  );
}

export default App;
