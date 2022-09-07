import React from 'react'
import './App.css';
import {originals,action} from './Urls'
import Banner from './Components/Banner/Banner';
import Navbar from './Components/Navbar/Navbar';
import Rowpost from './Components/RowPost/Rowpost';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost  title='Netflix Originals ' type='movie' url={action} isSmall/>
      <Rowpost  title='Action' type='tv' url={originals}/>
    </div>
  );
}

export default App;
