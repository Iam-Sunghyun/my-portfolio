# 사용 도구

- Nextjs 14
- React 18
- TailwindCSS
- TypeScript
- Framer Motion, AceternityUI, shadcnUI (UI, animation) <br>
  aceternityUI, shadcnUI는 materialUI와 같은 라이브러리와 달리 전체 컴포넌트를 다운로드할 필요 없이 사용하고자 하는 컴포넌트만 copy하여 구현할 수 있으므로 가볍다. 또한 추가로 tailwindCSS 클래스를 전달할 수도 있어서 유연하다.
- Hostinger (hosting)

<!-- shadcnUI + next-themes를 이용한 다크모드 -->

# 기능

framer motion, aceternityUI를 이용한 랜딩 페이지
프로젝트 버튼 - conic-gradient 배경을 애니메이션으로 무한 회전시켜 테두리 빛나는 표현 구현
다크 모드(Context API) -
ThemeProvider 래퍼 컴포넌트로 Context 코드 분리하여 관리.
플로팅 네비게이션바 -
position: stikcy, z-index로 z축 상위에 배치 backdrop-filter: blur로 투명함 구현, Nextjs Link 컴포넌트 id 값으로 특정 요소로 링크 구현
반응형 - 미디어 쿼리 및 트랜지션으로 유연한 페이지 구현
flex, grid

추가 하고싶은 기능-

상단으로 돌아가기 플롯팅 버튼 - ○
네비게이션바 fixed, sticky 적용 시 버튼 클릭 안되고 투명해지는 문제 - ○
화면 크기 줄였을 때 window.scrollBy 메서드 값이 제대로 적용되지 않음-> 왜??
플로팅 네비게이션 바, 스크롤 내리면 사라지고 업하면 생김 X
지정된 스크롤 위치로 라우팅? navbar 버튼누르면 특정 위치로 스크롤 O

<!-- ES7+ React/Redux/React-Native 플러그인 단축 명령어
https://github.com/r5n-labs/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md -->
