import { Route, Routes } from "react-router-dom";
import Shoes from "../pages/shoes";
import Main from "../pages/main";
import Three from "../pages/three";
import Three2 from "../components/Element3D2";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="shoes" element={<Shoes />} />
      <Route path="three" element={<Three />} />
    </Routes>
  );
};
