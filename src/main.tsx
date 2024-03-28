import React from 'react';
import ReactDOM from 'react-dom/client';
import './Reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/HomePage/Home';
import { Register } from './Pages/Register/Register';
import { NotFound } from './Pages/NotFound/NotFound';
import { Menu } from './Pages/Menu/Menu';
import { HOME_PATH, MENU_PATH, REGISTER_PATH } from './constants/path';
import { Footer } from './common/Footer/Footer';
import { MINT_GREEN, WHITE } from './common/style';
import { NBox } from './common/NBox';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <div style={{backgroundColor:WHITE, height:'100vh', width:'100%'}}>
        <NBox style={{ width:'100%', height:'5vh' }} />
        <Routes >
          <Route path={HOME_PATH} element={ <Home /> } />
          <Route path={REGISTER_PATH} element={ <Register /> } />
          <Route path={MENU_PATH} element={ <Menu /> } />
          <Route path='*' element={ <NotFound /> } />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
)
