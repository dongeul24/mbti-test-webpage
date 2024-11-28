# MBTI 테스트 사이트

![MBTI 사이트:데스크탑](https://github.com/user-attachments/assets/c7e25662-49b9-49c4-ae31-fa2402bd9713)
![MBTI 사이트:테블릿](https://github.com/user-attachments/assets/f7fdf0f7-94a8-4e74-97a7-62024a54441d)
![MBTI 사이트: 모바일](https://github.com/user-attachments/assets/2d5b2148-6c51-4b85-a1a8-a4ec45767713)


이 프로젝트는 사용자가 MBTI 성격 유형을 테스트하고 결과를 저장하거나, 다른 사람의 결과를 볼 수 있는 기능을 제공합니다. 사용자 인증, 데이터 관리, API 통신 등 다양한 기능이 구현되어 있으며, 간단하고 직관적인 UI를 제공합니다.

## 주요 기능

+ MBTI 테스트
+ 사용자 인증 (회원가입, 로그인, 로그아웃)
+ 테스트 결과 저장 및 공개/비공개 관리
+ 다른 사용자 결과 보기 (공개된 결과만)
+ API를 통해 데이터 저장 및 관리
+ (반응형) 

### 페이지별 설명

#### 1. **Home (홈 페이지)**
- **경로**: `/`
- **설명**:
  - MBTI 테스트 사이트 소개.
  - 테스트 시작 버튼 제공.
  - 비로그인 사용자는 알림과 함께 로그인 페이지로 리디렉션.

---

#### 2. **Login (로그인 페이지)**
- **경로**: `/login`
- **설명**:
  - 사용자가 계정으로 로그인할 수 있는 페이지.
  - 로그인 성공 시 홈 페이지로 리디렉션.
- **주요 컴포넌트**:
  - `AuthForm`: 로그인/회원가입 폼 공용 컴포넌트.

---

#### 3. **Signup (회원가입 페이지)**
- **경로**: `/signup`
- **설명**:
  - 새 계정을 생성할 수 있는 페이지.
  - 회원가입 성공 시 로그인 페이지로 리디렉션.
- **주요 컴포넌트**:
  - `AuthForm`: 로그인/회원가입 폼 공용 컴포넌트.

---

#### 4. **Test (MBTI 테스트 페이지)**
- **경로**: `/test`
- **설명**:
  - MBTI 질문을 응답하여 결과를 계산.
  - 테스트 결과를 저장 (닉네임, 결과, 공개 여부 포함).
  - 저장된 결과는 다른 사용자와 공유 가능.
- **주요 컴포넌트**:
  - `TestForm`: 테스트 질문 컴포넌트.
  - `calculateMBTI`: 사용자 답변을 바탕으로 MBTI 결과 계산.

---

#### 5. **Results (결과 목록 페이지)**
- **경로**: `/results`
- **설명**:
  - 저장된 MBTI 결과 목록을 보여줌.
  - 본인 작성 결과는 공개/비공개 설정 가능.
  - 본인 작성 결과만 삭제 가능.
  - 공개된 결과는 모든 사용자에게 보임.
- **주요 컴포넌트**:
  - `TestResultList`: 결과 목록 컴포넌트.
  - `TestResultItem`: 개별 결과 컴포넌트.

---

#### 6. **Profile (프로필 수정 페이지)**
- **경로**: `/profile`
- **설명**:
  - 사용자 닉네임 수정 가능.
  - 수정 시 API를 통해 사용자 정보 업데이트.
- **주요 컴포넌트**:
  - `updateProfile`: API 호출로 사용자 정보 업데이트.



### toastify

**유저 알림** 기능에서 깔끔하고 직관적인 UI를 제공하기 위해 **toastify**라이브러리를 적용했습니다.

## 📚️ 기술스택

### ✔️ Language

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=black)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)

### ✔️ Version Control

![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)

### ✔️ IDE

![VSCode](https://img.shields.io/badge/Visual_Studio_Code-0078D4?style=for-the-badge&logo=visual%20studio%20code&logoColor=white)

### ✔️ Framework / Library

    "@tanstack/react-query": "^5.61.5",
    "autoprefixer": "^10.4.20",
    "axios": "^1.7.8",
    "json-server": "^1.0.0-beta.3",
    "postcss": "^8.4.49",
    "react": "^18.3.1",
    "react-dom": "^18.3.1",
    "react-router-dom": "^7.0.1",
    "react-toastify": "^10.0.6",
    "tailwindcss": "^3.4.15",
    "zustand": "^5.0.1"

### ✔️ Deploy
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![mbti](https://mbti-test-webpage-2x1el6k7z-dongeuls-projects.vercel.app/)


## 프로젝트 파일 구조

```
mbti-test
├── src
│   ├── App.jsx
│   ├── main.jsx
│   ├── api
|   |   ├── auth.js
|   |   ├── axiosInstance.js
|   |   ├── testResultInstance.js
|   |   └── testResults.js
│   ├── assets
│   ├── components
│   │   ├── AuthForm
│   │   ├── TestForm
│   │   ├── TestResultItem
│   │   └── TestResultList
│   ├── data
│   │   └── questions.js
│   ├── hooks
│   │   ├── useAuth.js
│   │   ├── useTestResults.js
│   │   └── useToastHandler.js
│   ├── layout
│   │   ├── Background
│   │   ├── Header
│   │   ├── Layout
│   │   └── ProtectedRouter
│   ├── pages
│   │   ├── Home
│   │   ├── Login
│   │   ├── Profile
│   │   ├── Results
│   │   ├── Signup
│   │   └── TestPage
│   ├── redux
│   │   ├── config
│   │   └── slices
│   ├── shared
│   ├── store
│   │   └── ...
│   └── utils
└── public
    ├── fonts
    └── images

```

