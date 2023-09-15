import { Outlet, useLocation } from 'react-router-dom';
import smoothscroll from 'smoothscroll-polyfill';
import ScrollToTop from './components/Common/ScrollToTop';
import './styles/app.scss';

smoothscroll.polyfill();

const AppLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
};

export default AppLayout;
