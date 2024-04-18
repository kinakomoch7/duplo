import React from 'react';
import ReactDOM from 'react-dom/client';
import './Reset.css';
import { SignIn } from './Pages/Sing/SingIn';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <SignIn />
  </React.StrictMode>,
)
