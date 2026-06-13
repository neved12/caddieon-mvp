const state = {
  jobs: [
    {
      id: "job-1",
      course: "가평 베네스트",
      region: "경기",
      type: "정규",
      pay: 160000,
      housing: "제공",
      experience: "1년 이상",
      rounds: 22,
      meal: "제공",
      training: "가능",
      transport: "셔틀 제공",
      payday: "매월 10일",
      days: "주 5일, 주말 순환",
      contact: "채용 담당자 010-1234-5678",
      detail: "주 5일 근무, 신입 교육 가능, 월 8회 휴무 협의",
    },
    {
      id: "job-2",
      course: "오크밸리 CC",
      region: "강원",
      type: "프리랜서",
      pay: 150000,
      housing: "협의",
      experience: "신입 가능",
      rounds: 18,
      meal: "일부 제공",
      training: "가능",
      transport: "자차 필요",
      payday: "라운드 후 주 단위",
      days: "평일/주말 선택",
      contact: "운영팀 010-2222-3456",
      detail: "주말 우대, 셔틀 지원, 라운드 배정 탄력 운영",
    },
    {
      id: "job-3",
      course: "해운대 컨트리클럽",
      region: "경상",
      type: "주말",
      pay: 170000,
      housing: "미제공",
      experience: "2년 이상",
      rounds: 10,
      meal: "제공",
      training: "불가",
      transport: "교통비 지원",
      payday: "매월 말일",
      days: "토/일 고정",
      contact: "캐디마스터실 010-3333-7890",
      detail: "토요일/일요일 고정 가능자, 고객 응대 우수자 우대",
    },
  ],
  savedJobs: [],
  incomeGoal: 3000000,
  income: [
    { date: "2026-06-03", course: "가평 베네스트", fee: 160000, tip: 30000, extra: 0 },
    { date: "2026-06-06", course: "남서울 CC", fee: 150000, tip: 50000, extra: 10000 },
    { date: "2026-06-11", course: "레이크힐스", fee: 155000, tip: 20000, extra: 0 },
  ],
  talks: [
    {
      id: "talk-1",
      category: "장비추천",
      title: "비 오는 날 우비 추천해주세요",
      body: "가볍고 안 답답한 제품 써보신 분 있나요?",
      authorMode: "anonymous",
      author: "익명 캐디",
      likes: 12,
      reported: false,
      createdAt: "2026-06-12T08:30:00",
      comments: [
        { id: "comment-1", author: "익명 캐디", body: "가벼운 방수 자켓에 챙 넓은 모자 조합이 좋아요.", createdAt: "2026-06-12T09:10:00" },
        { id: "comment-2", author: "민구", body: "통풍되는 제품으로 고르는 게 제일 중요합니다.", createdAt: "2026-06-12T10:40:00" },
      ],
    },
    {
      id: "talk-2",
      category: "신입도움",
      title: "신입 교육 좋은 골프장 공유",
      body: "처음 시작하는 분들한테 도움될 만한 곳 모아봐요.",
      authorMode: "profile",
      author: "민구",
      likes: 21,
      reported: false,
      createdAt: "2026-06-11T15:20:00",
      comments: [
        { id: "comment-3", author: "익명 캐디", body: "초반에는 교육 체계랑 배정 분위기가 정말 중요해요.", createdAt: "2026-06-11T16:00:00" },
      ],
    },
  ],
  likedTalks: [],
  reviews: [
    {
      id: "review-1",
      course: "남서울 CC",
      scores: { treatment: 5, flow: 4, settlement: 5, rest: 4, customer: 4 },
      newbie: "yes",
      pros: "정산이 빠르고 배정이 안정적입니다.",
      cons: "주말에는 고객 응대 강도가 있는 편입니다.",
      text: "동선이 깔끔하고 정산이 빠릅니다. 식사도 괜찮은 편이에요.",
      helpful: 9,
      reported: false,
      createdAt: "2026-06-10T13:00:00",
    },
    {
      id: "review-2",
      course: "오크밸리 CC",
      scores: { treatment: 4, flow: 3, settlement: 4, rest: 3, customer: 4 },
      newbie: "yes",
      pros: "배정이 탄력적이고 신입이 적응하기 좋습니다.",
      cons: "숙소와 이동 조건은 미리 확인하는 게 좋습니다.",
      text: "주말은 바쁘지만 배정이 안정적입니다. 숙소는 미리 확인 필요.",
      helpful: 6,
      reported: false,
      createdAt: "2026-06-08T17:20:00",
    },
  ],
  helpfulReviews: [],
  weather: [
    { course: "가평 베네스트", temp: 23, status: "맑음", wind: "2m/s", rain: "10%", humidity: "60%", time: "샘플" },
    { course: "남서울 CC", temp: 25, status: "구름 조금", wind: "3m/s", rain: "20%", humidity: "58%", time: "샘플" },
    { course: "오크밸리 CC", temp: 21, status: "흐림", wind: "4m/s", rain: "35%", humidity: "65%", time: "샘플" },
  ],
  mapCourses: [
    {
      name: "가평 베네스트",
      region: "경기",
      lat: 37.8456,
      lng: 127.4604,
      restaurants: [
        { name: "가평 잣두부마을", category: "한식", lat: 37.8356, lng: 127.4512, note: "아침 라운드 전 든든한 한식" },
        { name: "청평 숯불갈비", category: "고기", lat: 37.8178, lng: 127.4258, note: "퇴근 후 단체 식사 후보" },
        { name: "북한강 막국수", category: "면", lat: 37.8044, lng: 127.3904, note: "여름 라운드 뒤 가볍게 먹기 좋음" },
      ],
    },
    {
      name: "남서울 CC",
      region: "경기",
      lat: 37.3743,
      lng: 127.0941,
      restaurants: [
        { name: "판교 해장국", category: "한식", lat: 37.3901, lng: 127.1115, note: "이른 출근 전 식사" },
        { name: "운중동 백반집", category: "백반", lat: 37.3909, lng: 127.0773, note: "가격 부담 낮은 점심" },
        { name: "분당 칼국수", category: "면", lat: 37.3825, lng: 127.1198, note: "비 오는 날 찾기 좋음" },
      ],
    },
    {
      name: "오크밸리 CC",
      region: "강원",
      lat: 37.4052,
      lng: 127.8136,
      restaurants: [
        { name: "원주 한우마을", category: "고기", lat: 37.3663, lng: 127.9358, note: "라운드 후 회식 후보" },
        { name: "문막 막국수", category: "면", lat: 37.3138, lng: 127.8172, note: "이동 동선이 편한 편" },
        { name: "오크밸리 산채정식", category: "한식", lat: 37.4112, lng: 127.8184, note: "골프장 가까운 식사" },
      ],
    },
    { name: "88 컨트리클럽", region: "경기", lat: 37.2506, lng: 127.1434, restaurants: [] },
    { name: "뉴서울 컨트리클럽", region: "경기", lat: 37.4295, lng: 127.2461, restaurants: [] },
    { name: "레이크사이드 CC", region: "경기", lat: 37.1979, lng: 127.1692, restaurants: [] },
    { name: "블루원 용인 CC", region: "경기", lat: 37.1568, lng: 127.2585, restaurants: [] },
    { name: "서서울 CC", region: "경기", lat: 37.6832, lng: 126.8216, restaurants: [] },
    { name: "수원 CC", region: "경기", lat: 37.2633, lng: 127.0756, restaurants: [] },
    { name: "아시아나 CC", region: "경기", lat: 37.1725, lng: 127.2479, restaurants: [] },
    { name: "양지파인 CC", region: "경기", lat: 37.2162, lng: 127.2867, restaurants: [] },
    { name: "이천 실크밸리 GC", region: "경기", lat: 37.2254, lng: 127.5117, restaurants: [] },
    { name: "자유 CC", region: "경기", lat: 37.2817, lng: 127.5543, restaurants: [] },
    { name: "캐슬파인 GC", region: "경기", lat: 37.3619, lng: 127.5735, restaurants: [] },
    { name: "한성 CC", region: "경기", lat: 37.2344, lng: 127.1209, restaurants: [] },
    { name: "한양 CC", region: "경기", lat: 37.6417, lng: 126.8341, restaurants: [] },
    { name: "해솔리아 CC", region: "경기", lat: 37.2012, lng: 127.3345, restaurants: [] },
    { name: "휘닉스 평창 GC", region: "강원", lat: 37.5804, lng: 128.3262, restaurants: [] },
    { name: "라데나 GC", region: "강원", lat: 37.8348, lng: 127.7236, restaurants: [] },
    { name: "샌드파인 GC", region: "강원", lat: 37.7701, lng: 128.9182, restaurants: [] },
    { name: "용평 버치힐 GC", region: "강원", lat: 37.6458, lng: 128.6816, restaurants: [] },
    { name: "엘리시안 강촌 CC", region: "강원", lat: 37.8276, lng: 127.5892, restaurants: [] },
    { name: "파인리즈 CC", region: "강원", lat: 38.2253, lng: 128.5551, restaurants: [] },
    { name: "센추리21 CC", region: "강원", lat: 37.4274, lng: 128.1077, restaurants: [] },
    { name: "대영힐스 CC", region: "충청", lat: 37.0395, lng: 127.8623, restaurants: [] },
    { name: "우정힐스 CC", region: "충청", lat: 36.8171, lng: 127.1872, restaurants: [] },
    { name: "천룡 CC", region: "충청", lat: 36.8996, lng: 127.5208, restaurants: [] },
    { name: "떼제베 CC", region: "충청", lat: 36.7109, lng: 127.4683, restaurants: [] },
    { name: "세종 에머슨 CC", region: "충청", lat: 36.5081, lng: 127.2354, restaurants: [] },
    { name: "유성 CC", region: "충청", lat: 36.3644, lng: 127.2926, restaurants: [] },
    { name: "롯데스카이힐 부여 CC", region: "충청", lat: 36.2899, lng: 126.9458, restaurants: [] },
    { name: "골프존카운티 선운", region: "전라", lat: 35.4998, lng: 126.6007, restaurants: [] },
    { name: "군산 CC", region: "전라", lat: 35.9286, lng: 126.7285, restaurants: [] },
    { name: "무주 덕유산 CC", region: "전라", lat: 35.8937, lng: 127.7376, restaurants: [] },
    { name: "상떼힐 익산 CC", region: "전라", lat: 36.0269, lng: 127.0592, restaurants: [] },
    { name: "순천 부영 CC", region: "전라", lat: 34.9954, lng: 127.5207, restaurants: [] },
    { name: "파인비치 골프링크스", region: "전라", lat: 34.4452, lng: 126.4049, restaurants: [] },
    { name: "해피니스 CC", region: "전라", lat: 35.0844, lng: 126.7817, restaurants: [] },
    { name: "골프존카운티 감포", region: "경상", lat: 35.7886, lng: 129.4881, restaurants: [] },
    { name: "경주 신라 CC", region: "경상", lat: 35.7908, lng: 129.2959, restaurants: [] },
    { name: "동래 베네스트", region: "경상", lat: 35.2736, lng: 129.0907, restaurants: [] },
    { name: "보라 CC", region: "경상", lat: 35.4604, lng: 129.2146, restaurants: [] },
    { name: "블루원 디아너스 CC", region: "경상", lat: 35.7679, lng: 129.2988, restaurants: [] },
    { name: "아시아드 CC", region: "경상", lat: 35.3341, lng: 129.2562, restaurants: [] },
    { name: "양산 CC", region: "경상", lat: 35.4047, lng: 129.0597, restaurants: [] },
    { name: "에이원 CC", region: "경상", lat: 35.4377, lng: 129.1179, restaurants: [] },
    { name: "창원 CC", region: "경상", lat: 35.2595, lng: 128.6979, restaurants: [] },
    { name: "통도 파인이스트 CC", region: "경상", lat: 35.4937, lng: 129.0702, restaurants: [] },
    { name: "핀크스 GC", region: "제주", lat: 33.3262, lng: 126.3936, restaurants: [] },
    { name: "나인브릿지", region: "제주", lat: 33.3571, lng: 126.3847, restaurants: [] },
    { name: "블랙스톤 제주", region: "제주", lat: 33.3467, lng: 126.3397, restaurants: [] },
    { name: "롯데스카이힐 제주 CC", region: "제주", lat: 33.2799, lng: 126.3912, restaurants: [] },
    { name: "엘리시안 제주 CC", region: "제주", lat: 33.3901, lng: 126.3528, restaurants: [] },
    { name: "오라 CC", region: "제주", lat: 33.4483, lng: 126.5036, restaurants: [] },
    { name: "제주 CC", region: "제주", lat: 33.4269, lng: 126.5609, restaurants: [] },
  ],
  profile: {
    nickname: "민구",
    region: "경기",
    career: "3년차 캐디",
    skin: "#f4c7a1",
    hair: "bob",
    mood: "smile",
    color: "#146c43",
    bio: "밝고 꼼꼼한 라운드 파트너",
  },
};

