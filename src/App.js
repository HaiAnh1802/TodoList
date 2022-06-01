import logo from './logo.svg';
import './App.css';
import Header from './Component/Header'
import Menu1 from './Component/Menu'
import Menu from './Component/Menu'
import Dashboard from './Component/Dashboard'
import Add_New_Task from './Component/Add_New_Task'
import Detail from './Component/Detail'
import Login from './Component/Login'
import Footer from './Component/Footer'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    < >
      <Router>
        <Header/>
        <Menu/>
        <Routes>
            <Route exact path="/" element={  <Dashboard/>} />
            <Route path="/Add_New_Task" element={<Add_New_Task/>} />
            <Route path="/Detail" element={<Detail/>} />
          </Routes>
      </Router>
      
      

    </>
    
  );
}

export default App;
