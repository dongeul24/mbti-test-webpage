import { create } from "zustand";

// localStorage 유틸리티 함수
const storage = {
  getItem: (key) => JSON.parse(localStorage.getItem(key)),
  setItem: (key, value) => localStorage.setItem(key, JSON.stringify(value)),
  removeItem: (key) => localStorage.removeItem(key),
};

const authStore = create((set) => ({
  isAuthenticated: !!localStorage.getItem("accessToken"), // 초기 상태 확인
  user: storage.getItem("user") || null, // 초기 사용자 정보 확인

  login: (user) => {
    // 로컬 스토리지에 토큰 및 사용자 정보 저장
    localStorage.setItem("accessToken", user.accessToken);
    storage.setItem("user", user);
    set({ isAuthenticated: true, user }); // 상태 업데이트
  },

  logout: () => {
    // 저장된 인증 정보 제거
    ["accessToken", "user"].forEach(storage.removeItem);
    set({ isAuthenticated: false, user: null }); // 상태 초기화
  },
}));

export default authStore;