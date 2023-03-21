import './App.css';
import React, { useRef } from 'react';
// import ReactToPrint from 'react-to-print';

import PageSingle from './components/PageSingle';
import Footer from './components/Footer';
import ButtonSidebar from './components/ButtonSidebar';

import './App.css'

export default function App() {

  // const componentRef = useRef();

  function handleClear() {

  }

  function handlePrint() {

  }

  function handleSwap() {

  }


  return (
    <div className="app">
      <div className="content">
        <PageSingle />
        <Footer />
      </div>
      <div className="sidebar">
        <ButtonSidebar name="clear" onClick={handleClear}/>
        <ButtonSidebar name='print' onClick={handlePrint}/>
        <ButtonSidebar name='swap' onClick={handleSwap}/>
      </div>
    </div>
  );
}



// <ReactToPrint
// trigger={() => <button>Print this out!</button>}
// content={() => componentRef.current}
// size="A4"
// />