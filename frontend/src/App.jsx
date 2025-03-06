import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginAuthPage from './components/login.jsx';
import RegisterAuthPage from './components/register.jsx';
import List from "./components/list.jsx";
import Navbar from "./components/navbar.jsx";
import DoctorProfile from "./components/docter.jsx";
import AppointmentsList from "./components/appointments.jsx";
import Home from "./components/home.jsx";
import { AuthProvider } from "./context/AuthContext"; 

const App = () => {
  return (
    <AuthProvider>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginAuthPage />} />
        <Route path="/signup" element={<RegisterAuthPage />} />
        <Route path="/:userId/search" element={<List />} />
        <Route path="/:userId/search/:id" element={<DoctorProfile />} />
        <Route path="/:userId/appointments" element={<AppointmentsList />} />
      </Routes>
    </Router>
    </AuthProvider>
  );
};

export default App;
