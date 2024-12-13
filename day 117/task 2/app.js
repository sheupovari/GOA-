import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FishPage from './FishPage';
import InfoPage from './InfoPage';

const App = () => (
  <Router>
    <nav>
      <ul>
        <li><a href="/fish">Flying Fish</a></li>
        <li><a href="/info">Info</a></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/fish" element={<FishPage />} />
      <Route path="/info" element={<InfoPage />} />
    </Routes>
  </Router>
);

export default App;
