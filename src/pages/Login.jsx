import React from "react";
import AuthForm from "../components/AuthForm";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (formData) => {
    // console.log(formData)
    login(formData, {
      onSuccess: () => {
        navigate("/");
      },
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        로그인
      </h2>
      <AuthForm mode="login" onSubmit={handleLogin} />
      <p className="text-sm text-gray-600 mt-4 text-center">
        계정이 없으신가요?{" "}
        <Link
          to="/signup"
          className="text-blue-500 font-medium hover:underline"
        >
          회원가입
        </Link>
      </p>
    </div>
  );
};

export default Login;
