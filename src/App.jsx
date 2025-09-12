import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPages/LoginPage";
import NewLogin from "./Components/LoginPages/NewLogin";
import HeroPage from "./Components/HeroPage";
import ResetPass1 from "./Components/LoginPages/ResetPass1";
import "./App.css"


function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<NewLogin />} />
      <Route path="/hero" element={<HeroPage />} />
      <Route path="/resetPass" element={<ResetPass1 />} />
    </Routes>
  );
}

export default App;
