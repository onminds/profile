const portfolio = {
  profile: {
    name: "오명훈",
    role: "Full-stack AI Product Developer",
    eyebrow: "풀스택 AI 프로덕트 메이커",
    introLabel: "메이커",
    introText: "처럼 기획하고 개발하고 출시까지 해내는 사람, 오명훈입니다.",
    description:
      "아이디어를 실제 서비스로 만들기 위해 기획, 디자인, 개발, 결제, 배포, 앱스토어 출시까지 직접 연결해왔습니다. 사용자가 실제로 쓰는 AI 제품을 만들고, 기술과 비즈니스를 함께 전진시키는 데 강점이 있습니다.",
    email: "hooney1218@gmail.com",
    github: "https://github.com/onminds",
    blog: "",
    serviceUrl: "https://www.moa.tools/ad",
  },
  resume: {
    oneLineTags: [
      "01년생",
      "1년",
      "프론트엔드·백엔드·iOS·Android·풀스택",
      "창업 경험",
      "사용자 있는 프로젝트",
      "리더 경험",
    ],
    intro:
      "도전정신 강하고 주도적으로 실행하는 개발자입니다. 아이디어 단계에서 끝내지 않고, 서비스 기획부터 디자인, 개발, 앱스토어 배포까지 전체 사이클을 직접 경험하며 실제로 제품을 성공시키는 과정을 반복해왔습니다.",
    strength:
      "문제 해결을 위한 기술적 실행력과 비즈니스 감각을 동시에 갖추고 있습니다. 단순 구현을 넘어서 App Store 거절 사유를 분석하고 대응해 최종 출시까지 이끈 경험처럼, 제품이 살아남도록 끝까지 해결하는 힘이 강점입니다.",
    learning: "AI 기술의 실질적 서비스화와 사용자 경험 최적화에 집중하고 있습니다.",
    goal:
      "사용자의 일상을 바꾸는 압도적인 프로젝트를 만드는 메이커로 성장하고 싶습니다.",
    startupFit:
      "자율성을 바탕으로 역량을 최대한 발휘할 수 있고, 기술적 논의가 활발하며 팀과 함께 폭발적으로 성장할 수 있는 환경을 선호합니다.",
  },
  project: {
    name: "MOA",
    summary:
      "AI 검색, AI 종합 채팅, 이미지/영상 생성, 생산성 도구, 커뮤니티, 요금제와 모바일 앱 연동을 하나의 서비스 안에서 제공하는 통합 AI 플랫폼",
    stats: [
      "AI 검색 + 멀티모델 채팅",
      "생산성 도구 9종",
      "웹 + 모바일 구독 연동",
      "Next.js API + MSSQL",
    ],
  },
  badges: [
    "Next.js 15",
    "React 19",
    "TypeScript",
    "Tailwind CSS",
    "NextAuth",
    "MSSQL",
    "Flutter",
    "TossPayments",
    "OpenAI / Gemini / Claude / Grok",
  ],
  overview: [
    {
      label: "SEARCH",
      title: "AI 검색 서비스",
      text:
        "자연어 질의로 AI 도구를 추천하고 탐색 흐름까지 연결한 검색형 서비스입니다.",
      bullets: [
        "자연어 추천",
        "필터링 탐색",
        "상세 페이지 연결",
      ],
      impact: "추천과 탐색을 하나의 흐름으로 설계",
      url: "https://www.moa.tools/ad",
    },
    {
      label: "CHAT",
      title: "멀티모델 채팅",
      text:
        "여러 AI 모델을 한 화면에서 다루고 스트리밍 응답 UX를 구현했습니다.",
      bullets: [
        "스트리밍 UI",
        "도구 카드 렌더링",
        "의도 기반 라우팅",
      ],
      impact: "대화를 실행형 인터페이스로 확장",
      url: "https://www.moa.tools/ai-chat-unified",
    },
    {
      label: "PRODUCTIVITY",
      title: "생산성 도구",
      text:
        "요약, 레포트, 자소서, 면접, PPT, 코드 생성/리뷰 등 업무형 도구를 구성했습니다.",
      bullets: [
        "도구 9종 구성",
        "문서/파일 입력",
        "실무형 폼 UX",
      ],
      impact: "AI 기능을 업무 도구로 제품화",
      url: "https://www.moa.tools/productivity",
    },
    {
      label: "OPS",
      title: "구독 / 모바일 운영",
      text:
        "결제, 사용량 제한, Google/Apple IAP, 서버 웹훅까지 운영 구조를 구현했습니다.",
      bullets: [
        "플랜/사용량 정책",
        "구독 결제 흐름",
        "IAP / 서버 웹훅",
      ],
      impact: "웹과 앱 운영 구조를 직접 구현",
      url: "https://www.moa.tools/plan",
    },
    {
      label: "COMMUNITY",
      title: "커뮤니티 운영",
      text:
        "게시글 작성, 카테고리 권한, 신고 기능까지 포함한 커뮤니티 운영 구조를 구현했습니다.",
      bullets: [
        "게시글 CRUD",
        "공지 권한 제어",
        "신고/모더레이션",
      ],
      impact: "운영 정책까지 포함한 커뮤니티 구조 설계",
      url: "https://www.moa.tools/community",
    },
    {
      label: "SHORTS",
      title: "쇼츠 영상 자동화",
      text:
        "영상 생성 API와 히스토리 저장 구조를 통해 숏폼 제작 자동화 흐름을 구성했습니다.",
      bullets: [
        "영상 생성 API",
        "사용량 제한",
        "히스토리 저장",
      ],
      impact: "숏폼 제작을 자동화 가능한 제품 흐름으로 구현",
      url: "https://autoshortsai.vercel.app/",
    },
    {
      label: "MSSQL",
      title: "SQL 서버 운영",
      text:
        "사용자, 결제, 구독, 사용량, 커뮤니티 데이터를 MSSQL과 연결해 운영했습니다.",
      bullets: [
        "연결 풀 관리",
        "구독/사용량 데이터",
        "커뮤니티/신고 저장",
      ],
      impact: "서비스 핵심 데이터를 SQL 서버 중심으로 안정화",
      url: "https://www.moa.tools/usage",
    },
    {
      label: "MOBILE",
      title: "모바일 런칭",
      text:
        "웹 서비스에 그치지 않고 iOS/Android 앱까지 연결해 실제 출시를 진행했습니다.",
      bullets: [
        "Flutter 앱 연동",
        "App Store 출시",
        "Google Play 배포",
      ],
      impact: "웹 서비스를 모바일 제품으로 확장해 런칭",
      url: "https://apps.apple.com/us/app/moa-tools/id6756276107",
    },
  ],
  summary: [
    {
      title: "창업 경험 (사업자등록 및 서비스 런칭)",
      text: "비즈니스 기획부터 실제 개발과 배포까지, 프로덕트의 전체 생명주기를 직접 리딩해 본 경험이 장점입니다. 'MOA Tools' 개발 시 App Store의 까다로운 심사를 끝까지 추적해 글로벌 런칭에 성공했으며, 운영적 문제들을 끝까지 해결해 내는 집요함과 실행력을 갖추고 있습니다.<br><a href='https://www.moa.tools/ad' target='_blank' style='color: var(--accent); margin-top: 4px; display: inline-block; font-size: 0.9em;'>관련 링크: MOA Tools</a>",
    },
    {
      title: "사용자 있는 프로젝트 (실사용 가치 창출)",
      text: "파편화된 AI 도구들을 한곳에서 편리하게 이용할 수 있는 'MOA Tools' 올인원 플랫폼을 세상에 선보였습니다. 아이디어를 실제 동작하는 제품으로 만드는 과정에서 큰 성취감을 느꼈으며, 2026년 1월 실제 런칭을 통해 주도적으로 문제를 해결하며 성장하는 즐거움을 확인했습니다.",
    },
    {
      title: "리더 경험 (문제해결력 및 오너십)",
      text: "대표로서 기획부터 개발까지 총괄하며, 팀과 제품의 '명확한 방향성 제시'가 프로덕트 생존과 직결됨을 체감했습니다. 스스로 끊임없는 시장 검증과 사용자 피드백을 수용하며 의사결정의 무게를 겪었습니다. 이런 경험을 바탕으로, 동료들이 하나의 목표에 몰입할 수 있도록 기술적·비즈니스적 비전을 공유하는 협업형 메이커를 지향합니다.",
    },
  ],
  features: [
    {
      title: "1. AI 검색 / AI 도구 큐레이션",
      description:
        "검색창 입력만으로 AI 툴을 필터링하고, 카테고리·가격·태그·정렬·페이지네이션을 제공하는 AI 도구 탐색 경험을 만들었습니다. 관리자 전용 도구 추가 모달까지 포함되어 운영도 고려했습니다.",
      meta: ["카테고리 필터", "태그 검색", "관리자 추가 UI", "상세 페이지 연결"],
    },
    {
      title: "2. AI 종합 채팅과 스트리밍 UX",
      description:
        "스트리밍 응답을 타이핑되듯 노출하면서도, 도중에 `[[TOOLS]]` 블록을 안전하게 분리해 추천 카드로 붙이는 구조를 구현했습니다. 단순 텍스트 챗이 아니라 실행형 AI 인터페이스에 가깝습니다.",
      meta: ["스트리밍 처리", "도구 카드 파싱", "질문 의도 라우팅", "대화 유지"],
    },
    {
      title: "3. 생산성 도구 모음",
      description:
        "요약, 레포트 작성, 자기소개서, 면접 준비, 강의 녹음 노트, 발표 대본, 코드 생성/리뷰까지 여러 업무 흐름을 별도 페이지와 폼 UX로 제품화했습니다.",
      meta: ["9개 도구", "문서/파일 입력", "생성 결과 활용", "실무형 UI"],
    },
    {
      title: "4. 결제 / 플랜 / 사용량 제한",
      description:
        "무료/스탠다드/프로 플랜에 따라 이미지, 영상, 생산성 도구 사용량을 나누고, 구독 상태와 다음 결제일, 취소, 다운그레이드 흐름을 사용자 화면과 API 모두에서 다뤘습니다.",
      meta: ["3단계 플랜", "사용량 제한", "구독 취소", "자동 결제"],
    },
    {
      title: "5. 모바일 앱과 IAP 연동",
      description:
        "Flutter 앱을 별도로 운영하면서 모바일 인증, 사용량 조회 API, Google IAP 검증, Apple IAP 복구/검증/웹훅 처리까지 웹 서비스와 연결했습니다.",
      meta: ["Flutter", "Google IAP", "Apple IAP", "모바일 전용 API"],
    },
    {
      title: "6. 계정/운영 기능",
      description:
        "프로필 편집, 아바타 관리, 계정 삭제, 커뮤니티, 온보딩, 앱 다운로드 유도, 정책 페이지까지 실제 서비스 운영에 필요한 주변 기능을 함께 구성했습니다.",
      meta: ["프로필 편집", "계정 삭제", "커뮤니티", "온보딩/정책"],
    },
  ],
  highlights: [
    {
      title: "스트리밍 응답과 카드 UI를 분리한 구조",
      text:
        "채팅 스트림 안에서 텍스트와 구조화된 추천 데이터를 함께 다루도록 설계해, 사용자에게는 자연스러운 대화 경험을 제공하면서도 도구 카드를 안정적으로 렌더링했습니다.",
    },
    {
      title: "사용량 기반 서비스 운영",
      text:
        "플랜별 제한값과 리셋 주기를 API 레벨에서 관리하고, 웹/모바일 모두 같은 비즈니스 규칙으로 동작하게 맞췄습니다.",
    },
    {
      title: "정기결제와 구독 수명주기 처리",
      text:
        "결제 성공만이 아니라 취소, 만료, 환불, 유예기간 만료, 자동 갱신 해제까지 고려한 구독 상태 전환 로직을 구현했습니다.",
    },
    {
      title: "웹 서비스와 모바일 앱 동시 운영",
      text:
        "Next.js 웹과 Flutter 앱이 같은 사용자/구독 데이터를 공유하도록 연결해, 플랫폼이 달라도 일관된 사용 경험을 유지하도록 작업했습니다.",
    },
  ],
  career: [
    {
      company: "주식회사 온마인즈",
      title: "대표 및 개발자",
      domain: "스타트업 / B2C / AI",
      period: "2025.06 - 재직중",
      summary:
        "아이디어 구상부터 글로벌 앱 스토어 런칭까지, 비즈니스와 기술을 동시에 리딩하는 풀스택 창업가로 활동했습니다.",
      responsibilities: [
        "올인원 AI 플랫폼 `MOA Tools` 기획 및 BM 설계, 마케팅 전략 수립",
        "AI API 연동을 통한 핵심 기능 구현 및 프론트엔드/백엔드 전체 개발 총괄",
        "App Store 심사 대응 및 가이드라인 준수를 통한 글로벌 서비스 배포",
        "UI/UX 설계와 브랜드 자산 제작",
        "서비스 홍보용 마케팅 영상 기획 및 제작, 채널 운영과 콘텐츠 확산 실행",
        "AI 자동화 파이프라인 설계: 대본 생성, 이미지 소스 매칭, AI 보이스 합성, 자막 삽입 워크플로우 개발",
        "OpenAI, 이미지 생성 모델, TTS API 통합 및 응답 구조 최적화",
        "Vercel 기반 웹 플랫폼 구축과 안정적인 배포 환경 운영",
      ],
      achievements: [
        "2026년 1월 App Store 정식 등록 완료",
        "2026년 1월 법인 특허 등록 완료",
        "마케팅 운영을 통해 구독자 1,300명 이상 확보",
        "서비스 홍보 및 유입 확대를 위한 마케팅 영상 약 20편 제작",
        "AI 기반 서비스 응답 속도 최적화 및 안정적인 API 통신 구조 설계",
        "수동 작업 기준 수 시간이 걸리던 숏폼 제작 공정을 약 1분 내외로 자동화",
        "유튜브 쇼츠, 틱톡, 인스타그램 릴스 등 세로형 영상 규격 자동 지원",
        "Generative AI 기술을 실무 서비스에 적용한 MVP 개발 및 배포 완료",
      ],
      skills: ["C", "C++", "C#", "Java", "JavaScript", "TypeScript", "Python"],
    },
  ],
  education: [
    {
      school: "동서울대학교",
      major: "게임컨텐츠학과 컴퓨터 관련 전공",
      period: "2021 - 2024",
      status: "졸업",
    },
  ],
  credentials: [
    {
      name: "법인 특허",
      detail: "특허 등록부",
      date: "2026.01",
    },
  ],
  languages: [
    "영어 일상 회화",
    "일본어 일상 회화",
  ],
  workStyle: [
    "새로운 일에 도전",
    "트렌디한 기술",
    "리더로 성장",
  ],
  stacks: [
    {
      title: "Frontend",
      description: "제품 경험과 라우팅, 상호작용 중심",
      tone: "frontend",
      items: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS", "Lucide React"],
    },
    {
      title: "Backend / Infra",
      description: "서비스 정책과 데이터 처리 중심",
      tone: "backend",
      items: ["Next.js API Routes", "MSSQL", "MySQL", "Node.js", "JSON Web Token", "SQL-based usage logic"],
    },
    {
      title: "Auth / Payment",
      description: "사용자 계정과 수익화 구조",
      tone: "auth",
      items: ["NextAuth.js", "TossPayments", "Google IAP", "Apple IAP", "Subscription lifecycle"],
    },
    {
      title: "AI / Product",
      description: "검색·생성·요약 워크플로우 구현",
      tone: "ai",
      items: ["OpenAI", "Google Gemini", "Claude", "Grok", "Replicate", "OCR / file processing"],
    },
  ],
  quote:
    "저는 하나의 AI 기능을 붙이는 개발자가 아니라, 검색형 AI 서비스부터 멀티모델 채팅, 실무형 생산성 도구, 결제와 모바일 구독 운영까지 제품 전체를 연결해 실제 서비스로 완성하는 개발자입니다.",
};

