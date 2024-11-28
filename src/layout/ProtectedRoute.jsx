import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth();

  // 비로그인 상태일 경우 로그인 페이지로 리디렉션
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
  // 로그인 상태일 경우 자식 컴포넌트를 렌더링
};

export default ProtectedRoute;
