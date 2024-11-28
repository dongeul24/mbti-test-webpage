import testResultInstance from "./testResultInstance";

export const getTestResults = async () => {
  const response = await testResultInstance.get("/");
  return response.data;
};

export const createTestResult = async (resultData) => {

  const response = await testResultInstance.post(
    "/",
    resultData
  );

  return response.data;
};

export const deleteTestResult = async (id) => {
  const response = await testResultInstance.delete(`/${id}`);
  return response.data;
};

export const updateTestResultVisibility = async ({ id, visibility }) => {
  try {
    const response = await testResultInstance.patch(`/${id}`, { visibility });
    return response.data;
  } catch (error) {
    console.error("왜 에러가 생기니..:", error); // 에러 로그 추가
    throw error; // 에러를 다시 던져 React Query에서 처리
  }
};
