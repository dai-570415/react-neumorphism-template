import React from 'react';
import './assets/css/App.css';
import Header from './components/Header';
import Navi from './components/Navi';
import Footer from './components/Footer';

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="container">
        <div className="contents">
          <Navi />
          <main>
            Hello!React!
          </main>
        </div>
        <Footer />
      </div>
    </React.Fragment>
  );
}

export default App;
