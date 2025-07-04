import Link from "next/link";
import { SiGithub } from "react-icons/si";

function Page() {
  return (
    <div className="flex flex-col items-center gap-10 pt-24">
      <h1>포트폴리오 웹사이트</h1>
      <video className="border w-[60rem]" src="" />
      <div className="flex flex-col gap-2">
        <Link
          className="hover:text-blue-500"
          href="https://my-portfolio-one-tau-38.vercel.app//"
          target="_blank"
        >
          <span>🔗 배포 링크</span>
        </Link>
        <Link
          className="hover:text-blue-500 flex items-center gap-2 mx-auto"
          href="https://github.com/Iam-Sunghyun/my-music-player"
          target="_blank"
        >
          <SiGithub className="text-2xl" />
          <span>깃허브 링크</span>
        </Link>
      </div>
      <div className="flex flex-col max-w-[55rem] gap-16 mt-16">
        <div>
          <h2>📝 사용 기술</h2>
          <br />
          <ul className="leading-8 tracking-wide">
            <li>Nextjs</li>
            <li>typescript</li>
            <li>tailwindCSS</li>
            <li>context API</li>
            <li>aceternityUI</li>
            <li>framer-motion</li>
          </ul>
        </div>

        <div>
          <h2>🗓️ 개발 기간</h2>
          <br />
          <span>1인 개발, 약 1주</span>
        </div>
        <div>
          <h2>🔎 동기 및 효과</h2>
          <br />
          <p className="sm:pl-[2rem]  leading-9">개인 포트폴리오 웹사이트입니다.</p>
        </div>
      </div>
      <br />

      <div className="flex flex-col items-center gap-10 leading-8 max-w-[65rem]">
        <div>
          <h2>💡 기능 </h2>
          <ul className="ul-li-style leading-9 max-w-[40rem] ">
            <li>다크모드</li>
            <span>
              ThemeProvider 래퍼 컴포넌트 파일에 Context를 별도로 분리하여 관리. localstorage에
              다크모드 상태 저장하여 새로고침 해도 유지되도록 구현
            </span>
            <li>동적인 UI</li>
            <span>
              aceternityUI, framer-motion, transfrom, transition 사용해 동적인 효과를 주어 사용자
              경험을 향상시킴
            </span>
            <li>플로팅 네비게이션바</li>
            <span>
              position: fixed, z-index로 z축 상위에 배치. backdrop-filter: blur로 투명함 구현.
              Nextjs Link 컴포넌트 id 속성을 사용해 특정 요소로 링크 구현
            </span>
            <li>top 버튼</li>
            <span>
              플로팅 버튼을 클릭하면 페이지 상단으로 스크롤 이동하는 기능 구현. useScroll() 커스텀
              훅을 사용하여 현재 스크롤 위치를 추적하고, 300px 이상 스크롤 시 버튼 활성화, 클릭 시
              페이지 최상단으로 이동
            </span>
            {/* <li>컴포넌트 재사용</li> */}
            <li>반응형</li>
          </ul>
        </div>
        <br />
        <div className="flex flex-col gap-4 text-left leading-9 max-w-[55rem]">
          <h2 className="mb-4">🔧 트러블 슈팅 </h2>
          <h3>
            window.scrollBy() 메서드로 페이지 내 링크를 구현하여 제대로된 위치에 연결되지 않는 문제
          </h3>
          <div className="sm:pl-4">
            window.scrollBy() 메서드는 현재 스크롤 위치를 기준으로 전달한 매개변수 값만큼 이동한다.
            따라서 원하는 위치로 이동시키는 것이 페이지 최상단이 아니라면 불가능하다.
            <br />
            <br />
            <h3 className="text-blue-600">Solution1</h3>
            <span className="text-blue-700">
              window.scrollTo() 메서드를 사용하여 특정 위치로 스크롤 하도록 구현했다.
            </span>
            하지만 이 방법은 페이지에 내용이 추가될 때 마다 스크롤 위치를 다시 계산해야 하는
            번거로움이 있었다.
            <br />
            <br />
            <h3 className="text-blue-600">Solution2</h3>
            <span className="text-blue-700">
              공식 문서를 보며 Link 컴포넌트의 href 속성에 id 값을 사용하여 특정 요소로 연결할 수
              있다는 것을 알게 되어 해당 방법으로 구현하였고 요소의 위치 변화 상관 없이 정확하게
              이동할 수 있게 되었다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;

// framer motion, aceternityUI를 이용한 랜딩 페이지
// 프로젝트 버튼 - conic-gradient 배경을 애니메이션으로 무한 회전시켜 테두리 빛나는 표현 구현
// 다크 모드(Context API) -
// ThemeProvider 래퍼 컴포넌트로 Context를 별도의 파일로 분리하여 관리. localstorage에 다크모드 상태 저장하여 새로고침해도 유지되도록 구현
// 플로팅 네비게이션바 -
// position: fixed, z-index로 z축 상위에 배치 backdrop-filter: blur로 투명함 구현, Nextjs Link 컴포넌트 id 값으로 특정 요소로 링크 구현
// 프로젝트 섹션 -> 프로젝트 이미지 absolute로 지정 후 부모 요소를 relative로 설정하여 부모 요소의 padding 박스를 기준으로 이동하도록 만듦. hover 시 transform 하도록 만들어 동적인 효과 부여
// 반응형 - 화면 크기에 맞게 변화하는 유연한 페이지 구현

// flex, grid

// 추가 하고싶은 기능-

// 상단으로 돌아가기 플롯팅 버튼 - ○
// 네비게이션바 fixed, sticky 적용 시 버튼 클릭 안되고 투명해지는 문제 - ○
// 화면 크기 줄였을 때 window.scrollBy 메서드 값이 제대로 적용되지 않음-> 왜??
// 플로팅 네비게이션 바, 스크롤 내리면 사라지고 업하면 생김 X
// 지정된 스크롤 위치로 라우팅? navbar 버튼누르면 특정 위치로 스크롤 O