const money = (value) => `${Number(value).toLocaleString("ko-KR")}원`;

const $ = (selector) => document.querySelector(selector);

const mapRuntime = {
  map: null,
  markers: [],
  sdkPromise: null,
  radiusCircle: null,
  activeRestaurants: [],
  usingAutoSearch: false,
};

function loadProfile() {
  try {
    const saved = localStorage.getItem("caddieon-profile");
    if (saved) {
      state.profile = { ...state.profile, ...JSON.parse(saved) };
    }
  } catch (error) {
    localStorage.removeItem("caddieon-profile");
  }
}

function saveProfile() {
  localStorage.setItem("caddieon-profile", JSON.stringify(state.profile));
}

function loadIncomeData() {
  try {
    const saved = localStorage.getItem("caddieon-income");
    if (saved) {
      const data = JSON.parse(saved);
      state.income = (data.income || state.income).map((item) => ({
        ...item,
        extra: item.extra || 0,
      }));
      state.incomeGoal = Number(data.incomeGoal || state.incomeGoal);
    }
  } catch (error) {
    localStorage.removeItem("caddieon-income");
  }
}

function saveIncomeData() {
  localStorage.setItem(
    "caddieon-income",
    JSON.stringify({
      income: state.income,
      incomeGoal: state.incomeGoal,
    })
  );
}

function normalizeJob(job, index = 0) {
  return {
    id: job.id || `job-${Date.now()}-${index}`,
    status: job.status || "approved",
    source: job.source || "sample",
    rounds: job.rounds || 0,
    meal: job.meal || "협의",
    training: job.training || (job.experience?.includes("신입") ? "가능" : "협의"),
    transport: job.transport || "협의",
    payday: job.payday || "협의",
    days: job.days || "협의",
    contact: job.contact || "앱 문의",
    ...job,
  };
}

function getJobSheetCsvUrl() {
  return window.CADDIEON_CONFIG?.jobSheetCsvUrl?.trim() || "";
}

function setJobSyncStatus(message) {
  const status = $("#jobSyncStatus");
  if (status) status.textContent = message;
}

function parseCsv(text) {
  const rows = [];
  let row = [];
  let cell = "";
  let insideQuote = false;

  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    const next = text[index + 1];

    if (char === '"' && insideQuote && next === '"') {
      cell += '"';
      index += 1;
    } else if (char === '"') {
      insideQuote = !insideQuote;
    } else if (char === "," && !insideQuote) {
      row.push(cell.trim());
      cell = "";
    } else if ((char === "\n" || char === "\r") && !insideQuote) {
      if (char === "\r" && next === "\n") index += 1;
      row.push(cell.trim());
      if (row.some(Boolean)) rows.push(row);
      row = [];
      cell = "";
    } else {
      cell += char;
    }
  }

  row.push(cell.trim());
  if (row.some(Boolean)) rows.push(row);
  return rows;
}

function pickColumn(row, keys, fallback = "") {
  for (const key of keys) {
    if (row[key]) return row[key];
  }
  return fallback;
}

function sheetRowToJob(row, index) {
  const course = pickColumn(row, ["골프장명", "골프장", "course", "name"]);
  if (!course) return null;

  return normalizeJob(
    {
      id: pickColumn(row, ["id", "공고ID"], `sheet-job-${index}-${course}`),
      source: "sheet",
      course,
      region: pickColumn(row, ["지역", "region"], "경기"),
      type: pickColumn(row, ["근무형태", "형태", "type"], "정규"),
      pay: Number(pickColumn(row, ["캐디피", "피", "pay"], "0").replace(/[^0-9]/g, "")) || 0,
      housing: pickColumn(row, ["숙소", "housing"], "협의"),
      experience: pickColumn(row, ["경력조건", "경력", "experience"], "신입 가능"),
      rounds: Number(pickColumn(row, ["월평균라운드", "라운드", "rounds"], "0").replace(/[^0-9]/g, "")) || 0,
      meal: pickColumn(row, ["식사", "meal"], "협의"),
      training: pickColumn(row, ["신입교육", "교육", "training"], "협의"),
      transport: pickColumn(row, ["셔틀교통", "교통", "transport"], "협의"),
      payday: pickColumn(row, ["정산일", "payday"], "협의"),
      days: pickColumn(row, ["근무요일", "요일", "days"], "협의"),
      contact: pickColumn(row, ["연락처", "문의", "contact"], "앱 문의"),
      detail: pickColumn(row, ["상세조건", "상세", "detail"], "구글시트에서 불러온 채용 공고입니다."),
      status: pickColumn(row, ["상태", "status"], "approved"),
    },
    index
  );
}

