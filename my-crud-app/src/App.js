import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import ReadForm from "./pages/read";
import CreateForm from "./pages/create";
import DeleteForm from "./pages/delete";
import UpdateForm from "./pages/update";
import HomePage from "./pages/home";


function App(){
  return(
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/readform" element={<ReadForm/>} />
        <Route path="/createform" element={<CreateForm/>} />
        <Route path="/deleteform" element={<DeleteForm/>} />
        <Route path="/updateform" element={<UpdateForm/>} />
      </Routes>
    </Router>
  );
}

export default App;