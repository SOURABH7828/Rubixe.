import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import Form from './component/Form';
import Body from './component/Body';
import Copyright from './component/Copyright';
import Imm from './component/imm';
import Middle from './component/Middle';



function App() {
  return (
    <div className="App">
      <Header/><br/>
      <Imm/>
      <Body/>
      <Middle/>
      <Form/>
      
      <Footer/>
      <Copyright/>
  













      {/*
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
  */}
    </div>
  );
}

export default App;
