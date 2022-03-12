import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Dashboard from "./pages/Dashboard";
// import { Forms, RegularForms, DataPiker, ValidationForms } from "./pages/Forms";


function App() {
  return (
    <Router>
      <Sidebar />
      {/* <Routes>
        <Route path="/Dashboard" exact component={Dashboard} />
        <Route path="/forms" exact component={Forms} />
        <Route path="/forms/RegularForms" exact component={RegularForms} />
        <Route path="/forms/DataPiker" exact component={DataPiker} />
        <Route path="/forms/ValidationForms" exact component={ValidationForms} />
      </Routes> */}
    </Router>
  );
}

export default App;
