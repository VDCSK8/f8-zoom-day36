import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/privacy">Privacy</Link>

        {/* Auth */}
        <Link to="/login">Login</Link>

        {/* Admin */}
        <Link to="/admin">Admin</Link>
      </nav>
    </header>
  );
}
