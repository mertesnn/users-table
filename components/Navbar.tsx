import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <h2>Users List</h2>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/users">
        <a>All Users</a>
      </Link>
      <Link href="/table">
        <a>Table</a>
      </Link>
    </nav>
  );
};

export default Navbar;
