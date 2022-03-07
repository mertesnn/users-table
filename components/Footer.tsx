import { FaGithub } from 'react-icons/fa';
import styles from '../styles/Home.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <FaGithub className={styles.socialIcons} />
    </div>
  );
};

export default Footer;
