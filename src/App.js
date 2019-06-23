import React from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  return (
    <div className="App">
      <Header branding="Contact Manger" />
      <div className="container">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
