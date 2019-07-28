import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About'
import { BrowserRouter, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
        <NavBar />
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
    </BrowserRouter>
        
    </div>
  );
}

export default App;
