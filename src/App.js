import './App.css';
import { useRef } from 'react';

import ReactToPrint from 'react-to-print';

import PageSingle from './components/PageSingle';
import ButtonSidebar from './components/ButtonSidebar';

import './App.css'

export default function App() {

  const pageReference = useRef();

  function handleClear() {

  }

  function handleSwap() {

  }


  return (
    <div className="app">
      <div className="content">
        <div className="header">Generator raportów</div>
        <div className="page" ref={pageReference}>
          <PageSingle />
        </div>
        <div className="footer">
          Ernest Szczepaniak @ CODWAY 2023. All rights reserved. 
        </div>
      </div>
      <div className="sidebar">
          <ButtonSidebar name="clear" onClick={handleClear}/>
          <ReactToPrint
            trigger={() => <ButtonSidebar name='print'/>}
            content={() => pageReference.current}
            size="A4"
          />
          <ButtonSidebar name='swap' onClick={handleSwap}/>
      </div>

    </div>
  );
}



