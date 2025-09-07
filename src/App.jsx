import { Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import NewLogin from "./Components/NewLogin";
import HeroPage from "./Components/HeroPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/signup" element={<NewLogin />} />
      <Route path="/hero" element={<HeroPage />} />
    </Routes>
  );
}

export default App;