async function syncJobsFromSheet({ silent = false } = {}) {
  const url = getJobSheetCsvUrl();
  if (!url) {
    setJobSyncStatus("구글시트 CSV 주소가 아직 연결되지 않았습니다. config.js에 jobSheetCsvUrl을 넣으면 자동 업데이트됩니다.");
    return;
  }

  if (!silent) setJobSyncStatus("구글시트 채용 공고를 불러오는 중입니다.");

  try {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) throw new Error("sheet request failed");

    const rows = parseCsv(await response.text());
    const headers = rows.shift()?.map((header) => header.trim()) || [];
    const sheetJobs = rows
      .map((cells, index) => {
        const row = Object.fromEntries(headers.map((header, cellIndex) => [header, cells[cellIndex]?.trim() || ""]));
        return sheetRowToJob(row, index);
      })
      .filter(Boolean);

    if (!sheetJobs.length) {
      setJobSyncStatus("구글시트에 표시할 채용 공고가 없습니다. 첫 줄 제목과 공고 내용을 확인해주세요.");
      return;
    }

    const localJobs = state.jobs.filter((job) => job.source === "local");
    state.jobs = [...sheetJobs, ...localJobs];
    renderJobs();
    renderAdmin();
    setJobSyncStatus(`구글시트에서 채용 공고 ${sheetJobs.length}건을 불러왔습니다.`);
  } catch (error) {
    setJobSyncStatus("구글시트 공고를 불러오지 못했습니다. 시트를 웹에 게시했는지, CSV 주소가 맞는지 확인해주세요.");
  }
}

function loadJobData() {
  try {
    const saved = localStorage.getItem("caddieon-jobs");
    if (saved) {
      const data = JSON.parse(saved);
      state.jobs = (data.jobs || state.jobs).map(normalizeJob);
      state.savedJobs = data.savedJobs || [];
    } else {
      state.jobs = state.jobs.map(normalizeJob);
    }
  } catch (error) {
    localStorage.removeItem("caddieon-jobs");
    state.jobs = state.jobs.map(normalizeJob);
  }
}

function saveJobData() {
  localStorage.setItem(
    "caddieon-jobs",
    JSON.stringify({
      jobs: state.jobs,
      savedJobs: state.savedJobs,
    })
  );
}

function normalizeTalk(post, index = 0) {
  return {
    id: post.id || `talk-${Date.now()}-${index}`,
    category: post.category || "현장수다",
    authorMode: post.authorMode || "anonymous",
    author: post.author || "익명 캐디",
    likes: post.likes || 0,
    reported: Boolean(post.reported),
    createdAt: post.createdAt || new Date().toISOString(),
    comments: post.comments || [],
    ...post,
  };
}

function loadTalkData() {
  try {
    const saved = localStorage.getItem("caddieon-talks");
    if (saved) {
      const data = JSON.parse(saved);
      state.talks = (data.talks || state.talks).map(normalizeTalk);
      state.likedTalks = data.likedTalks || [];
    } else {
      state.talks = state.talks.map(normalizeTalk);
    }
  } catch (error) {
    localStorage.removeItem("caddieon-talks");
    state.talks = state.talks.map(normalizeTalk);
  }
}

function saveTalkData() {
  localStorage.setItem(
    "caddieon-talks",
    JSON.stringify({
      talks: state.talks,
      likedTalks: state.likedTalks,
    })
  );
}

function normalizeReview(review, index = 0) {
  const score = review.score || 4;
  return {
    id: review.id || `review-${Date.now()}-${index}`,
    scores: review.scores || {
      treatment: score,
      flow: score,
      settlement: score,
      rest: score,
      customer: score,
    },
    newbie: review.newbie || "yes",
    pros: review.pros || "장점 정보가 아직 없습니다.",
    cons: review.cons || "주의점 정보가 아직 없습니다.",
    helpful: review.helpful || 0,
    reported: Boolean(review.reported),
    createdAt: review.createdAt || new Date().toISOString(),
    ...review,
  };
}

function loadReviewData() {
  try {
    const saved = localStorage.getItem("caddieon-reviews");
    if (saved) {
      const data = JSON.parse(saved);
      state.reviews = (data.reviews || state.reviews).map(normalizeReview);
      state.helpfulReviews = data.helpfulReviews || [];
    } else {
      state.reviews = state.reviews.map(normalizeReview);
    }
  } catch (error) {
    localStorage.removeItem("caddieon-reviews");
    state.reviews = state.reviews.map(normalizeReview);
  }
}

function saveReviewData() {
  localStorage.setItem(
    "caddieon-reviews",
    JSON.stringify({
      reviews: state.reviews,
      helpfulReviews: state.helpfulReviews,
    })
  );
}

function applyProfileColor() {
  document.documentElement.style.setProperty("--profile-color", state.profile.color);
}

function renderProfile() {
  applyProfileColor();
  renderCharacter($("#profileAvatarMini"));
  renderCharacter($("#profileAvatarLarge"));
  $("#profilePreviewName").textContent = state.profile.nickname;
  $("#profilePreviewMeta").textContent = `${state.profile.region} · ${state.profile.career}`;
  $("#profileNickname").value = state.profile.nickname;
  $("#profileRegion").value = state.profile.region;
  $("#profileCareer").value = state.profile.career;
  $("#profileSkin").value = state.profile.skin;
  $("#profileHair").value = state.profile.hair;
  $("#profileMood").value = state.profile.mood;
  $("#profileBio").value = state.profile.bio;
  document.querySelectorAll(".swatch").forEach((swatch) => {
    swatch.classList.toggle("is-selected", swatch.dataset.color === state.profile.color);
  });
}

function renderCharacter(element) {
  element.dataset.hair = state.profile.hair;
  element.dataset.mood = state.profile.mood;
  element.style.setProperty("--skin", state.profile.skin);
  element.style.setProperty("--outfit", state.profile.color);
  element.innerHTML = `
    <span class="character-face">
      <span class="character-eye left"></span>
      <span class="character-eye right"></span>
      <span class="character-mouth"></span>
    </span>
  `;
}

function updateProfilePreviewFromForm() {
  const nickname = $("#profileNickname").value.trim() || "내 프로필";
  const region = $("#profileRegion").value;
  const career = $("#profileCareer").value;
  state.profile.skin = $("#profileSkin").value;
  state.profile.hair = $("#profileHair").value;
  state.profile.mood = $("#profileMood").value;
  renderCharacter($("#profileAvatarLarge"));
  $("#profilePreviewName").textContent = nickname;
  $("#profilePreviewMeta").textContent = `${region} · ${career}`;
}

function renderJobs() {
  const region = $("#regionFilter").value;
  const type = $("#jobTypeFilter").value;
  const housing = $("#housingFilter").value;
  const newbie = $("#newbieFilter").value;
  const jobs = state.jobs.filter((job) => {
    const regionMatch = region === "all" || job.region === region;
    const typeMatch = type === "all" || job.type === type;
    const housingMatch = housing === "all" || job.housing === housing;
    const newbieMatch =
      newbie === "all" ||
      (newbie === "yes" && isNewbieFriendly(job)) ||
      (newbie === "no" && !isNewbieFriendly(job));
    const statusMatch = job.status !== "hidden";
    return regionMatch && typeMatch && housingMatch && newbieMatch && statusMatch;
  });

  $("#jobList").innerHTML = jobs
    .map(
      (job) => `
        <article class="card job-card">
          <div class="job-card-head">
            <div>
              <span class="meta">${job.region} · ${job.type}</span>
              <h3>${job.course}</h3>
            </div>
            <button class="save-job ${state.savedJobs.includes(job.id) ? "is-saved" : ""}" data-job-id="${job.id}" aria-label="관심 공고 저장">
              ${state.savedJobs.includes(job.id) ? "★" : "☆"}
            </button>
          </div>
          <p>${job.detail}</p>
          <div class="pill-row">
            ${isNewbieFriendly(job) ? `<span class="pill accent-pill">신입 가능</span>` : ""}
            <span class="pill">캐디피 ${money(job.pay)}</span>
            <span class="pill">월 ${job.rounds}회</span>
            <span class="pill">숙소 ${job.housing}</span>
            <span class="pill">식사 ${job.meal}</span>
            <span class="pill">${job.experience}</span>
          </div>
          <div class="job-actions">
            <button class="ghost-button view-job" data-job-id="${job.id}">상세보기</button>
            <button class="primary-button apply-job" data-job-id="${job.id}">지원하기</button>
          </div>
        </article>
      `
    )
    .join("") || `<div class="empty-state">조건에 맞는 공고가 없습니다.</div>`;
}

function isNewbieFriendly(job) {
  return job.experience.includes("신입") || job.training === "가능";
}

function findJob(jobId) {
  return state.jobs.find((job) => job.id === jobId);
}

