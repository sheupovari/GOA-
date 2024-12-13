import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CppPage from './CppPage';

const App = () => (
  <Router>
    <nav>
      <ul>
        <li><a href="/cpp">C++ Page</a></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/cpp" element={<CppPage />} />
    </Routes>
  </Router>
);

export default App;
