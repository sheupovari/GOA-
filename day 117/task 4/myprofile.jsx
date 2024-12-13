import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyProfile from './myprofile.jsx';

const App = () => (
  <Router>
    <nav>
      <ul>
        <li><a href="/my-profile">My Profile</a></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/my-profile" element={<MyProfile />} />
    </Routes>
  </Router>
);

export default App;