function toggleSavedJob(jobId) {
  if (state.savedJobs.includes(jobId)) {
    state.savedJobs = state.savedJobs.filter((id) => id !== jobId);
  } else {
    state.savedJobs.push(jobId);
  }
  saveJobData();
  renderJobs();
}

function openJobDetail(jobId) {
  const job = findJob(jobId);
  if (!job) return;

  $("#jobDetailTitle").textContent = job.course;
  $("#jobDetailContent").innerHTML = `
    <div class="job-detail-hero">
      <span>${job.region} · ${job.type}</span>
      <strong>${money(job.pay)}</strong>
      <p>${job.detail}</p>
    </div>
    <div class="detail-grid">
      <div><span>월 평균 라운드</span><strong>${job.rounds}회</strong></div>
      <div><span>숙소</span><strong>${job.housing}</strong></div>
      <div><span>식사</span><strong>${job.meal}</strong></div>
      <div><span>신입 교육</span><strong>${job.training}</strong></div>
      <div><span>셔틀/교통</span><strong>${job.transport}</strong></div>
      <div><span>정산일</span><strong>${job.payday}</strong></div>
      <div><span>근무 요일</span><strong>${job.days}</strong></div>
      <div><span>경력 조건</span><strong>${job.experience}</strong></div>
    </div>
    <div class="contact-box">
      <span>문의 연락처</span>
      <strong>${job.contact}</strong>
    </div>
    <div class="job-actions">
      <button class="ghost-button save-job ${state.savedJobs.includes(job.id) ? "is-saved" : ""}" data-job-id="${job.id}">
        ${state.savedJobs.includes(job.id) ? "관심 해제" : "관심 저장"}
      </button>
      <button class="primary-button apply-job" data-job-id="${job.id}">지원하기</button>
    </div>
  `;
  $("#jobDetailModal").classList.add("is-open");
  $("#jobDetailModal").setAttribute("aria-hidden", "false");
}

function applyJob(jobId) {
  const job = findJob(jobId);
  if (!job) return;
  alert(`${job.course} 공고 지원 의사를 저장했습니다. 실제 앱에서는 담당자 문의 또는 지원서 작성으로 연결됩니다.`);
}

