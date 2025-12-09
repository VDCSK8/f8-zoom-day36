import AdminHeader from "./components/AdminHeader";
import AdminSidebar from "./components/AdminSidebar";
import AdminFooter from "./components/AdminFooter";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div>
      <AdminHeader />

      <div style={{ display: "flex" }}>
        <AdminSidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Outlet />
        </div>
      </div>

      <AdminFooter />
    </div>
  );
}
