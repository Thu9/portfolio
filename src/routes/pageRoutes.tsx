import { Outlet, Route, Routes } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Main from '../pages/main';
import Shoes from '../pages/shoes';

const MainLayout = () => {
  return (
    <>
      {/* <NavBar /> */}
      <Outlet />
    </>
  );
};
export const PageRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Main />} />
        <Route path="shoes" element={<Shoes />} />
      </Route>
    </Routes>
  );
};
