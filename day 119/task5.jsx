import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import LionFacts from "./components/LionFacts";
import Conservation from "./components/Conservation";

const App = () => (
  <Router>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/facts">Lion Facts</Link></li>
        <li><Link to="/conservation">Conservation</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/facts" element={<LionFacts />} />
      <Route path="/conservation" element={<Conservation />} />
    </Routes>
  </Router>
);

export default App;

// LionFacts.js
const LionFacts = () => <h1>Lions are majestic creatures of the wild.</h1>;

// Conservation.js
const Conservation = () => <h1>Efforts to conserve lions are ongoing globally.</h1>;
