import Footer from './Footer';
import Navbar from './Navbar';
import styles from '../styles/Home.module.css';

const Layout = ({ children }: Children) => {
  return (
    <>
      <Navbar />
      <div className={styles.container}>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
