import Header from "../components/Header";
import AuthSidebar from "./components/AuthSidebar";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <AuthSidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Outlet />
        </div>
      </div>
    </>
  );
}
