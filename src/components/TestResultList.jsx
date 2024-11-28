import React from "react";
import {
  useFetchTestResults,
  useDeleteTestResult,
  useUpdateTestResultVisibility,
} from "../hooks/useTestResults";
import authStore from "../store/authStore";
import TestResultItem from "./TestResultItem";

const TestResultList = () => {
  const { user } = authStore.getState(); // 현재 로그인된 유저 정보 가져오기
  const { data: results, isPending, error } = useFetchTestResults();

  const deleteTestResult = useDeleteTestResult();
  const updateVisibility = useUpdateTestResultVisibility();

  if (isPending) return <div>로딩 중...</div>;
  if (error) return <div>에러 발생: {error.message}</div>;

  return (
    <div className="grid grid-cols-1 gap-6 p-6">
      {results?.map((result) => {
        // 공개된 결과 또는 작성자가 본인의 결과일 경우만 렌더링
        if (result.visibility || result.userId === user?.userId) {
          return (
            <TestResultItem
              key={result.id}
              result={result.result}
              nickname={result.nickname}
              timestamp={result.timestamp}
              visibility={result.visibility}
              isOwner={result.userId === user?.userId} // 버튼 표시 조건
              onDelete={() => deleteTestResult.mutate(result.id)}
              onToggleVisibility={(newVisibility) =>
                updateVisibility.mutate({
                  id: result.id,
                  visibility: newVisibility,
                })
              }
            />
          );
        }
        return null; // 조건에 맞지 않으면 렌더링하지 않음
      })}
    </div>
  );
};

export default TestResultList;
