import "./App.css";
import Login from "./components/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import BSucess from "./pages/BSucess";
import DBTasks from "./pages/DBTasks";
import Performance from "./pages/Performance";
import Security from "./pages/Security";
import Settings from "./pages/Settings";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/navbar" element={<Navbar />}></Route>
          <Route path="/DBTasks" element={<DBTasks />}></Route>
          <Route path="/performance" element={<Performance />}></Route>
          <Route path="/security" element={<Security />}></Route>
          <Route path="/settings" element={<Settings />}></Route>
          <Route path="/backup/success" element={<BSucess />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
