import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import RecognitionImage from './pages/RecognitionImage/RecognitionImage';

function App() {
  return (
    <Router>
      <Routes>
        {/* Rota inicial que abre a Home */}
        <Route path="/" element={<Home />} />
        {/* Outra rota para RecognitionImage */}
        <Route path="/recognition" element={<RecognitionImage />} />
      </Routes>
    </Router>
  );
}

export default App;
