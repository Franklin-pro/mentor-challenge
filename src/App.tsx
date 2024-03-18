import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './sass/main.scss';
import DisplayPage from './pages/displayPage';
import './App.css';
import MentorPage from './pages/welcome';


function App() {
  

  return (
   <>
   <Router>
    <Routes>
      <Route path='/' element={<MentorPage/>}></Route>
      <Route path='/display' element={<DisplayPage/>}></Route>
    </Routes>
   </Router>
   </>
  );

}
export default App;
