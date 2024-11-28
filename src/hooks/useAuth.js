import { useMutation } from "@tanstack/react-query";
import { register, login } from "../api/auth";
import { useToastHandler } from "../hooks/useToastHandler";
import authStore from "../store/authStore";

const useAuth = () => {
  const { showSuccess, showError } = useToastHandler();
  const { login: setLogin, logout: setLogout, isAuthenticated } = authStore();

  // 회원가입 Mutation
  const registerMutation = useMutation({
    mutationFn: register,
    onSuccess: () => {
      showSuccess("회원가입이 성공적으로 완료되었습니다.");
    },
    onError: (error) => {
      const message =
        error.response?.status === 409
          ? "이미 존재하는 아이디입니다."
          : error.response?.data?.message || "회원가입 중 오류 발생";
      showError(message);
    },
  });

  // 로그인 Mutation
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      setLogin(data);
      showSuccess("로그인에 성공했습니다.");
    },
    onError: () => {
      showError("로그인 실패! 아이디와 비밀번호를 확인해주세요.");
    },
  });

  // 로그아웃
  const logout = () => {
    setLogout();
    showSuccess("로그아웃 되었습니다.");
  };

  return {
    isAuthenticated,
    register: registerMutation.mutate,
    login: loginMutation.mutate,
    logout,
  };
};

export default useAuth;
