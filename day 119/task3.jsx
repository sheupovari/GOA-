import { useParams } from "react-router-dom";

const foods = [
  { id: 1, name: "Pizza", description: "Delicious Italian pizza" },
  { id: 2, name: "Burger", description: "Juicy beef burger" },
];

const FoodDetails = () => {
  const { id } = useParams();
  const food = foods.find((item) => item.id === parseInt(id));
  return food ? (
    <div>
      <h1>{food.name}</h1>
      <p>{food.description}</p>
    </div>
  ) : (
    <p>Food not found!</p>
  );
};

export default FoodDetails;

// App.js
import FoodDetails from "./components/FoodDetails";

const App = () => (
  <Router>
    <nav>
      <Link to="/food/1">Pizza</Link>
      <Link to="/food/2">Burger</Link>
    </nav>
    <Routes>
      <Route path="/food/:id" element={<FoodDetails />} />
    </Routes>
  </Router>
);

