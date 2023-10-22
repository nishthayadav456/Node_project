import React from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import ContextStore from './Components/ContextStore';







function App() {
  return (
    <>

  <div className='App'>
  <span id="The">The</span> <span id="siren">Siren</span>
  </div>
  <br/><br/>

  <ContextStore>
  <NavBar/>
 
</ContextStore>


</>
  );
}

export default App;