function createActionLink(label, href, primary = false) {
  if (!href) return "";
  return `<a class="hero-link${primary ? " primary" : ""}" href="${href}" target="_blank" rel="noopener noreferrer">${label}</a>`;
}

function createList(items) {
  return items.map((item) => `<li>${item}</li>`).join("");
}

function createMiniList(items) {
  return `<div class="mini-list">${items.map((item) => `<p>${item}</p>`).join("")}</div>`;
}

function render() {
  document.getElementById("heroEyebrow").textContent = portfolio.profile.eyebrow;
  document.getElementById("heroTitle").textContent = portfolio.profile.name;
  document.getElementById("heroIntroLabel").textContent = portfolio.profile.introLabel;
  document.getElementById("heroIntroText").textContent = portfolio.profile.introText;
  document.getElementById("heroDescription").textContent = portfolio.profile.description;
  document.getElementById("footerName").textContent = portfolio.profile.name;
  document.getElementById("footerRole").textContent = portfolio.profile.role;
  
  document.getElementById("footerLinksList").innerHTML = `
    ${portfolio.profile.email ? `<p><a href="mailto:${portfolio.profile.email}">${portfolio.profile.email}</a></p>` : ""}
    <p>010-7451-4477</p>
  `;

  const editorialHtml = portfolio.overview.reduce((acc, item, index) => {
    if (index % 2 === 0) {
      const nextItem = portfolio.overview[index + 1];
      
      const renderItem = (i, data) => {
        if (!data) return '<div class="ed-col empty"></div>';
        const num = String(i + 1).padStart(2, "0");
        let subStat = data.impact;

        return `
          <div class="ed-col">
            <div class="ed-num">${num}</div>
            <h3 class="ed-title">${data.title}</h3>
            <p class="ed-desc">${data.text}</p>
            <div class="ed-divider"></div>
            
            <a href="${data.url}" target="_blank" rel="noopener noreferrer" class="ed-impact-link">
              <div class="ed-impact-text">
                <span class="ed-impact-label">${data.title}</span>
                <span class="ed-impact-desc">프로젝트 라이브 보기 &rarr;</span>
              </div>
            </a>
            <div class="ed-tools">
              <span class="ed-tools-label">FEATURES</span>
              <span class="ed-tools-list">${data.bullets.join(", ")}</span>
            </div>
          </div>
        `;
      };

      acc += `
        <div class="editorial-row">
          ${renderItem(index, item)}
          ${renderItem(index + 1, nextItem)}
        </div>
      `;
    }
    return acc;
  }, "");
  
  document.getElementById("editorialLayout").innerHTML = editorialHtml;

  const aboutSummaryHtml = `
    <div class="about-vision-grid">
      <!-- Left Column: Core Identity and Summary -->
      <div class="about-left">
        <h3 class="about-section-title">Core Identity</h3>
        <p class="about-main-text">${portfolio.resume.intro}</p>
        <div class="about-divider"></div>
        <div class="about-points">
          ${portfolio.summary.map(item => `
            <div class="about-point-item">
              <div class="about-point-icon">✦</div>
              <div>
                <h4>${item.title}</h4>
                <p>${item.text}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      
      <!-- Right Column: Strengths & Goals -->
      <div class="about-right">
        <div class="about-card-elegant">
          <span class="about-card-eyebrow">STRENGTH</span>
          <h4 class="about-card-title">업무 강점</h4>
          <p class="about-card-text">${portfolio.resume.strength}</p>
        </div>
        
        <div class="about-card-elegant">
          <span class="about-card-eyebrow">FOCUS</span>
          <h4 class="about-card-title">현재 집중하는 것</h4>
          <p class="about-card-text">${portfolio.resume.learning}</p>
        </div>
        
        <div class="about-card-elegant highlight-card">
          <span class="about-card-eyebrow">VISION</span>
          <h4 class="about-card-title">커리어 목표</h4>
          <p class="about-card-text">${portfolio.resume.goal}</p>
        </div>
      </div>
    </div>
  `;

  document.querySelector(".about-summary-container").innerHTML = aboutSummaryHtml;

  document.getElementById("careerTimeline").innerHTML = portfolio.career
    .map(
      (item) => `
        <article class="timeline-item">
          <div class="timeline-top">
            <div>
              <h3>${item.company} | ${item.title}</h3>
              <p>${item.domain}</p>
            </div>
            <div class="timeline-meta">${item.period}</div>
          </div>
          <p>${item.summary}</p>
          <div class="feature-meta">
            ${item.skills.map((skill) => `<span>${skill}</span>`).join("")}
          </div>
          <div class="timeline-section">
            <h4>주요 업무</h4>
            <ul>${createList(item.responsibilities)}</ul>
          </div>
          <div class="timeline-section">
            <h4>주요 성과</h4>
            <ul>${createList(item.achievements)}</ul>
          </div>
        </article>
      `
    )
    .join("");

  const renderResumeBlock = (eyebrow, line1, line2, title, badge, subtitle, detailsHtml) => `
    <div class="resume-block">
      <div class="resume-eyebrow">${eyebrow}</div>
      <div class="resume-content">
        <div class="resume-line"></div>
        <div class="resume-period">${line1} &mdash; ${line2}</div>
        <div class="resume-title-row">
          <h3 class="resume-title">${title}</h3>
          ${badge ? `<span class="resume-badge">${badge}</span>` : ""}
        </div>
        <div class="resume-subtitle">${subtitle}</div>
        <div class="resume-details">
          ${detailsHtml}
        </div>
      </div>
    </div>
  `;

  const educationHtml = portfolio.education.map(item => {
    const parts = item.period.split(" - ");
    const line1 = parts[0] ? parts[0].trim() : "";
    const line2 = parts[1] ? parts[1].trim() : "현재";
    
    let majorTitle = item.major;
    let majorDesc = "";
    if (item.major.includes("컴퓨터 관련 전공")) {
      majorTitle = "게임컨텐츠학과";
      majorDesc = "컴퓨터 관련 전공";
    }

    return renderResumeBlock(
      "ACADEMIC BACKGROUND",
      line1, line2,
      item.school,
      item.status,
      "Dongseoul University",
      `
        <div class="resume-col">
          <div class="resume-col-label">MAJOR</div>
          <h4 class="resume-col-title">${majorTitle}</h4>
          <p class="resume-col-subtitle">Game Contents</p>
          <div class="resume-col-desc"><p>${majorDesc}</p></div>
        </div>
        <div class="resume-plus">+</div>
        <div class="resume-col resume-project-col">
          <div class="resume-project-img-wrapper">
            <img src="./game.png" alt="Stella Bellow">
          </div>
          <div class="resume-col-label">TEAM PROJECT</div>
          <h4 class="resume-col-title" style="text-transform: capitalize;">stella bellow</h4>
          <p class="resume-col-subtitle" style="text-transform: none;">프로그래머 (Unity 엔진) / 2023.08</p>
          <div class="resume-col-desc">
            <p>"Stella Bellow"는 플레이어가 종족을 선택하여 스토리를 진행하는 게임입니다. 플레이어가 선택하는 종족에 따라 다양한 스토리와 임무가 제공됩니다.</p>
            <p style="margin-top:8px;">이 게임은 플레이어의 선택에 따라 다양한 엔딩이 존재하며, 플레이어의 선택이 게임 내 세계에 영향을 미치는 인터랙티브한 요소를 가지고 있습니다.</p>
          </div>
        </div>
      `
    );
  }).join("");

  const militaryHtml = renderResumeBlock(
    "MILITARY SERVICE",
    "2020", "2022",
    "해병대",
    "만기전역",
    "Republic of Korea Marine Corps",
    `
      <div class="resume-col">
        <div class="resume-col-label">ROLE</div>
        <h4 class="resume-col-title">문취병 (데이터 기반 부대 배치 시스템 제작)</h4>
        <p class="resume-col-subtitle">해군 협업 부대 배치 프로그램 직접 개발 및 운영</p>
        <div class="resume-col-desc">
          <p><strong>주요 성과:</strong> 해군과 긴밀하게 협업하여 대규모 훈련병 부대 배치 프로그램을 창안하고 <strong>직접 제작(개발)</strong>했습니다. 방대한 엑셀 데이터를 체계적으로 관리하고 자동화 시스템을 구축하여, 인력 배치의 효율성을 극대화하고 휴먼 에러를 방지했습니다.</p>
          <p style="margin-top: 8px;"><strong>인사이트:</strong> 기획이나 단순 운영에 머물지 않고, 국가 규모의 조직에서 발생하는 복잡한 요구사항을 프로그래밍 및 데이터 자동화로 직접 '구현해 낸' 경험입니다. 이 과정에서 체계적이고 조직화된 업무 파이프라인과 소프트웨어의 실질적인 가치를 배웠습니다.</p>
        </div>
      </div>
    `
  );

  const credentialHtml = portfolio.credentials.map(item => {
    return renderResumeBlock(
      "CREDENTIALS & PATENTS",
      item.date, "현재",
      item.name,
      "등록",
      "Corporate Patent",
      `
        <div class="resume-col">
          <div class="resume-col-label">DETAIL</div>
          <h4 class="resume-col-title">${item.detail}</h4>
          <p class="resume-col-subtitle">Patent Register</p>
        </div>
      `
    );
  }).join("");

  const languageHtml = `
    <div class="resume-block">
      <div class="resume-eyebrow">LANGUAGES</div>
      <div class="resume-content">
        <div class="resume-line"></div>
        <div class="resume-period">비즈니스 및 일상 회화</div>
        <div class="resume-title-row">
          <h3 class="resume-title">외국어 능력</h3>
        </div>
        <div class="resume-subtitle">Foreign Languages</div>
        <div class="resume-details">
          ${portfolio.languages.map(lang => {
            const isEnglish = lang.includes("영어");
            const isJapanese = lang.includes("일본어");
            const label = isEnglish ? "ENGLISH" : isJapanese ? "JAPANESE" : "LANGUAGE";
            const title = isEnglish ? "영어" : isJapanese ? "일본어" : lang;
            const subtitle = isEnglish ? "English" : isJapanese ? "Japanese" : "";
            const desc = lang.replace(title, "").trim();
            
            return `
              <div class="resume-col">
                <div class="resume-col-label">${label}</div>
                <h4 class="resume-col-title">${title}</h4>
                <p class="resume-col-subtitle">${subtitle}</p>
                <div class="resume-col-desc"><p>${desc || "일상 회화 가능"}</p></div>
              </div>
            `;
          }).join('<div class="resume-plus">+</div>')}
        </div>
      </div>
    </div>
  `;

  document.getElementById("resumeContainer").innerHTML = educationHtml + militaryHtml + credentialHtml + languageHtml;

  document.getElementById("stackGrid").innerHTML = portfolio.stacks
    .map(
      (group) => `
        <article class="stack-card stack-card--${group.tone}">
          <h3>${group.title}</h3>
          <p>${group.description}</p>
          <div class="stack-row">
            ${group.items.map((item) => `<span class="stack-chip stack-chip--${group.tone}">${item}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

}

function bindThemeToggle() {
  const button = document.getElementById("themeToggle");
  const savedTheme = window.localStorage.getItem("portfolio-theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
    button.textContent = "Light";
  }

  button.addEventListener("click", () => {
    const isLight = document.body.classList.toggle("light");
    button.textContent = isLight ? "Light" : "Dark";
    window.localStorage.setItem("portfolio-theme", isLight ? "light" : "dark");
  });
}

render();
bindThemeToggle();
