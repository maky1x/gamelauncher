import './App.css';
import { StorePage } from '../Store/StorePage';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GameInfo } from '../GameInfo/GameInfo';

function App() {
  // da game

  return (
    <>
      <Router>
          <Routes>
            <Route path="/" element={<StorePage />} />
            <Route path="/gameinfo" element={<GameInfo />} />
          </Routes>
        </Router>
    </>
  );
}

export default App;
