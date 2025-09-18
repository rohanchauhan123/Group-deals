import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';

const Layout = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Outlet />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;