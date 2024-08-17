import "./App.css";
import Home from "./views/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import CarForm from "./components/CarForm";

function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/new" element={<CarForm />} />
      <Route path="/:id" element={<CarForm isUpdating />} />
            
      </Routes>
      </Router>
    </div>
  );
}

export default App;
