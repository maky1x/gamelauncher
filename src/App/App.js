import './App.css';
import { StorePage } from '../Store/StorePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GameInfo } from '../GameInfo/GameInfo';
import { Friends } from '../Friends/Friends';

function App() {
  // da game

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<StorePage />} />
            <Route path="/gameinfo" element={<GameInfo />} />
            <Route path="/friends" element={<Friends/>}/>
          </Routes>
        </Router>
    </>
  );
}

export default App;
