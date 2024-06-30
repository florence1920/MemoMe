import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const header = () => {
  return (
    <header className={styles.headWrap}>
      <Link to="/" className={styles.logo}>
        MemoMe
      </Link>
      <div className={styles.nav}>
        <Link to="/">List</Link>
        <Link to="/search">Search</Link>
      </div>
    </header>
  );
};

export default header;
