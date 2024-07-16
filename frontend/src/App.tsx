import { lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
const Navbar = lazy(() => import("./components/Header.tsx"));
const HomeScreen = lazy(() => import("./pages/HomeScreen"));

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
    </Router>
  );
};

export default App;
