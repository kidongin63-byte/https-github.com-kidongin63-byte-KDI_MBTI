# KDI MBTI 패키징 및 배포 가이드 (Packaging & Deployment Guide)

이 문서는 Vite React + Tailwind CSS 기반의 **KDI 듀얼 자아 분석 아카이브** 웹 앱을 PWA(Progressive Web App)로 배포하고, Capacitor를 이용하여 Android 및 iOS 네이티브 앱으로 패키징하는 방법에 대해 설명합니다.

---

## 1. 개발 및 빌드 환경 기본 명령어

### 1) 의존성 패키지 설치
```bash
npm install
```

### 2) 로컬 개발 서버 실행
Vite의 고속 HMR 개발 서버를 가동하며, 로컬 브라우저에서 즉시 테스트할 수 있습니다.
```bash
npm run dev
```

### 3) 웹 프로덕션 빌드
`dist/` 폴더에 최적화된 웹 애셋(HTML, CSS, JS, PWA 리소스 등)을 컴파일합니다.
```bash
npm run build
```

### 4) 빌드 결과물 미리보기
로컬 환경에서 프로덕션 빌드 결과물이 잘 돌아가는지 가상 서버로 띄워 검증합니다.
```bash
npm run preview
```

---

## 2. 웹 PWA (Progressive Web App) 배포

PWA 설정을 통해 모바일 및 데스크톱 웹 브라우저에서 '홈 화면에 앱 설치' 버튼이 활성화되어 실제 앱처럼 동작합니다.

### PWA 구성 파일 목록
- **아이콘 (`public/icon.svg`):** 가볍고 변형 없는 고성능 SVG 벡터 아트를 제공합니다.
- **앱 선언 매니페스트 (`public/manifest.json`):** 설치 팝업 디자인, 테마 색상, 실행 규칙을 지정합니다.
- **서비스 워커 (`public/sw.js`):** 핵심 정적 리소스(HTML, CSS, JS)를 로컬 캐시에 저장하여 네트워크 오프라인 상태에서도 기기 로컬 데이터베이스(`localStorage`)와 함께 고속 기동되도록 도와줍니다.

### 배포 방법
1. `npm run build`를 실행하여 정적 파일들을 빌드합니다.
2. `dist/` 폴더에 빌드된 산출물들을 Firebase Hosting, Netlify, Vercel, 혹은 AWS S3 등의 정적 파일 호스팅 서버에 업로드합니다.
3. **⚠️ 주의:** SSL(HTTPS) 인증서가 있어야 안전한 모바일 PWA 배포 및 서비스 워커 작동이 가능하므로 반드시 HTTPS 프로토콜 상에서 배포해 주세요.

---

## 3. Capacitor를 이용한 Android 네이티브 앱 패키징

Capacitor는 Vite 웹 앱 빌드 본체(`dist/`)를 네이티브 웹뷰로 래핑하여 APK/AAB 파일을 빌드할 수 있는 통로를 제공합니다.

### 1) 안드로이드 프로젝트 갱신 및 리소스 동기화
새로운 코드를 수정하거나 웹 빌드를 새로 할 때마다 Capacitor와 동기화를 수행해야 합니다.
```bash
npm run build
npx cap sync
```

### 2) Android Studio 기동
안드로이드 개발 도구(Android Studio)에서 프로젝트를 엽니다. 이 명령어는 자동으로 Android Studio를 실행해 줍니다.
```bash
npx cap open android
```
*(또는 Android Studio를 수동 실행하신 후, 프로젝트 폴더 내 `android/` 디렉터리를 가져오셔도 됩니다.)*

### 3) Android 빌드 및 APK/AAB 파일 추출
Android Studio 내부에서 다음 두 단계를 거쳐 추출할 수 있습니다.
1. 상단 메뉴 `Build` -> `Make Project` 순차 진행.
2. 테스트용 APK가 필요할 시 : `Build` -> `Build Bundle(s) / APK(s)` -> `Build APK(s)` 선택.
3. 구글 플레이 매장 배포 시 : `Build` -> `Generate Signed Bundle / APK...` 선택 후 출시 키(Keystore)로 서명된 `.aab` 파일을 제작합니다.

---

## 4. Capacitor를 이용한 iOS 네이티브 앱 패키징

iOS 네이티브 포팅을 위해서는 macOS 운영체제와 Xcode 개발 소프트웨어가 기본적으로 구비되어 있어야 합니다.

### 1) iOS 프로젝트 갱신 및 리소스 동기화
```bash
npm run build
npx cap sync
```

### 2) Xcode 기동
Xcode 편집 프로그램을 기동하여 빌드 타깃을 정의합니다. 다음 명령어를 실행하면 Xcode 프로젝트 파일이 열립니다.
```bash
npx cap open ios
```
*(또는 macOS Xcode 실행 후, 프로젝트 폴더 내 `ios/App` 디렉터리의 `.xcworkspace` 파일을 열면 됩니다.)*

### 3) iOS 폰 시뮬레이터 및 실기기 빌드
1. Xcode 상단의 디바이스 선택 런칭바에서 적합한 iPhone 시뮬레이터나 연결된 물리 실기기를 선택합니다.
2. 플레이(▶) 버튼을 클릭하여 컴파일 및 런칭을 완료합니다.
3. 앱 스토어 출시를 위해서는 Xcode 내 `Signing & Capabilities` 탭에서 유효한 Apple Developer ID 계정을 기재(Team 설정)하고 인증서 프로파일을 매핑한 뒤, 메뉴의 `Product` -> `Archive` 단계를 수행하여 App Store Connect로 배포 전송을 완료합니다.

---

## 5. 문제 해결 (Troubleshooting)

- **Q. 소스 코드를 바꿨는데 에물레이터나 휴대폰 앱에 반영이 안 됩니다.**
  - A. Capacitor 환경에서는 웹 소스 코드가 수정되면 반드시 `npm run build`를 통해 `dist/` 폴더를 새로 빌드한 후, `npx cap sync`를 통해 기기로 이전 빌드 자산을 동기화해 주어야 변경된 뷰가 정상적으로 적용됩니다.
- **Q. 오프라인이나 앱 로컬 로그인 시 기록이 자꾸 소실되는 기분이 듭니다.**
  - A. 기기 내부 데이터베이스로 HTML5 `localStorage` 기술을 설계하였습니다. 브라우저 캐시 정밀 모드 해제 시 보존됩니다. 물리 네이티브 영속성이 더욱 강하게 필요하면 향후 `@capacitor/preferences` 라이브러리로 마이그레이션하여 SQLite 기기 네이티브 스토리지를 도입할 수 있습니다.
