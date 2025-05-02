/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // remotePatterns: [
    //   {
    //     // 기술 스택 뱃지(아이콘) 이미지 도메인
    //     protocol: "https",
    //     hostname: "img.shields.io",
    //     port: "", // 보통은 생략
    //     pathname: "/**", // 모든 경로 허용
    //   },
    // ],

    // 기본 이미지 최적화 API를 사용하여 SVG 이미지를 제공해야 하는 경우 true로 설정
    dangerouslyAllowSVG: true,
  },
};

export default nextConfig;
