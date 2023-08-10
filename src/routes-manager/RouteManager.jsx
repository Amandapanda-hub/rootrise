import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home/Home";
import NavBar from '../components/NavBar/NavBar';
import Footer from '../components/Footer/Footer';
import About from '../pages/About/About';
import Missions from '../pages/Missions/Missions';
import MissionPosts from '../pages/MissionPosts/MissionPosts';
import Contact from '../pages/Contact/Contact';


export default function RouteManager() {
    return (
     <Router>
        <NavBar/>
          <Routes>
            
               <Route path='/' element={
                <Home/>
              } />
              <Route path='/about' element={
                <About/>
              } />
               <Route path='/missions' element={
                <Missions/>
              } />
                <Route path='/mission/:id' element={
                    <MissionPosts/>
              } />
              <Route path='/contact' element={
               <Contact/>
              } />

          </Routes>
          <Footer/>
     </Router>
    )
  }
  