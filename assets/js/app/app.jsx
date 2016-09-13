import Login from './pages/login';
import ReactROM from 'react-dom';
import React from 'react';

const login = document.getElementById('login');
if(login) {
  ReactROM.render(<Login />, login);
}
