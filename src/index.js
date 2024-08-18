import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import UserDetails from "./pages/UserDetails";
import Terms from "./pages/Terms";
import Dashboard from "./pages/Dashboard";
import Differential from "./pages/Differential"
import DifferentialOutput from "./pages/DifferentialOutput"
import NoPage from "./pages/NoPage";
import "./index.css";          // import it to import the tailwind css


export default function Website() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user_details" element={<UserDetails />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/differential" element={<Differential />} />
          <Route path="/differential-output" element={<DifferentialOutput />} />
          <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Website />);