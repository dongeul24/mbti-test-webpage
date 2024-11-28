import React, { useState, useEffect } from "react";
import { updateProfile, getUserProfile } from "../api/auth"; // API 함수 import
import { useToastHandler } from "../hooks/useToastHandler";

const Profile = () => {
  const [user, setUser] = useState(null); // 사용자 정보 상태
  const [nickname, setNickname] = useState(""); // 닉네임 상태
  const { showSuccess, showError} = useToastHandler();

  // 사용자 정보 초기화
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const data = await getUserProfile();
        setUser(data);
        setNickname(data.nickname || "");
      } catch (error) {
        console.error("사용자 정보를 가져오는 중 오류 발생:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("nickname", nickname);
    try {
      const updatedData = await updateProfile(formData); // API 호출
      console.log("프로필 업데이트 성공:", updatedData);
      showSuccess("프로필 닉네임을 변경했습니다.");
      setUser((prevUser) => ({
        ...prevUser,
        nickname: updatedData.nickname,
      })); // 닉네임 상태 업데이트
    } catch (error) {
      showError("의도치 않은 에러가 발생했습니다. 재로그인 후 다시 시도해보세요.")
      console.error("프로필 업데이트 실패:", error.message);
    }
  };

  return (
    <div className="container mx-auto max-w-md mt-16">
      <h2 className="text-2xl font-bold text-center mb-6">프로필 수정</h2>

      <form onSubmit={handleUpdateProfile} className="space-y-4">
        {/* 이메일 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            아이디(이메일)
          </label>
          <div className="w-full p-3 rounded-lg bg-gray-400">
            {user?.id || "이메일 정보 없음"}
          </div>
        </div>

        {/* 닉네임 */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            닉네임
          </label>
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력하세요"
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg transition"
        >
          수정하기
        </button>
      </form>
    </div>
  );
};

export default Profile;