function renderIncome() {
  const currentMonth = getCurrentIncomeMonth();
  const monthlyItems = state.income.filter((item) => item.date.startsWith(currentMonth));
  const feeTotal = monthlyItems.reduce((sum, item) => sum + item.fee, 0);
  const tipTotal = monthlyItems.reduce((sum, item) => sum + item.tip, 0);
  const extraTotal = monthlyItems.reduce((sum, item) => sum + (item.extra || 0), 0);
  const monthlyTotal = feeTotal + tipTotal + extraTotal;
  const averageIncome = monthlyItems.length ? Math.round(monthlyTotal / monthlyItems.length) : 0;
  const progress = state.incomeGoal ? Math.min(100, Math.round((monthlyTotal / state.incomeGoal) * 100)) : 0;

  $("#monthlyTotal").textContent = money(monthlyTotal);
  $("#roundCount").textContent = `${monthlyItems.length}회`;
  $("#monthlyGoal").value = state.incomeGoal;
  $("#goalAmountText").textContent = money(state.incomeGoal);
  $("#goalProgressBar").style.width = `${progress}%`;
  $("#goalProgressText").textContent = `${progress}% 달성 · 목표까지 ${money(Math.max(state.incomeGoal - monthlyTotal, 0))}`;
  $("#feeTotal").textContent = money(feeTotal);
  $("#tipTotal").textContent = money(tipTotal);
  $("#extraTotal").textContent = money(extraTotal);
  $("#averageRoundIncome").textContent = money(averageIncome);
  renderIncomeCalendar(currentMonth, monthlyItems);
  renderCourseRank(monthlyItems);
  $("#incomeList").innerHTML = monthlyItems
    .slice()
    .reverse()
    .map(
      (item) => `
        <article class="card">
          <span class="meta">${item.date}</span>
          <h3>${item.course}</h3>
          <div class="pill-row">
            <span class="pill">캐디피 ${money(item.fee)}</span>
            <span class="pill">팁 ${money(item.tip)}</span>
            <span class="pill">기타 ${money(item.extra || 0)}</span>
            <span class="pill">합계 ${money(incomeItemTotal(item))}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function incomeItemTotal(item) {
  return item.fee + item.tip + (item.extra || 0);
}

function getCurrentIncomeMonth() {
  const latest = state.income
    .map((item) => item.date)
    .sort()
    .at(-1);
  return (latest || new Date().toISOString().slice(0, 10)).slice(0, 7);
}

function renderIncomeCalendar(monthKey, items) {
  const [year, month] = monthKey.split("-").map(Number);
  const firstDate = new Date(year, month - 1, 1);
  const lastDate = new Date(year, month, 0);
  const totalsByDay = items.reduce((totals, item) => {
    const day = Number(item.date.slice(8, 10));
    totals[day] = (totals[day] || 0) + incomeItemTotal(item);
    return totals;
  }, {});
  const weekdays = ["일", "월", "화", "수", "목", "금", "토"];
  const blanks = Array.from({ length: firstDate.getDay() }, () => `<div class="calendar-cell is-blank"></div>`);
  const days = Array.from({ length: lastDate.getDate() }, (_, index) => {
    const day = index + 1;
    const total = totalsByDay[day] || 0;
    return `
      <div class="calendar-cell ${total ? "has-income" : ""}">
        <strong>${day}</strong>
        <span>${total ? money(total) : ""}</span>
      </div>
    `;
  });

  $("#calendarMonthLabel").textContent = `${year}년 ${month}월`;
  $("#incomeCalendar").innerHTML = [
    ...weekdays.map((day) => `<div class="calendar-weekday">${day}</div>`),
    ...blanks,
    ...days,
  ].join("");
}

function renderCourseRank(items) {
  const rank = Object.values(
    items.reduce((courses, item) => {
      if (!courses[item.course]) {
        courses[item.course] = { course: item.course, total: 0, rounds: 0 };
      }
      courses[item.course].total += incomeItemTotal(item);
      courses[item.course].rounds += 1;
      return courses;
    }, {})
  ).sort((a, b) => b.total - a.total);

  $("#courseRankList").innerHTML = rank.length
    ? rank
        .map(
          (item, index) => `
            <div class="rank-row">
              <span>${index + 1}</span>
              <strong>${item.course}</strong>
              <em>${item.rounds}회 · ${money(item.total)}</em>
            </div>
          `
        )
        .join("")
    : `<div class="empty-state">이번 달 라운드 기록이 없습니다.</div>`;
}

function renderTalks() {
  const category = $("#talkCategoryFilter").value;
  const sort = $("#talkSort").value;
  const talks = state.talks
    .filter((post) => category === "all" || post.category === category)
    .sort((a, b) => {
      if (sort === "popular") return b.likes + b.comments.length - (a.likes + a.comments.length);
      if (sort === "comments") return b.comments.length - a.comments.length;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  $("#talkList").innerHTML = talks
    .map(
      (post) => `
        <article class="card talk-card ${post.reported ? "is-reported" : ""}">
          <div class="talk-meta-row">
            <span class="pill">${post.category}</span>
            <span class="meta">${post.author} · ${formatTalkDate(post.createdAt)}</span>
          </div>
          <h3>${post.title}</h3>
          <p>${post.body}</p>
          ${post.reported ? `<p class="report-note">신고 접수된 글입니다. 운영자 검토 대기 중</p>` : ""}
          <div class="talk-actions">
            <button class="talk-like ${state.likedTalks.includes(post.id) ? "is-liked" : ""}" data-talk-id="${post.id}">
              ${state.likedTalks.includes(post.id) ? "♥" : "♡"} ${post.likes}
            </button>
            <button class="talk-comment" data-talk-id="${post.id}">댓글 ${post.comments.length}</button>
            <button class="talk-report" data-talk-id="${post.id}">신고</button>
          </div>
        </article>
      `
    )
    .join("") || `<div class="empty-state">아직 해당 카테고리 글이 없습니다.</div>`;
}

function formatTalkDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "방금";
  return `${date.getMonth() + 1}/${date.getDate()} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}`;
}

function findTalk(talkId) {
  return state.talks.find((post) => post.id === talkId);
}

function toggleTalkLike(talkId) {
  const post = findTalk(talkId);
  if (!post) return;
  if (state.likedTalks.includes(talkId)) {
    state.likedTalks = state.likedTalks.filter((id) => id !== talkId);
    post.likes = Math.max(0, post.likes - 1);
  } else {
    state.likedTalks.push(talkId);
    post.likes += 1;
  }
  saveTalkData();
  renderTalks();
}

function reportTalk(talkId) {
  const post = findTalk(talkId);
  if (!post) return;
  post.reported = true;
  saveTalkData();
  renderTalks();
  alert("신고가 접수되었습니다. 실제 앱에서는 운영자 검토로 연결됩니다.");
}

function openTalkDetail(talkId) {
  const post = findTalk(talkId);
  if (!post) return;
  $("#talkDetailTitle").textContent = post.title;
  $("#talkDetailContent").innerHTML = `
    <article class="talk-detail">
      <div class="talk-meta-row">
        <span class="pill">${post.category}</span>
        <span class="meta">${post.author} · ${formatTalkDate(post.createdAt)}</span>
      </div>
      <p>${post.body}</p>
      <div class="talk-actions">
        <button class="talk-like ${state.likedTalks.includes(post.id) ? "is-liked" : ""}" data-talk-id="${post.id}">
          ${state.likedTalks.includes(post.id) ? "♥" : "♡"} ${post.likes}
        </button>
        <button class="talk-report" data-talk-id="${post.id}">신고</button>
      </div>
    </article>
    <div class="comment-list">
      ${post.comments
        .map(
          (comment) => `
            <div class="comment-item">
              <strong>${comment.author}</strong>
              <p>${comment.body}</p>
              <span>${formatTalkDate(comment.createdAt)}</span>
            </div>
          `
        )
        .join("") || `<div class="empty-state">첫 댓글을 남겨보세요.</div>`}
    </div>
    <form class="comment-form" id="commentForm">
      <input type="text" id="commentBody" placeholder="댓글을 입력하세요" required />
      <button class="primary-button" type="submit">등록</button>
    </form>
  `;
  $("#commentForm").addEventListener("submit", (event) => {
    event.preventDefault();
    addTalkComment(post.id, $("#commentBody").value);
  });
  $("#talkDetailModal").classList.add("is-open");
  $("#talkDetailModal").setAttribute("aria-hidden", "false");
}

function addTalkComment(talkId, body) {
  const post = findTalk(talkId);
  if (!post) return;
  post.comments.push({
    id: `comment-${Date.now()}`,
    author: state.profile.nickname || "내 캐릭터",
    body,
    createdAt: new Date().toISOString(),
  });
  saveTalkData();
  renderTalks();
  openTalkDetail(talkId);
}

function renderReviews() {
  renderReviewCourseFilter();
  const course = $("#reviewCourseFilter").value;
  const sort = $("#reviewSort").value;
  const reviews = state.reviews
    .filter((review) => course === "all" || review.course === course)
    .sort((a, b) => {
      if (sort === "score") return reviewAverage(b) - reviewAverage(a);
      if (sort === "helpful") return b.helpful - a.helpful;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  $("#reviewList").innerHTML = reviews
    .map(
      (review) => `
        <article class="card review-card ${review.reported ? "is-reported" : ""}">
          <div class="review-head">
            <div>
              <span class="meta">${formatTalkDate(review.createdAt)}</span>
              <h3>${review.course}</h3>
            </div>
            <div class="score-badge">${reviewAverage(review).toFixed(1)}</div>
          </div>
          <div class="pill-row">
            <span class="pill ${review.newbie === "yes" ? "accent-pill" : ""}">신입 ${review.newbie === "yes" ? "추천" : "비추천"}</span>
            <span class="pill">대우 ${review.scores.treatment}</span>
            <span class="pill">정산 ${review.scores.settlement}</span>
            <span class="pill">동선 ${review.scores.flow}</span>
          </div>
          <div class="review-breakdown">
            ${reviewMetric("캐디 대우", review.scores.treatment)}
            ${reviewMetric("동선/코스", review.scores.flow)}
            ${reviewMetric("정산 투명성", review.scores.settlement)}
            ${reviewMetric("식사/휴게", review.scores.rest)}
            ${reviewMetric("고객 난이도", review.scores.customer)}
          </div>
          <div class="review-notes">
            <p><strong>장점</strong>${review.pros}</p>
            <p><strong>주의</strong>${review.cons}</p>
          </div>
          <p>${review.text}</p>
          ${review.reported ? `<p class="report-note">신고 접수된 리뷰입니다. 운영자 검토 대기 중</p>` : ""}
          <div class="talk-actions">
            <button class="review-helpful ${state.helpfulReviews.includes(review.id) ? "is-liked" : ""}" data-review-id="${review.id}">
              도움돼요 ${review.helpful}
            </button>
            <button class="review-report" data-review-id="${review.id}">신고</button>
          </div>
        </article>
      `
    )
    .join("") || `<div class="empty-state">아직 해당 골프장 리뷰가 없습니다.</div>`;
}

function reviewAverage(review) {
  const values = Object.values(review.scores);
  return values.reduce((sum, value) => sum + Number(value), 0) / values.length;
}

function reviewMetric(label, value) {
  const percent = (Number(value) / 5) * 100;
  return `
    <div class="metric-row">
      <span>${label}</span>
      <div><i style="width:${percent}%"></i></div>
      <strong>${value}</strong>
    </div>
  `;
}

function renderReviewCourseFilter() {
  const current = $("#reviewCourseFilter").value || "all";
  const courses = [...new Set(state.reviews.map((review) => review.course))].sort();
  $("#reviewCourseFilter").innerHTML = [
    `<option value="all">전체 골프장</option>`,
    ...courses.map((course) => `<option value="${course}">${course}</option>`),
  ].join("");
  $("#reviewCourseFilter").value = courses.includes(current) ? current : "all";
}

function findReview(reviewId) {
  return state.reviews.find((review) => review.id === reviewId);
}

function toggleReviewHelpful(reviewId) {
  const review = findReview(reviewId);
  if (!review) return;
  if (state.helpfulReviews.includes(reviewId)) {
    state.helpfulReviews = state.helpfulReviews.filter((id) => id !== reviewId);
    review.helpful = Math.max(0, review.helpful - 1);
  } else {
    state.helpfulReviews.push(reviewId);
    review.helpful += 1;
  }
  saveReviewData();
  renderReviews();
}

function reportReview(reviewId) {
  const review = findReview(reviewId);
  if (!review) return;
  review.reported = true;
  saveReviewData();
  renderReviews();
  alert("리뷰 신고가 접수되었습니다. 실제 앱에서는 운영자 검토로 연결됩니다.");
}

function renderWeather() {
  const featured = state.weather[0];
  $("#weatherCourse").textContent = featured.course;
  $("#weatherTemp").textContent = `${featured.temp}도`;
  $("#weatherDesc").textContent = `${featured.status}, 강수확률 ${featured.rain}`;
  const suitability = getRoundSuitability(featured);
  $("#weatherScore").textContent = suitability.label;
  $("#weatherAdvice").textContent = suitability.advice;
  $("#weatherList").innerHTML = state.weather
    .map(
      (item) => `
        <article class="card weather-card">
          <span class="meta">${item.time || "현재"} · ${item.status}</span>
          <h3>${item.course ? `${item.course} · ` : ""}${item.temp}도</h3>
          <div class="pill-row">
            <span class="pill">바람 ${item.wind}</span>
            <span class="pill">강수 ${item.rain}</span>
            <span class="pill">습도 ${item.humidity || "-"}</span>
          </div>
        </article>
      `
    )
    .join("");
}

function renderAdmin() {
  const reportedTalks = state.talks.filter((post) => post.reported);
  const reportedReviews = state.reviews.filter((review) => review.reported);
  const reports = reportedTalks.length + reportedReviews.length;

  $("#adminJobCount").textContent = state.jobs.length;
  $("#adminTalkCount").textContent = state.talks.length;
  $("#adminReviewCount").textContent = state.reviews.length;
  $("#adminReportCount").textContent = reports;
  renderAdminReports(reportedTalks, reportedReviews);
  renderAdminJobs();
  renderAdminCommunity();
}

function renderAdminReports(reportedTalks, reportedReviews) {
  const talkItems = reportedTalks.map(
    (post) => `
      <article class="admin-item">
        <span class="pill">수다방 신고</span>
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <div class="admin-actions">
          <button class="ghost-button admin-clear-talk" data-talk-id="${post.id}">신고 해제</button>
          <button class="primary-button admin-hide-talk" data-talk-id="${post.id}">숨김 처리</button>
        </div>
      </article>
    `
  );
  const reviewItems = reportedReviews.map(
    (review) => `
      <article class="admin-item">
        <span class="pill">리뷰 신고</span>
        <h3>${review.course} · ${reviewAverage(review).toFixed(1)}</h3>
        <p>${review.text}</p>
        <div class="admin-actions">
          <button class="ghost-button admin-clear-review" data-review-id="${review.id}">신고 해제</button>
          <button class="primary-button admin-hide-review" data-review-id="${review.id}">숨김 처리</button>
        </div>
      </article>
    `
  );
  $("#adminReports").innerHTML = [...talkItems, ...reviewItems].join("") || `<div class="empty-state">처리 대기 중인 신고가 없습니다.</div>`;
}

function renderAdminJobs() {
  $("#adminJobs").innerHTML = state.jobs
    .map(
      (job) => `
        <article class="admin-item">
          <span class="pill">${job.status === "hidden" ? "숨김" : "노출중"}</span>
          <h3>${job.course}</h3>
          <p>${job.region} · ${job.type} · 캐디피 ${money(job.pay)} · 월 ${job.rounds}회</p>
          <div class="admin-actions">
            <button class="ghost-button admin-toggle-job" data-job-id="${job.id}">
              ${job.status === "hidden" ? "다시 노출" : "숨김 처리"}
            </button>
            <button class="primary-button admin-open-job" data-job-id="${job.id}">상세보기</button>
          </div>
        </article>
      `
    )
    .join("");
}

function renderAdminCommunity() {
  const latestTalks = state.talks.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 5);
  $("#adminCommunity").innerHTML = latestTalks
    .map(
      (post) => `
        <article class="admin-item">
          <span class="pill">${post.category}</span>
          <h3>${post.title}</h3>
          <p>작성자 ${post.author} · 좋아요 ${post.likes} · 댓글 ${post.comments.length}</p>
          <div class="admin-actions">
            <button class="ghost-button admin-report-talk" data-talk-id="${post.id}">${post.reported ? "신고 해제" : "신고 표시"}</button>
            <button class="primary-button admin-open-talk" data-talk-id="${post.id}">댓글 보기</button>
          </div>
        </article>
      `
    )
    .join("") || `<div class="empty-state">수다방 글이 없습니다.</div>`;
}

function switchAdminPanel(panelName) {
  document.querySelectorAll(".admin-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.adminPanel === panelName);
  });
  $("#adminReports").classList.toggle("is-visible", panelName === "reports");
  $("#adminJobs").classList.toggle("is-visible", panelName === "jobs");
  $("#adminCommunity").classList.toggle("is-visible", panelName === "community");
}

function hideTalk(talkId) {
  state.talks = state.talks.filter((post) => post.id !== talkId);
  saveTalkData();
  renderTalks();
  renderAdmin();
}

function clearTalkReport(talkId) {
  const post = findTalk(talkId);
  if (!post) return;
  post.reported = false;
  saveTalkData();
  renderTalks();
  renderAdmin();
}

function hideReview(reviewId) {
  state.reviews = state.reviews.filter((review) => review.id !== reviewId);
  saveReviewData();
  renderReviews();
  renderAdmin();
}

function clearReviewReport(reviewId) {
  const review = findReview(reviewId);
  if (!review) return;
  review.reported = false;
  saveReviewData();
  renderReviews();
  renderAdmin();
}

function toggleJobVisibility(jobId) {
  const job = findJob(jobId);
  if (!job) return;
  job.status = job.status === "hidden" ? "approved" : "hidden";
  saveJobData();
  renderJobs();
  renderAdmin();
}

function renderWeatherCourses() {
  $("#weatherCourseSelect").innerHTML = state.mapCourses
    .map((course) => `<option value="${course.name}">${course.region ? `${course.region} · ` : ""}${course.name}</option>`)
    .join("");
}

function selectedWeatherCourse() {
  const selectedName = $("#weatherCourseSelect").value || state.mapCourses[0].name;
  return state.mapCourses.find((course) => course.name === selectedName) || state.mapCourses[0];
}

async function fetchGolfWeather() {
  const course = selectedWeatherCourse();
  const forecastHours = Number($("#weatherForecastHours").value || 6);
  $("#weatherCourse").textContent = course.name;
  $("#weatherTemp").textContent = "...";
  $("#weatherDesc").textContent = "실제 날씨를 불러오는 중입니다.";
  $("#weatherScore").textContent = "확인 중";
  $("#weatherAdvice").textContent = "골프장 좌표 기준으로 최신 예보를 가져오고 있습니다.";

  try {
    const url = new URL("https://api.open-meteo.com/v1/forecast");
    url.search = new URLSearchParams({
      latitude: String(course.lat),
      longitude: String(course.lng),
      current: "temperature_2m,relative_humidity_2m,apparent_temperature,precipitation,weather_code,wind_speed_10m,wind_gusts_10m",
      hourly: "temperature_2m,relative_humidity_2m,precipitation_probability,weather_code,wind_speed_10m,wind_gusts_10m",
      forecast_hours: String(forecastHours),
      timezone: "Asia/Seoul",
      wind_speed_unit: "ms",
    }).toString();

    const response = await fetch(url);
    if (!response.ok) throw new Error("weather request failed");
    const data = await response.json();
    const current = normalizeCurrentWeather(course, data.current);
    const hourly = normalizeHourlyWeather(data.hourly, forecastHours);
    state.weather = [current, ...hourly];
    renderWeather();
  } catch (error) {
    $("#weatherDesc").textContent = "날씨를 불러오지 못했습니다. 네트워크 연결을 확인해주세요.";
    $("#weatherScore").textContent = "오프라인";
    $("#weatherAdvice").textContent = "현재는 샘플 날씨를 표시합니다.";
    renderWeather();
  }
}

function normalizeCurrentWeather(course, current) {
  return {
    course: course.name,
    temp: Math.round(current.temperature_2m),
    status: weatherCodeText(current.weather_code),
    wind: `${Number(current.wind_speed_10m).toFixed(1)}m/s`,
    gust: `${Number(current.wind_gusts_10m || current.wind_speed_10m).toFixed(1)}m/s`,
    rain: `${current.precipitation > 0 ? "강수 있음" : "0%"}`,
    precipitation: current.precipitation || 0,
    humidity: `${current.relative_humidity_2m}%`,
    time: "현재",
  };
}

function normalizeHourlyWeather(hourly, limit) {
  if (!hourly?.time) return [];
  return hourly.time.slice(0, limit).map((time, index) => ({
    course: "",
    temp: Math.round(hourly.temperature_2m[index]),
    status: weatherCodeText(hourly.weather_code[index]),
    wind: `${Number(hourly.wind_speed_10m[index]).toFixed(1)}m/s`,
    gust: `${Number(hourly.wind_gusts_10m[index] || hourly.wind_speed_10m[index]).toFixed(1)}m/s`,
    rain: `${hourly.precipitation_probability[index] ?? 0}%`,
    rainProbability: hourly.precipitation_probability[index] ?? 0,
    humidity: `${hourly.relative_humidity_2m[index]}%`,
    time: formatWeatherHour(time),
  }));
}

function formatWeatherHour(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return `${String(date.getHours()).padStart(2, "0")}시`;
}

function weatherCodeText(code) {
  const codes = {
    0: "맑음",
    1: "대체로 맑음",
    2: "구름 조금",
    3: "흐림",
    45: "안개",
    48: "서리 안개",
    51: "약한 이슬비",
    53: "이슬비",
    55: "강한 이슬비",
    61: "약한 비",
    63: "비",
    65: "강한 비",
    71: "약한 눈",
    73: "눈",
    75: "강한 눈",
    80: "약한 소나기",
    81: "소나기",
    82: "강한 소나기",
    95: "뇌우",
  };
  return codes[code] || "변동";
}

function getRoundSuitability(weather) {
  const wind = Number.parseFloat(weather.wind) || 0;
  const rainProbability = weather.rainProbability ?? (weather.precipitation > 0 ? 80 : Number.parseInt(weather.rain, 10) || 0);
  const temp = Number(weather.temp) || 0;

  if (rainProbability >= 70 || wind >= 10) {
    return { label: "주의", advice: "강수나 강풍 가능성이 있어 우비와 여벌 장비를 준비하세요." };
  }
  if (rainProbability >= 40 || wind >= 6 || temp <= 3 || temp >= 32) {
    return { label: "보통", advice: "라운드는 가능하지만 바람, 체감온도, 우비 준비를 확인하세요." };
  }
  return { label: "좋음", advice: "라운드하기 무난한 조건입니다. 자외선과 수분 보충만 챙기세요." };
}

function kakaoMapUrl(place) {
  return `https://map.kakao.com/link/map/${encodeURIComponent(place.name)},${place.lat},${place.lng}`;
}

