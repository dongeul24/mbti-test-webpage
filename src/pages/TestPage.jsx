import React, { useState } from "react";
import TestForm from "../components/TestForm";
import { calculateMBTI, mbtiDescriptions } from "../utils/mbtiCalculator";
import { createTestResult } from "../api/testResults";
import { useNavigate } from "react-router-dom";
import { useToastHandler } from "../hooks/useToastHandler";
import authStore from "../store/authStore";

const TestPage = () => {
  const [result, setResult] = useState(null);
  const { user } = authStore.getState(); // 현재 사용자 정보 가져오기
  const timestamp = new Date().toISOString(); // 현재 시간 추가
  const visibility = true; // 기본 공개 상태 설정

  const navigate = useNavigate();
  const { showError } = useToastHandler();

  const handleTestSubmit = async (submittedAnswers) => {
    const mbtiResult = calculateMBTI(submittedAnswers);

    try {
      await createTestResult({
        result: mbtiResult,
        nickname: user.nickname,
        userId: user?.userId, // userId 추가
        timestamp, // timestamp 추가
        visibility, // visibility 추가
      });
      setResult(mbtiResult); // 결과 저장
    } catch (error) {
      console.error("테스트 결과 저장 실패:", error.message);
      showError("결과 저장 중 오류가 발생했습니다.");
    }
  };

  const handleNavigateToResults = () => {
    navigate("/results");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full">
        {!result ? (
          <>
            <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
              MBTI 테스트
            </h1>
            <TestForm onSubmit={handleTestSubmit} />
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold text-center text-blue-500 mb-4">
              테스트 결과: {result}
            </h1>
            <p className="text-lg text-gray-700 mb-6 text-center">
              {mbtiDescriptions[result]}
            </p>
            <button
              onClick={handleNavigateToResults}
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
            >
              결과 페이지로 이동하기
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default TestPage;
