import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }: Children) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
