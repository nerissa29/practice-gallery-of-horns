import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Main from './Main.js';
import './App.css';

class App extends React.Component {
  render() {
    return(
      <>
        <Header />
        <Main />
        <Footer />
      </>
    )
  }
}

export default App;
