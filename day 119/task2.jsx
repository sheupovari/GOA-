import { useParams } from "react-router-dom";

const Categories = () => {
  const { id } = useParams();
  return <h1>Category: {id}</h1>;
};

export default Categories;


import Categories from "./components/Categories";

const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/category/football">Football</Link></li>
          <li><Link to="/category/basketball">Basketball</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/category/:id" element={<Categories />} />
      </Routes>
    </Router>
  );
};