function kakaoDirectionUrl(place) {
  return `https://map.kakao.com/link/to/${encodeURIComponent(place.name)},${place.lat},${place.lng}`;
}

function selectedMapCourse() {
  const selectedName = $("#mapCourseSelect").value;
  return state.mapCourses.find((course) => course.name === selectedName) || state.mapCourses[0];
}

function renderMapCourses() {
  $("#mapCourseSelect").innerHTML = state.mapCourses
    .map((course) => `<option value="${course.name}">${course.region ? `${course.region} · ` : ""}${course.name}</option>`)
    .join("");
}

function renderRestaurantList(course, restaurants = course.restaurants, source = "sample") {
  $("#restaurantList").innerHTML = restaurants
    .map(
      (restaurant) => `
        <article class="card">
          <span class="meta">${course.name} 주변 · ${restaurant.category || restaurant.category_name || "음식점"}</span>
          <h3>${restaurant.name}</h3>
          <p>${restaurant.note || restaurant.address || restaurant.roadAddress || "카카오 장소 검색 결과입니다."}</p>
          ${
            restaurant.distance
              ? `<div class="pill-row">
                  <span class="pill">약 ${Number(restaurant.distance).toLocaleString("ko-KR")}m</span>
                  ${restaurant.phone ? `<span class="pill">${restaurant.phone}</span>` : ""}
                </div>`
              : ""
          }
          <div class="link-row">
            <a class="text-link" href="${kakaoMapUrl(restaurant)}" target="_blank" rel="noreferrer">카카오맵에서 보기</a>
            <a class="text-link" href="${kakaoDirectionUrl(restaurant)}" target="_blank" rel="noreferrer">길찾기</a>
          </div>
        </article>
      `
    )
    .join("") || `<div class="empty-state">${source === "auto" ? "자동 검색 결과가 없습니다. 반경을 넓혀보세요." : "등록된 맛집이 없습니다."}</div>`;
}

