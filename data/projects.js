import musicPlayerImage from "/app/public/music_player.png";
import portFolioWebsiteImage from "/app/public/portfolio-website.png";

export const projects = [
  {
    name: "Music player",
    image: musicPlayerImage,
    skills: ["React", "Context-API", "css-modules", "Audio Web API", "canvas API"],
    description:
      // "오디오 기기 기본 기능",
      // // "- 재생, 정지, 볼륨 조절, 넘기기, 반복 재생 및 셔플",
      // "오디오 비주얼라이저",
      // "오디오 이퀄라이저",
      // // "- 특정 주파수 증폭, 좌우 밸런스 변경, 속도 변경",
      // "음악 추가(input, 드래그앤 드롭), 삭제",
      // "음악 목록 출력",
      // "커스텀 프로그레스바",
      // "반응형",
      "오디오 비주얼라이저 동적 음악 플레이어",

    link: "projects/music-player",
  },
  {
    name: "포트폴리오 웹 사이트",
    image: portFolioWebsiteImage,
    skills: [
      "Nextjs 14",
      "Typescript",
      "Context-API",
      "LocalStorage",
      "tailwindCSS",
      "AceternityUI",
      "framer-motion",
    ],
    description:
      // "다크모드", "랜딩 페이지", "플로팅 네비게이션바", "반응형"
      "애니메이션을 추가한 포트폴리오 웹사이트",

    link: "projects/my-portfolio",
  },
];
