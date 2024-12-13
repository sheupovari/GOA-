import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './About';
import Contacts from './Contacts';
import MiniInfo from './MiniInfo';

const App = () => (
  <Router>
    <div>
      <nav>
        <ul>
          <li><a href="/about">About</a></li>
          <li><a href="/contacts">Contacts</a></li>
          <li><a href="/mini-info">Mini Info</a></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/mini-info" element={<MiniInfo />} />
      </Routes>
    </div>
  </Router>
);

export default App;
