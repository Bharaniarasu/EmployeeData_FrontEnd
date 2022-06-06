import "./App.scss";
import EmployeeList from "./components/EmployeeList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";
import ViewEmployee from "./components/ViewEmployee";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<EmployeeList />} />
          <Route path="/employees" element={<EmployeeList />} />
          <Route path="/add-employee/:id" element={<AddEmployee />} />
          <Route path="/view-employee/:id" element={<ViewEmployee />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
