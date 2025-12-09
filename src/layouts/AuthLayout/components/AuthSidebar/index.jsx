import { Link } from "react-router-dom";

export default function AuthSidebar() {
  return (
    <aside style={{ width: "200px", background: "#f5f5f5", padding: "20px" }}>
      <h3>Auth Menu</h3>
      <ul>
        <li><Link to="/login">Đăng nhập</Link></li>
        <li><Link to="/register">Đăng ký</Link></li>
        <li><a href="#">Quên mật khẩu</a></li>
      </ul>
    </aside>
  );
}
