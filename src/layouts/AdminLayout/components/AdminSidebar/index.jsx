import { Link } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <aside
      style={{
        width: "220px",
        background: "#333",
        color: "#fff",
        padding: "20px",
      }}
    >
      <h3>Admin Menu</h3>
      <ul>
        <li>
          <Link to="/admin">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/users">Quản lý Users</Link>
        </li>
        <li>
          <Link to="/admin/settings">Cài đặt</Link>
        </li>
      </ul>
    </aside>
  );
}
