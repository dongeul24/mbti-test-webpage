import React from "react";
import { mbtiDescriptions } from "../utils/mbtiCalculator";

const TestResultItem = ({
  result,
  nickname,
  timestamp,
  visibility,
  isOwner,
  onDelete,
  onToggleVisibility,
}) => {
  const description = mbtiDescriptions[result] || "설명이 없습니다.";

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold text-blue-500 mb-2">결과: {result}</h3>
      <p className="text-gray-700">닉네임: {nickname}</p>
      <p className="text-gray-700 mb-4">설명: {description}</p>
      <p className="text-gray-500">
        작성일: {new Date(timestamp).toLocaleDateString()}
      </p>
      {isOwner && ( // 소유자만 버튼 표시
        <div className="flex mt-4 space-x-2">
          <button
            onClick={() =>{
              console.log(`Toggling visibility to: ${!visibility}`);
              onToggleVisibility(!visibility); // 공개/비공개 토글
            }} // 공개/비공개 토글
            className={`px-4 py-2 rounded-lg ${
              visibility ? "bg-green-500 text-white" : "bg-gray-500 text-white"
            }`}
          >
            {visibility ? "비공개" : "공개"}
          </button>
          <button
            onClick={onDelete}
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default TestResultItem;
