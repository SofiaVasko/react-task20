import "./App.css";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter basename="/react-task20">
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
