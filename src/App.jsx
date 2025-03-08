
import Navbar from "./components/Navbar"
import React, {Component} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";

import BgImageComponent from "./components/BgImage";
import Home from './components/Home'
import Fact1 from "./components/Fact1"
import Fact2 from "./components/Fact2"
import Fact3 from "./components/Fact3"
import './App.css'
import './App.jsx'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
      <div className="App">
      <BgImageComponent />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Fact1" element={<Fact1/>}/>
          <Route path="/Fact2" element={<Fact2/>}/>
          <Route path="/Fact3" element={<Fact3/>}/>
          
        </Routes>
      </div>
      </BrowserRouter>
  )} }
  export default App