import Image from "next/image";
import Link from "next/link";
import githubMark from "/app/public/github-mark.png";

function Page() {
  return (
    <div className="flex flex-col items-center gap-10 ">
      <h1>Music player</h1>
      <video className="border w-[60rem]" src="" />
      <div className="flex flex-col gap-2">
        <Link
          className="hover:text-blue-500"
          href="https://my-music-player-git-master-iam-sunghyuns-projects.vercel.app/"
          target="_blank"
        >
          <p>🔗 배포 링크</p>
        </Link>
        <Link
          className="hover:text-blue-500 flex items-center gap-2 mx-auto"
          href="https://github.com/Iam-Sunghyun/my-music-player"
          target="_blank"
        >
          <Image alt="github" width={20} height={20} src={githubMark} />
          <p>깃허브 링크</p>
        </Link>
      </div>
      <div className="mt-16">
        <h2>✅ 사용 기술</h2>
        <br />
        <ul>
          <li>React</li>
          <li>css-modules</li>
          <li>context API</li>
          <li>Web Audio API</li>
          <li>canvas API</li>
        </ul>
      </div>

      <div>
        <h2>✅ 개발 기간</h2>
        <br />
        <p>1인 개발, 약 2주</p>
      </div>

      <div>
        <h2>✅ 기능 </h2>
        <br />
        <ul className="ul-li-style leading-9">
          <li>오디오 기기 기본 기능</li>- 재생, 정지, 볼륨 조절, 넘기기, 반복 재생 및 셔플
          <li>오디오 비주얼라이저</li>
          <li>오디오 이퀄라이저</li>- 특정 주파수 증폭, 좌우 밸런스 변경, 속도 변경
          <li>음악 추가(input, 드래그앤 드롭), 삭제</li>
          <li>음악 목록 출력</li>
          <li>커스텀 프로그레스바</li>
          <li>반응형</li>
        </ul>
      </div>
      <br />
      <div className="leading-8">
        <h2>✅ 동기</h2>
        <br />
        <p>
          평소 lofi 음악을 자주 듣기 때문에 음악 플레이어를 만들어 보고 싶었다.
          <br />
          음악을 추가하고 재생하는 기본적인 앱을 만든 후 좀 더 깊이 있게 만들고 싶어져
          비주얼라이저와 이퀄라이저 기능을 추가하였다.
          <br />
          구글 검색으로 디자인을 참고했고 기능 구현은 직접 하였다. 가장 익숙하고 많이 사용되는
          React를 사용해 UI를 구현하였고 CSS Modules를 사용하여 순수 CSS의 감을 잃지 않고자 하였다.
          <br />
          개발 과정에서 Web Audio API의 메커니즘과 canvas API의 기본적인 기능,
          requestAnimationFrame() 사용법을 숙지할 수 있었다.
        </p>
      </div>

      <br />
      <div className="flex flex-col gap-5">
        <h2 className="mb-4">✅ 트러블 슈팅 </h2>
        <h3>popUp 메뉴들(이퀄라이저, 플레이리스트) tap 키 눌렀을 때 밖으로 빠져나오는 현상 ✅</h3>
        transition과 transform을 통해 메뉴를 하단에서 부드럽게 끌어올리는 효과를 주기 위해 display:
        none, visibility: hidden이 아닌 상태로 숨겨져 있었음. 따라서 탭 키를 누르면 포커스 되어
        밖으로 빠져 나와버리는 현상 발생 - useEffect와 타이머를 이용해 popIn(메뉴 닫기) 시 0.3초 뒤
        visibility: hidden 되게 만들어 부드럽게 내려서 사라지는 효과는 보여지고, 다 사라졌을 시
        hidden되어 포커스는 잡히지 않게 만듦.
        <br />
        <br />
        <h3>방금 추가한 음악을 삭제후 동일한 음악을 다시 추가했을 시 추가되지 않는 문제</h3>
        input[type="file"] 요소에 같은 파일을 업로드 하면 onChange 이벤트가 발생하지 않는다. 따라서
        파일 sessionStorage에 저장 후 input[type="file"]의 값을 가리키는 event.target.value를 null로
        초기화해주어 동일한 파일이 삭제 후 다시 업로드 되어도 onChange 이벤트가 발생하지 않는 일이
        없도록 해주었다.
        <br />
        <br />
        <h3>
          {/*  */}
          오디오 요소({"<"}audio&gt;)와 오디오 소스 노드(MediaElementAudioSourceNode)가 여러 번
          연결되는 문제.
        </h3>{" "}
        Web Audio API에서 하나의 {"<"}audio&gt;(HTMLAudioElement)는 단 하나의 오디오 소스
        노드(MediaElementAudioSourceNode)에 연결될 수 있다. 이를 해결하려면 오디오
        컨텍스트(AudioContext)와 오디오 소스 노드(MediaElementAudioSourceNode)의 여러번 연결되지
        않게 관리하거나, 새 연결을 생성할 때 기존 연결을 해제해야 한다. 정리 &gt; 음악이 변경될
        때마다 useEffect가 실행되어 오디오 소스 노드(MediaElementAudioSourceNode)가 생성 되었던 것을
        useEffect 내에 조건문을 사용해 처음 한번만 생성하도록 수정
        <br />
        <br />
        <h3>오디오 컨텍스트가 사용자와 상호작용 전에 생성되는 문제</h3>
        브라우저에서 오디오 컨텍스트를 생성하기 전에 사용자의 상호작용이 필요하다. 따라서 노래가
        선택됐을 때 오디오 컨텍스트를 생성하도록 조건문 추가하여 해결하였다.
      </div>
    </div>
  );
}

export default Page;
