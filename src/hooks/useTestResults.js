import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getTestResults,
  createTestResult,
  deleteTestResult,
  updateTestResultVisibility,
} from "../api/testResults";

// 테스트 결과 조회
export const useFetchTestResults = () => {
  return useQuery({
    queryKey: ["testResults"],
    queryFn: getTestResults,
  });
};

// 테스트 결과 추가
export const useAddTestResult = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });
};

// 테스트 결과 삭제
export const useDeleteTestResult = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTestResult,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });
};

// 테스트 결과 공개/비공개 설정
export const useUpdateTestResultVisibility = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateTestResultVisibility,
    onSuccess: () => {
      queryClient.invalidateQueries(["testResults"]);
    },
  });
};
