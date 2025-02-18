import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import 'remixicon/fonts/remixicon.css'
import Pageone from './pages/pageone';
import Resume from './pages/resume';
function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Pageone/>}/>
          <Route path="/resume" element={<Resume/>}/>
        </Routes>
      </Router>
  );
}

export default App;
