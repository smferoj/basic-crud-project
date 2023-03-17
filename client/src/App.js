import React from "react";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import CreatePage from "./pages/CreatePage";
import ReadPage from "./pages/ReadPage";
import UpdatePage from "./pages/UpdatePage";
import '../src/App.css'


function App() {
  return (
     <BrowserRouter>
     <Routes>
     <Route path="/" element={<ReadPage/>}/>
     <Route path="/create" element={<CreatePage/>}/>
     <Route path="/update/:id" element={<UpdatePage/>}/>
     </Routes>
     
     </BrowserRouter>
  );
}

export default App;
