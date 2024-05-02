import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Read from "./pages/read";


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<Read/>} />
      </Routes>
    </Router>
  );
}

export default App;