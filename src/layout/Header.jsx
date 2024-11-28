import React, { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // 모바일 환경일때는 메뉴 버튼이 헤더에 생기도록 체크해주기 위한 상태 관리.(모바일 환경에서는 햄버거 버튼을 누르면 드롭 다운형식으로 옵션들 보이게함. )


  const { isAuthenticated, logout } = useAuth();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* 로고 */}
        <Link to="/" className="text-2xl font-bold flex items-center">
          <img src="/logo.png" alt="Logo" className="w-30  h-8 mr-2" />
        </Link>

        {/* 데스크톱 사이즈일 때 */}
        <nav className="hidden md:flex space-x-6 items-center">
          {isAuthenticated ? (
            <>
              <Link to="/profile" className="hover:underline">
                프로필 수정
              </Link>
              <Link to="/test" className="hover:underline">
                테스트
              </Link>
              <Link to="/results" className="hover:underline">
                결과 보기
              </Link>
              <button
                onClick={logout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                로그아웃
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
            >
              로그인
            </Link>
          )}
        </nav>

        {/* 햄버거 아이콘 --> 드롭다운 메뉴 버튼으로 쓰일 예정*/}
        <button
          // md: hidden은 화면 너비가 768px이상일 때 버튼 숨김, 즉, 모바일 환경에서만 보임
          className="block md:hidden text-white"
          onClick={toggleMenu}
          aria-label="메뉴 버튼"
          // 새롭게 알게된 것: aria-label은 햄버거 아이콘 처럼 글자로 그 역할이 적혀 있지 않는 아이콘들에게 주로 붙는 속성인데,
          // 스크린 리더(화면 읽기 장치)를 사용하는 사용자들에게 요소의 정체나 역할을 알려주기 위해 사용함.
        >
          {/* 해당 아이콘은 heroicons에서 가져옴 */}
          <svg
            xmlns="http://www.w3.org/2000/svg" //SVG 요소의 XML 네임스페이그 선언
            className="h-6 w-6"
            fill="none" //아이콘 내부 비우기
            stroke="currentColor" // 텍스트색상은 현재 사용되는 색상과 같게(화이트)
          >
            <path
              strokeLinecap="round" //선의 끝모양 둥글게
              strokeLinejoin="round" // 선과 선 만나는 모서리 둥글게
              strokeWidth={2} //선 두께
              d="M4 6h16M4 12h16m-7 6h7" // svg 경로 데이터
            />
          </svg>

        </button>
      </div>

      {/* 모바일 사이즈 일때 */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 py-3">
          <nav className="flex flex-col items-center space-y-3">
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="hover:underline">
                  프로필 수정
                </Link>
                <Link to="/test" className="hover:underline">
                  테스트
                </Link>
                <Link to="/results" className="hover:underline">
                  결과 보기
                </Link>
                <button
                  onClick={logout}
                  className="bg-red-500 hover:bg-red-600 text-white px-52 py-2 rounded-lg"
                >
                  로그아웃
                </button>
              </>
            ) : (
              <Link
                to="/login"
                className="bg-green-500 hover:bg-green-600 text-white px-52 py-2 rounded-lg"
              >
                로그인
              </Link>
            )}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
