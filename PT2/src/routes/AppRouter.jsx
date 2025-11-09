// src/routes/AppRouter.jsx
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginForm from "../components/LoginForm";
import DashboardPage from "../pages/DashboardPage";
import UserListPage from "../pages/UserListPage";
import { useAuth } from "../contexts/AuthContext";

function AppRouter() {
  const { state } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/home" element={state.user ? <DashboardPage /> : <Navigate to="/login" />} />
        <Route path="/users" element={state.user ? <UserListPage /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
