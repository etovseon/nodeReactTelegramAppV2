import './App.css';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import {Route, Routes} from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Auth from './components/Auth/Auth';
import { useTelegram } from './components/hooks/useTelegram';
import FirstFrame from './components/FirstFrame/FirstFrame'
// import AuthJs from './components/Auth/AuthJS'

function App() {

  const {onTogleButton,tg} = useTelegram();
  useEffect(() => {
    tg.ready();
  },[])

  
  return (
 
    <div className="App">
      <Header/>
      <Routes>
        <Route index element={<FirstFrame/>}/>
        <Route path='order' element={<ProductList/>}/>
        <Route path='auth' element={<Auth/>}/>
        <Route path='authData' element={<authData/>}/>
      </Routes>
    </div>
  );
}

export default App;
