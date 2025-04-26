import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import Login from "./pages/Login";
import Home from "./pages/Home";

function App() {
  const { isAuthenticated } = useContext(AuthContext) || {};

  console.log("isAuthenticated:", isAuthenticated);
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={isAuthenticated ? <Home /> : <Navigate to="/login" />}
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
