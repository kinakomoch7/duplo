import React from 'react';
import ReactDOM from 'react-dom/client';
import './Reset.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Register } from './Pages/Register/Register';
import { NotFound } from './Pages/NotFound/NotFound';
import { Menu } from './Pages/Menu/Menu';
import { HOME_PATH, MENU_PATH, REGISTER_PATH } from './constants/path';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes >
        <Route path={HOME_PATH} element={ <Home /> } />
        <Route path={REGISTER_PATH} element={ <Register /> } />
        <Route path={MENU_PATH} element={ <Menu /> } />
        <Route path='*' element={ <NotFound /> } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
