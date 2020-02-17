import React from 'react';
import './App.scss';
import BodyComponent from './components/BodyComponent/BodyComponent'
import HeaderComponent from './components/HeaderComponent/HeaderComponent';
import FooterComponent from './components/FooterComponent/FooterComponent';


function App() {
  return (
    <div className="app-wrapper">
      <HeaderComponent />
      <div className="container">
      <div className="row">
        <div className="col">
          <h2>January 2020 metrics</h2>
        </div>

      </div>
      </div>
      <BodyComponent />
      <FooterComponent />
    </div>
  );
}

export default App;
