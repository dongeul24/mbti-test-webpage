import axios from "axios";

const API_URL = "https://calico-vivacious-spike.glitch.me/testResults";

// testResult 전용 axios 인스턴스 생성
const testResultInstance = axios.create({
  baseURL: API_URL, // JSON Server 엔드포인트
  timeout: 5000, // 요청 제한 시간 (5초)
});

// 요청 인터셉터 설정
testResultInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken"); // 토큰 가져오기
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // 헤더에 토큰 추가
    }
    return config;
  },
  (error) => Promise.reject(error) // 요청 에러 처리
);

// 응답 인터셉터 설정
testResultInstance.interceptors.response.use(
  (response) => response, // 성공적인 응답 그대로 반환
  (error) => {
    if (error.response?.status === 401) {
      console.error("401 오류: 인증 실패.");
      alert("로그인이 필요합니다. 다시 로그인해주세요."); // 간단한 알림 표시
      localStorage.removeItem("accessToken"); // 토큰 제거
      window.location.href = "/login"; // 로그인 페이지로 이동
    }
    return Promise.reject(error); // 다른 에러 그대로 반환
  }
);

export default testResultInstance;
