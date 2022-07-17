import './App.css';
import Profile from "./components/Profile";
import Login from "./components/Login";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/profile" element={<Profile />}/> 
        <Route path="/" element={<Login />} />
     </Routes>
    </div>
    </Router>
  );
}

export default App;
