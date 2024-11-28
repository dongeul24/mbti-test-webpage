import React from "react";
import { useNavigate } from "react-router-dom";
import { useToastHandler } from "../hooks/useToastHandler";
import autoStore from "../store/authStore";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = autoStore();
  const { showInfo } = useToastHandler();

  const handleButtonClick = () => {
    if (!isAuthenticated) {
      // 로그인되지 않은 경우 알림 표시
      showInfo("테스트를 하기 위해 로그인이 필요합니다.");
    }
    navigate("/test");
  };

  return (
    <div className="container mx-auto pt-6 px-16 flex flex-col items-center justify-center text-white gap-5">
      <h1 className="text-4xl font-bold mb-4 mt-5">무료 성격 테스트</h1>
      <p className="text-lg mb-8 text-center">
        자신의 성격 유형을 확인할 수 있도록 솔직하게 답변해 주세요.
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="font-bold text-xl mb-2">성격 유형 검사</h2>
          <p>
            자신의 성격 유형을 파악하고 삶의 여러 영역에서 어떤 영향을 미치는지
            알아보세요.
          </p>
        </div>
        <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="font-bold text-xl mb-2">성격 유형 이해</h2>
          <p>
            다른 사람들이 어떻게 행동하는지 이해하는 데 도움을 줄 수 있습니다.
          </p>
        </div>
        <div className="bg-white text-gray-800 p-4 rounded-lg shadow-md">
          <h2 className="font-bold text-xl mb-2">팀 평가</h2>
          <p>
            팀 내에서 자신과 동료들의 성격을 이해하고 협력할 수 있는 방법을
            배워보세요.
          </p>
        </div>
      </div>
      <button
        className="px-16 py-3 border-2 mt-5 bg-indigo-900 text-lg font-semibold text-white rounded-full hover:bg-indigo-700 transition-colors"
        onClick={handleButtonClick}
      >
        테스트 시작
      </button>
    </div>
  );
};

export default Home;
