import { Routes, Route } from "react-router-dom";

// Layouts
import DefaultLayout from "../../layouts/DefaultLayout";
import AuthLayout from "../../layouts/AuthLayout";
import AdminLayout from "../../layouts/AdminLayout";

// Pages
import Home from "../../pages/Home";
import About from "../../pages/About";
import Posts from "../../pages/Posts";
import PostDetail from "../../pages/PostDetail";
import Contact from "../../pages/Contact";
import Privacy from "../../pages/Privacy";

import Login from "../../pages/Login";
import Register from "../../pages/Register";

import Dashboard from "../../pages/Dashboard";
import Users from "../../pages/Users";
import Settings from "../../pages/Settings";

import NotFound from "../../pages/NotFound";

export default function AppRoutes() {
  return (
    <Routes>
      {/* DEFAULT LAYOUT */}
      <Route element={<DefaultLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="posts" element={<Posts />} />
        <Route path="posts/:id" element={<PostDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>

      {/* AUTH LAYOUT */}
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>

      {/* ADMIN LAYOUT */}
      <Route element={<AdminLayout />}>
        <Route path="admin" element={<Dashboard />} />
        <Route path="admin/users" element={<Users />} />
        <Route path="admin/settings" element={<Settings />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
