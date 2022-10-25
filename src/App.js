
import './App.css';
import Direction from './pages/Direction';
import Hello from './pages/Hello';
import Login from './pages/Login';
import Apple from './pages/Login';
import Register from './pages/Register';


import Boat from './pages/Boat';
import FetchDta from './pages/FetchDta';
import ManA from './pages/ManA';
import React from 'react';
import ReducSam from './pages/ReducSam';
import Contextsam from './pages/Contextsam';
import ContextTwo from './pages/ContextTwo';
export const createContext = React.createContext()
function App() {

  return (
    <div className="App">
{/* <Direction/>
      <Hello /> */}
     {/* <Boat/> */}

     {/* <FetchDta/> */}

     <createContext.Provider value={'sidhu'}>
     <ManA/>
     </createContext.Provider>
    
{/* 
    <ReducSam/> */}

    <Contextsam/>

    <ContextTwo/>
    </div>
  );
}

export default App;
