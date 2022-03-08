import Link from 'next/link';
import styles from '../styles/Home.module.css';

const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 Page Not Found</h1>
      <p>The page you are looking for is not exist.</p>
      <Link href="/">
        <a>Back to Home</a>
      </Link>
    </div>
  );
};

export default NotFound;
