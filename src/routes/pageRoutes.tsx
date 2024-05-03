import { Route, Routes } from "react-router-dom";
import Shoes from "../pages/shoes";
import Main from "../pages/main";
import Three from "../pages/three";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="shoes" element={<Shoes />} />
      <Route path="three" element={<Three />} />
    </Routes>
  );
};
