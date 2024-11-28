import React from "react";
import TestResultList from "../components/TestResultList";

const Results = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 pt-20 ">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-4xl w-full">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-6">
          테스트 결과 목록
        </h1>
        <p className="text-center text-gray-700 mb-4">
          아래에서 자신과 다른 사용자들의 테스트 결과를 확인하세요.
        </p>
        <TestResultList />
      </div>
    </div>
  );
};

export default Results;
