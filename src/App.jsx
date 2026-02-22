import { useState } from 'react'

import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from "./pages/Login";
import AdminLanding from "./pages/AdminLanding";
import TraineeLanding from "./pages/TraineeLanding";
import SingleRegistration from "./pages/SingleRegistration";
import BulkRegistration from "./pages/BulkRegistration";
import login from "./pages/login";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<login/>}/>
        <Route path="/admin" element={<AdminLanding/>}/>
        <Route path="/trainee" element={<TraineeLanding/>}/>  

<Route path="/single-register" element={<SingleRegistration/>}/>
<Route path="/bulk-register" element={<BulkRegistration/>}/>
      </Routes>


    </Router>
    
    </>
  )
}

export default App
