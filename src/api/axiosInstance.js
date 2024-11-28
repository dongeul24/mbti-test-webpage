import axios from "axios";

const API_URL = "https://moneyfulpublicpolicy.co.kr";

// Axios Instance 생성
const axiosInstance = axios.create({
  baseURL: API_URL, // 모든 요청의 기본 경로
  timeout: 20000, // 요청 제한 시간 설정 (20초)
  headers: {
    "Content-Type": "application/json", // 공통 헤더 설정
  },
});

// 요청 인터셉터
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // Access Token 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 헤더에 토큰 추가
    }
    return config;
  },
  (error) => Promise.reject(error) // 요청 에러 처리
);

// 응답 인터셉터 설정
axiosInstance.interceptors.response.use(
  (response) => response, // 성공적인 응답 그대로 반환
  (error) => {
    if (error.response?.status === 401) {
      console.error("401 Unauthorized: 인증 실패.");
      alert("인증이 만료되었습니다. 다시 로그인해주세요.");
      localStorage.removeItem("accessToken"); // 토큰 제거
      window.location.href = "/login"; // 로그인 페이지로 이동
    }
    return Promise.reject(error); // 다른 에러 그대로 반환
  }
);

export default axiosInstance;
