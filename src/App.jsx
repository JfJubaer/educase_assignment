import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateAccount from "./pages/SignUp";
import SignIn from "./pages/Login";
import Dashboard from "./pages/Account";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/create-account"
        element={<CreateAccount />}
      />
      <Route
        path="/signin"
        element={<SignIn />}
      />
      <Route
        path="/dashboard"
        element={<Dashboard />}
      />
    </Routes>
  );
}

export default App;
