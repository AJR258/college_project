// src/App.js or wherever you define your routes
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './components/Loginpage';
import SignupPage from './components/SignupPage';
import Dashboard from './components/Dashboard';
import AttendancePage from './components/AttendancePage';
function App() {
 return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/attendance" element={<AttendancePage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
 );
}

export default App;
