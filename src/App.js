import React,{Component} from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';

import Index from './components/index/index'
import Navbar from './components/navbar/navbar'
import Contact from './components/contact/contact'



class App extends Component {
  render() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Index/>} />
      <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}
}
export default App;