function getKakaoAppKey() {
  const typedKey = $("#kakaoKeyInput").value.trim();
  const configKey = window.CADDIEON_CONFIG?.kakaoMapAppKey?.trim();
  return typedKey || configKey || "";
}

function loadKakaoSdk(appKey) {
  if (window.kakao?.maps) {
    return new Promise((resolve) => window.kakao.maps.load(resolve));
  }

  if (mapRuntime.sdkPromise) {
    return mapRuntime.sdkPromise;
  }

  mapRuntime.sdkPromise = new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${encodeURIComponent(appKey)}&libraries=services&autoload=false`;
    script.async = true;
    script.onload = () => window.kakao.maps.load(resolve);
    script.onerror = () => reject(new Error("카카오맵 SDK를 불러오지 못했습니다."));
    document.head.appendChild(script);
  });

  return mapRuntime.sdkPromise;
}

function clearMapMarkers() {
  mapRuntime.markers.forEach((marker) => marker.setMap(null));
  mapRuntime.markers = [];
}

function clearRadiusCircle() {
  if (mapRuntime.radiusCircle) {
    mapRuntime.radiusCircle.setMap(null);
    mapRuntime.radiusCircle = null;
  }
}

function drawRadiusCircle(center, radius) {
  clearRadiusCircle();
  mapRuntime.radiusCircle = new window.kakao.maps.Circle({
    map: mapRuntime.map,
    center,
    radius,
    strokeWeight: 2,
    strokeColor: "#146c43",
    strokeOpacity: 0.7,
    strokeStyle: "solid",
    fillColor: "#146c43",
    fillOpacity: 0.08,
  });
}

function addMapMarker(place, label) {
  const position = new window.kakao.maps.LatLng(place.lat, place.lng);
  const marker = new window.kakao.maps.Marker({
    map: mapRuntime.map,
    position,
    title: place.name,
  });
  const info = new window.kakao.maps.InfoWindow({
    content: `<div style="padding:6px 9px;font-size:12px;white-space:nowrap">${label}</div>`,
  });
  window.kakao.maps.event.addListener(marker, "click", () => info.open(mapRuntime.map, marker));
  mapRuntime.markers.push(marker);
}

function searchNearbyRestaurants(course, radius) {
  return new Promise((resolve, reject) => {
    const places = new window.kakao.maps.services.Places();
    const center = new window.kakao.maps.LatLng(course.lat, course.lng);
    places.categorySearch(
      "FD6",
      (data, status) => {
        if (status === window.kakao.maps.services.Status.OK) {
          resolve(data.map(normalizeKakaoPlace));
          return;
        }
        if (status === window.kakao.maps.services.Status.ZERO_RESULT) {
          resolve([]);
          return;
        }
        reject(new Error("카카오 장소 검색에 실패했습니다."));
      },
      {
        location: center,
        radius,
        sort: window.kakao.maps.services.SortBy.DISTANCE,
      }
    );
  });
}

function normalizeKakaoPlace(place) {
  return {
    name: place.place_name,
    category: place.category_group_name || "음식점",
    category_name: place.category_name,
    lat: Number(place.y),
    lng: Number(place.x),
    address: place.address_name,
    roadAddress: place.road_address_name,
    phone: place.phone,
    distance: place.distance,
    placeUrl: place.place_url,
    note: place.road_address_name || place.address_name || "카카오 장소 검색 결과입니다.",
  };
}

async function renderKakaoMap() {
  const course = selectedMapCourse();
  const radius = Number($("#mapRadius").value || 5000);
  const limit = Number($("#mapResultLimit").value || 10);
  renderRestaurantList(course);

  const appKey = getKakaoAppKey();
  if (!appKey) {
    $("#mapStatus").textContent = "카카오맵 JavaScript 키를 입력하면 실제 지도가 표시됩니다. 아래 맛집 링크는 바로 사용할 수 있습니다.";
    return;
  }

  $("#mapStatus").textContent = "카카오맵을 불러오는 중입니다.";

  try {
    await loadKakaoSdk(appKey);
    const center = new window.kakao.maps.LatLng(course.lat, course.lng);

    if (!mapRuntime.map) {
      mapRuntime.map = new window.kakao.maps.Map($("#kakaoMap"), {
        center,
        level: 7,
      });
    } else {
      mapRuntime.map.setCenter(center);
    }

    clearMapMarkers();
    clearRadiusCircle();
    drawRadiusCircle(center, radius);
    addMapMarker(course, `${course.name} 골프장`);
    $("#mapStatus").textContent = `${course.name} 주변 음식점을 자동 검색하는 중입니다.`;

    const searchedRestaurants = (await searchNearbyRestaurants(course, radius)).slice(0, limit);
    const restaurants = searchedRestaurants.length ? searchedRestaurants : course.restaurants;
    mapRuntime.activeRestaurants = restaurants;
    mapRuntime.usingAutoSearch = searchedRestaurants.length > 0;
    restaurants.forEach((restaurant) => addMapMarker(restaurant, restaurant.name));
    renderRestaurantList(course, restaurants, searchedRestaurants.length ? "auto" : "sample");
    $("#mapStatus").textContent = searchedRestaurants.length
      ? `${course.name} 반경 ${(radius / 1000).toLocaleString("ko-KR")}km 음식점 ${searchedRestaurants.length}곳을 자동 검색했습니다.`
      : `${course.name} 주변 자동 검색 결과가 없어 추천 맛집 ${course.restaurants.length}곳을 표시했습니다.`;
  } catch (error) {
    $("#mapStatus").textContent = `지도를 불러오지 못했습니다. 카카오 개발자 콘솔에서 ${window.location.origin} 도메인 등록을 확인해주세요.`;
  }
}

function switchView(viewId) {
  document.querySelectorAll(".view").forEach((view) => {
    view.classList.toggle("is-visible", view.id === viewId);
  });
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.classList.toggle("is-active", tab.dataset.view === viewId);
  });
}

function resetForm(formId) {
  $(formId).reset();
  if (formId === "#incomeForm") {
    $("#incomeDate").valueAsDate = new Date();
  }
}

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => switchView(tab.dataset.view));
});

$("#regionFilter").addEventListener("change", renderJobs);
$("#jobTypeFilter").addEventListener("change", renderJobs);
$("#housingFilter").addEventListener("change", renderJobs);
$("#newbieFilter").addEventListener("change", renderJobs);
$("#syncJobs").addEventListener("click", () => syncJobsFromSheet());

$("#jobList").addEventListener("click", (event) => {
  const saveButton = event.target.closest(".save-job");
  const viewButton = event.target.closest(".view-job");
  const applyButton = event.target.closest(".apply-job");

  if (saveButton) {
    toggleSavedJob(saveButton.dataset.jobId);
  }
  if (viewButton) {
    openJobDetail(viewButton.dataset.jobId);
  }
  if (applyButton) {
    applyJob(applyButton.dataset.jobId);
  }
});

$("#jobDetailContent").addEventListener("click", (event) => {
  const saveButton = event.target.closest(".save-job");
  const applyButton = event.target.closest(".apply-job");

  if (saveButton) {
    toggleSavedJob(saveButton.dataset.jobId);
    openJobDetail(saveButton.dataset.jobId);
  }
  if (applyButton) {
    applyJob(applyButton.dataset.jobId);
  }
});

$("#closeJobDetail").addEventListener("click", () => {
  $("#jobDetailModal").classList.remove("is-open");
  $("#jobDetailModal").setAttribute("aria-hidden", "true");
});

$("#openJobForm").addEventListener("click", () => {
  $("#jobModal").classList.add("is-open");
  $("#jobModal").setAttribute("aria-hidden", "false");
});

$("#closeJobForm").addEventListener("click", () => {
  $("#jobModal").classList.remove("is-open");
  $("#jobModal").setAttribute("aria-hidden", "true");
});

$("#jobForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.jobs.unshift({
    id: `job-${Date.now()}`,
    source: "local",
    course: $("#jobCourse").value,
    region: $("#jobRegion").value,
    type: $("#jobType").value,
    pay: Number($("#jobPay").value),
    housing: $("#jobHousing").value,
    experience: $("#jobExperience").value,
    rounds: Number($("#jobRounds").value),
    meal: $("#jobMeal").value,
    training: $("#jobTraining").value,
    transport: $("#jobTransport").value,
    payday: $("#jobPayday").value,
    days: $("#jobDays").value,
    contact: $("#jobContact").value,
    detail: $("#jobDetail").value,
  });
  saveJobData();
  resetForm("#jobForm");
  $("#jobModal").classList.remove("is-open");
  $("#jobModal").setAttribute("aria-hidden", "true");
  renderJobs();
});

$("#addIncome").addEventListener("click", () => {
  $("#incomeForm").requestSubmit();
});

$("#incomeForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.income.push({
    date: $("#incomeDate").value,
    course: $("#incomeCourse").value,
    fee: Number($("#caddieFee").value),
    tip: Number($("#tipIncome").value),
    extra: Number($("#extraIncome").value || 0),
  });
  saveIncomeData();
  resetForm("#incomeForm");
  renderIncome();
});

$("#monthlyGoal").addEventListener("input", () => {
  state.incomeGoal = Number($("#monthlyGoal").value || 0);
  saveIncomeData();
  renderIncome();
});

$("#postTalk").addEventListener("click", () => {
  $("#talkForm").requestSubmit();
});

$("#talkCategoryFilter").addEventListener("change", renderTalks);
$("#talkSort").addEventListener("change", renderTalks);

$("#talkList").addEventListener("click", (event) => {
  const likeButton = event.target.closest(".talk-like");
  const commentButton = event.target.closest(".talk-comment");
  const reportButton = event.target.closest(".talk-report");

  if (likeButton) {
    toggleTalkLike(likeButton.dataset.talkId);
  }
  if (commentButton) {
    openTalkDetail(commentButton.dataset.talkId);
  }
  if (reportButton) {
    reportTalk(reportButton.dataset.talkId);
  }
});

$("#talkDetailContent").addEventListener("click", (event) => {
  const likeButton = event.target.closest(".talk-like");
  const reportButton = event.target.closest(".talk-report");

  if (likeButton) {
    toggleTalkLike(likeButton.dataset.talkId);
    openTalkDetail(likeButton.dataset.talkId);
  }
  if (reportButton) {
    reportTalk(reportButton.dataset.talkId);
    openTalkDetail(reportButton.dataset.talkId);
  }
});

$("#closeTalkDetail").addEventListener("click", () => {
  $("#talkDetailModal").classList.remove("is-open");
  $("#talkDetailModal").setAttribute("aria-hidden", "true");
});

$("#talkForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const authorMode = $("#talkAuthorMode").value;
  state.talks.unshift({
    id: `talk-${Date.now()}`,
    category: $("#talkCategory").value,
    title: $("#talkTitle").value,
    body: $("#talkBody").value,
    authorMode,
    author: authorMode === "anonymous" ? "익명 캐디" : state.profile.nickname,
    likes: 0,
    reported: false,
    createdAt: new Date().toISOString(),
    comments: [],
  });
  saveTalkData();
  resetForm("#talkForm");
  renderTalks();
});

$("#postReview").addEventListener("click", () => {
  $("#reviewForm").requestSubmit();
});

$("#reviewCourseFilter").addEventListener("change", renderReviews);
$("#reviewSort").addEventListener("change", renderReviews);

$("#reviewList").addEventListener("click", (event) => {
  const helpfulButton = event.target.closest(".review-helpful");
  const reportButton = event.target.closest(".review-report");

  if (helpfulButton) {
    toggleReviewHelpful(helpfulButton.dataset.reviewId);
  }
  if (reportButton) {
    reportReview(reportButton.dataset.reviewId);
  }
});

$("#reviewForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.reviews.unshift({
    id: `review-${Date.now()}`,
    course: $("#reviewCourse").value,
    scores: {
      treatment: Number($("#reviewTreatment").value),
      flow: Number($("#reviewFlow").value),
      settlement: Number($("#reviewSettlement").value),
      rest: Number($("#reviewRest").value),
      customer: Number($("#reviewCustomer").value),
    },
    newbie: $("#reviewNewbie").value,
    pros: $("#reviewPros").value,
    cons: $("#reviewCons").value,
    text: $("#reviewText").value,
    helpful: 0,
    reported: false,
    createdAt: new Date().toISOString(),
  });
  saveReviewData();
  resetForm("#reviewForm");
  renderReviews();
});

$("#refreshWeather").addEventListener("click", fetchGolfWeather);
$("#weatherCourseSelect").addEventListener("change", fetchGolfWeather);
$("#weatherForecastHours").addEventListener("change", fetchGolfWeather);

$("#refreshAdmin").addEventListener("click", renderAdmin);

document.querySelectorAll(".admin-tab").forEach((button) => {
  button.addEventListener("click", () => switchAdminPanel(button.dataset.adminPanel));
});

$("#admin").addEventListener("click", (event) => {
  const clearTalkButton = event.target.closest(".admin-clear-talk");
  const hideTalkButton = event.target.closest(".admin-hide-talk");
  const clearReviewButton = event.target.closest(".admin-clear-review");
  const hideReviewButton = event.target.closest(".admin-hide-review");
  const toggleJobButton = event.target.closest(".admin-toggle-job");
  const openJobButton = event.target.closest(".admin-open-job");
  const reportTalkButton = event.target.closest(".admin-report-talk");
  const openTalkButton = event.target.closest(".admin-open-talk");

  if (clearTalkButton) clearTalkReport(clearTalkButton.dataset.talkId);
  if (hideTalkButton) hideTalk(hideTalkButton.dataset.talkId);
  if (clearReviewButton) clearReviewReport(clearReviewButton.dataset.reviewId);
  if (hideReviewButton) hideReview(hideReviewButton.dataset.reviewId);
  if (toggleJobButton) toggleJobVisibility(toggleJobButton.dataset.jobId);
  if (openJobButton) openJobDetail(openJobButton.dataset.jobId);
  if (reportTalkButton) {
    const post = findTalk(reportTalkButton.dataset.talkId);
    if (post) {
      post.reported = !post.reported;
      saveTalkData();
      renderTalks();
      renderAdmin();
    }
  }
  if (openTalkButton) openTalkDetail(openTalkButton.dataset.talkId);
});

$("#loadKakaoMap").addEventListener("click", renderKakaoMap);
$("#mapCourseSelect").addEventListener("change", renderKakaoMap);
$("#mapRadius").addEventListener("change", renderKakaoMap);
$("#mapResultLimit").addEventListener("change", renderKakaoMap);

$("#openProfile").addEventListener("click", () => {
  renderProfile();
  $("#profileModal").classList.add("is-open");
  $("#profileModal").setAttribute("aria-hidden", "false");
});

$("#closeProfile").addEventListener("click", () => {
  $("#profileModal").classList.remove("is-open");
  $("#profileModal").setAttribute("aria-hidden", "true");
});

["#profileNickname", "#profileRegion", "#profileCareer", "#profileSkin", "#profileHair", "#profileMood"].forEach((selector) => {
  $(selector).addEventListener("input", updateProfilePreviewFromForm);
  $(selector).addEventListener("change", updateProfilePreviewFromForm);
});

document.querySelectorAll(".swatch").forEach((swatch) => {
  swatch.addEventListener("click", () => {
    state.profile.color = swatch.dataset.color;
    applyProfileColor();
    document.querySelectorAll(".swatch").forEach((item) => item.classList.remove("is-selected"));
    swatch.classList.add("is-selected");
  });
});

$("#profileForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.profile = {
    ...state.profile,
    nickname: $("#profileNickname").value.trim(),
    region: $("#profileRegion").value,
    career: $("#profileCareer").value,
    skin: $("#profileSkin").value,
    hair: $("#profileHair").value,
    mood: $("#profileMood").value,
    bio: $("#profileBio").value.trim(),
  };
  saveProfile();
  renderProfile();
  $("#profileModal").classList.remove("is-open");
  $("#profileModal").setAttribute("aria-hidden", "true");
});

loadProfile();
loadIncomeData();
loadJobData();
loadTalkData();
loadReviewData();
$("#incomeDate").valueAsDate = new Date();
$("#currentOrigin").textContent = window.location.origin;
renderProfile();
renderJobs();
syncJobsFromSheet({ silent: true });
renderIncome();
renderTalks();
renderReviews();
renderWeatherCourses();
renderWeather();
renderAdmin();
renderMapCourses();
renderRestaurantList(state.mapCourses[0]);
