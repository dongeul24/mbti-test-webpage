import React from "react";
import AuthForm from "../components/AuthForm";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Signup = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSignup = (formData) => {
    register(formData, {
      onSuccess: () => {
        navigate("/login");
      },
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        회원가입
      </h2>
      <AuthForm mode="signup" onSubmit={handleSignup} />
      <p className="text-sm text-gray-600 mt-4 text-center">
        이미 계정이 있으신가요?{" "}
        <Link to="/login" className="text-blue-500 font-medium hover:underline">
          로그인
        </Link>
      </p>
    </div>
  );
};

export default Signup;
