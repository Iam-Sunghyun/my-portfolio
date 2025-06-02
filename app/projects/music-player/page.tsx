import Link from "next/link";
import { SiGithub } from "react-icons/si";

function Page() {
  return (
    <div className="flex flex-col items-center gap-10 pt-24">
      <h1>Music player</h1>
      <video className="border w-[60rem]" src="" />
      <div className="flex flex-col gap-2">
        <Link
          className="hover:text-blue-500"
          href="https://my-music-player-git-master-iam-sunghyuns-projects.vercel.app/"
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
            <li>React</li>
            <li>css-modules</li>
            <li>context API</li>
            <li>web audio API</li>
            <li>canvas API</li>
            <li>react-hot-toast</li>
          </ul>
        </div>

        <div>
          <h2>🗓️ 개발 기간</h2>
          <br />
          <span>1인 개발, 약 2주</span>
        </div>

        <div>
          <h2>🔎 동기 및 효과</h2>
          <br />
          <p className="sm:pl-[2rem]  leading-9">
            평소 lofi 음악을 자주 듣기 때문에 음악 플레이어를 만들어 보고 싶어 제작하게 됐다. 음악을
            추가하고 재생하는 기본적인 앱을 만든 후 좀 더 동적으로 만들고 싶어져 비주얼라이저와
            이퀄라이저 기능을 추가하였다.
            <br />
            구글 검색으로 디자인을 참고했고 기능 구현은 직접 하였다. 가장 익숙하고 많이 사용되는
            <b> React</b>를 사용해 UI를 구현하였고 <b>css-modules</b>를 사용하여 순수 <b>CSS</b>의
            감을 잃지 않고자 하였다.
            <br />
            개발 과정에서 <b>Web Audio API</b>의 소리 재생 메커니즘과 <b>canvas API</b>의 기본적인
            기능과 <b>requestAnimationFrame()</b> 사용법을 숙지할 수 있었다.
          </p>
        </div>
      </div>
      <br />

      <div className="flex flex-col items-center gap-10 leading-8 max-w-[65rem]">
        <div>
          <h2>💡 기능 </h2>
          <ul className="ul-li-style leading-9 max-w-[40rem]">
            <li>오디오 기기 기본 기능</li>
            <span>재생, 정지, 볼륨 조절, 넘기기, 반복 재생 및 셔플</span>
            <li>오디오 비주얼라이저</li>
            <span>
              web audio API를 사용한 커스텀 훅으로 주파수 데이터를 가져오고 canvas API와
              requestAnimationFrame()을 통해 주파수 비주얼라이저 출력
            </span>
            <li>오디오 이퀄라이저</li>특정 주파수 증폭, 좌우 밸런스 변경, 속도 변경
            <li>음악 추가, 삭제</li>
            <span>input 요소 및 드래그앤 드롭으로 음악 추가, 음악 리스트는 context로 관리</span>
            <li>음악 목록 출력</li>
            <li>커스텀 프로그레스바</li>
            <span>시간이 흐름에 따라 바가 움직이고 클릭 시 해당 시간으로 이동</span>
            <li>반응형</li>
          </ul>
        </div>
        <br />
        {/* <div>
          <h2>✅ 기술 선택 이유?</h2>
          <br />
          <p>test</p>
        </div> */}

        <br />
        <div className="flex flex-col gap-4 text-left leading-9 max-w-[60rem]">
          <h2 className="mb-4">🔧 트러블 슈팅 </h2>
          <h3>popUp 메뉴(이퀄라이저, 플레이리스트)가 tap 키 눌렀을 때 밖으로 빠져나오는 현상 ✅</h3>
          <div className="sm:pl-4">
            transition과 transform을 통해 메뉴를 하단에서 부드럽게 끌어올리는 효과를 주기 위해
            display: none, visibility: hidden이 아닌 상태로 숨겨져 있었는데 탭 키를 누르면 포커스
            되어 밖으로 빠져 나와 UI가 밀려버리는 현상 발생했다.
            <br />
            <br />
            tabIndex={"{"}-1{"}"} 속성을 통해 키보드 포커스에 안잡히게 하는 방법이 있었으나
            tabIndex는 상속되지 않기 때문에 수십 개의 요소에 직접 넣어야 했고 나중에 유지보수에
            문제가 될 것 같아 패스하였다.
            <br />
            <br />
            <h3 className=" text-blue-600">Solution 1</h3>
            <span className="text-blue-700">
              useEffect와 타이머를 이용해 popIn(메뉴 닫기) 시 0.2초 뒤 visibility: hidden 되게
              만들어 부드럽게 transition 되어 사라지는 효과는 보여지고, 다 사라졌을 시 hidden되어
              탭키 포커스에 잡히지 않게 만들었다.
            </span>
            <br />
            <br />
            하지만 이 경우 popUp 메뉴가 움직이는 찰나(visibility: hidden 되기 전 0.2초)에 tab 키를
            연타하면 포커스가 잡혀 UI가 밀려나는 경우가 또 발생할 수 있었다.
            <br />
            <br />
            <h3 className=" text-blue-600">Solution 2</h3>
            <span className="text-blue-700">
              이번엔 검색을 통해 요소의 렌더링은 유지하면서 비활성화하며 상속도 되는 inert 속성을
              알게 되었고 사용해 보았다. 억지로도(tab키를 연타 하는 식) 포커스에 잡히지 않거나
              잡혀도 UI가 밀려나지 않는 것을 확인하고 수정해주었다. inert 속성의 경우 2023년 최신
              기능이라 폴리필을 다운받아 적용해주었다.
            </span>
            {/* 참고로 요소를 비활성화하는 disabled 속성은 일부 폼 요소에서만 지원된다. */}
          </div>
          <br />
          <br />
          <h3>방금 추가한 음악을 삭제후 동일한 음악을 다시 추가했을 시 추가되지 않는 문제 ✅</h3>
          <div className="sm:pl-6">
            <h3 className=" text-blue-600">Solution</h3>
            <span className="text-blue-700">
              input[type{'="'}file{'"'}] 요소에 같은 이름의 파일을 업로드 하면 onChange 이벤트가
              발생하지 않는다. <br /> 따라서 파일 저장 후 input[type{'="'}file{'"'}]의 값을 가리키는
              event.target.value를 null로 초기화해주어 동일한 파일이 삭제 후 다시 업로드 되어도
              onChange 이벤트가 발생하지 않는 일이 없도록 해주었다.
            </span>
          </div>
          <br />
          <br />
          <h3>
            {/*  */}
            오디오 요소({"<"}audio&gt;)와 오디오 소스 노드(MediaElementAudioSourceNode)가 여러 번
            연결되는 문제 ✅
          </h3>{" "}
          <div className="sm:pl-6">
            Web Audio API에서 하나의 {"<"}audio&gt;(HTMLAudioElement)는 단 하나의 오디오
            컨텍스트(window.AudioContext)에 연결 되거나 같은 컨텍스트에 대해 한번만 연결 될 수
            있다(2번 이상 연결하면 에러 발생). 따라서 여러 번 연결되는 문제를 해결하려면 말 그대로
            오디오 컨텍스트(AudioContext)와 오디오 요소가 여러 번 연결되지 않게 관리하거나, 새
            연결을 생성할 때 기존 연결을 해제해야 한다.
            <br />
            <br />
            <h3 className=" text-blue-600">Solution</h3>
            <span className="text-blue-700">
              음악이 변경될 때마다 useEffect가 실행되어 오디오 컨텍스트와 오디오 요소가 연결되어
              오디오 소스 노드(MediaElementAudioSourceNode)를 생성했다. 이를 useEffect 내에 조건문을
              사용해 한번 생성된 뒤엔 실행되지 않도록 수정하였다.
            </span>
          </div>
          <br />
          <br />
          <h3>오디오 컨텍스트가 사용자와 상호작용 전에 생성되는 문제 ✅</h3>
          <div className="sm:pl-6">
            <h3 className=" text-blue-600">Solution</h3>
            <span className="text-blue-700">
              브라우저에서 오디오 컨텍스트를 생성하기 전에 사용자의 상호작용이 필요하다는 것을 확인.
              음악이 선택됐을 때(사용자의 클릭) 오디오 컨텍스트를 생성하도록 조건문 추가하여
              해결하였다.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
