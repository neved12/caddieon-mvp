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
  reels: [
    {
      id: "reel-1",
      category: "스윙자랑",
      title: "퇴근 전 드라이버 스윙 체크",
      caption: "오늘은 상체 힘 빼고 템포만 맞춰봤어요. 피드백 환영!",
      authorMode: "profile",
      author: "민구",
      videoUrl: "",
      likes: 18,
      reported: false,
      createdAt: "2026-06-13T18:20:00",
    },
    {
      id: "reel-2",
      category: "현장브이로그",
      title: "새벽 첫 티업 전 코스 분위기",
      caption: "안개 낀 페어웨이 너무 예뻐서 짧게 남겨봤어요.",
      authorMode: "anonymous",
      author: "익명 캐디",
      videoUrl: "",
      likes: 11,
      reported: false,
      createdAt: "2026-06-12T06:40:00",
    },
  ],
  likedReels: [],
  marketItems: [
    {
      id: "market-1",
      category: "캐디장비",
      title: "가벼운 캐디백 우비 세트",
      description: "비 오는 날 두 번 사용했어요. 방수 잘 되고 상태 깨끗합니다.",
      price: 45000,
      region: "경기 용인",
      imageUrl: "",
      status: "판매중",
      seller: "민구",
      chats: 3,
      createdAt: "2026-06-13T16:10:00",
    },
    {
      id: "market-2",
      category: "골프용품",
      title: "거리측정기 케이스 포함",
      description: "새 모델로 바꾸면서 정리합니다. 작동 문제 없고 직거래 선호해요.",
      price: 120000,
      region: "강원 원주",
      imageUrl: "",
      status: "예약중",
      seller: "익명 캐디",
      chats: 7,
      createdAt: "2026-06-12T20:30:00",
    },
  ],
  supportRequests: [
    {
      id: "support-1",
      type: "반영 요청",
      title: "골프장 리뷰에 사진도 올릴 수 있으면 좋겠어요",
      body: "휴게실이나 식사 사진을 같이 남기면 신입 캐디들이 더 참고하기 좋을 것 같아요.",
      contact: "카톡 cadion-user",
      author: "민구",
      status: "접수",
      createdAt: "2026-06-13T19:00:00",
    },
  ],
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
    memberType: "caddie",
    region: "경기",
    career: "3년차 캐디",
    skin: "#f4c7a1",
    hair: "bob",
    mood: "smile",
    color: "#146c43",
    bio: "밝고 꼼꼼한 라운드 파트너",
  },
};

// Generated from OpenStreetMap Overpass data. Review names/coordinates before production use.
window.CADDIEON_GOLF_COURSES = [
  {
    "name": "대호단양CC",
    "region": "강원",
    "lat": 37.087405,
    "lng": 128.275907,
    "restaurants": []
  },
  {
    "name": "버치힐CC",
    "region": "강원",
    "lat": 37.655629,
    "lng": 128.705939,
    "restaurants": []
  },
  {
    "name": "블랙밸리CC",
    "region": "강원",
    "lat": 37.222935,
    "lng": 129.066017,
    "restaurants": []
  },
  {
    "name": "샌드파인GC",
    "region": "강원",
    "lat": 37.799838,
    "lng": 128.881059,
    "restaurants": []
  },
  {
    "name": "설악썬밸리CC",
    "region": "강원",
    "lat": 38.313782,
    "lng": 128.502474,
    "restaurants": []
  },
  {
    "name": "세이지우드CC 홍천",
    "region": "강원",
    "lat": 37.882725,
    "lng": 128.117506,
    "restaurants": []
  },
  {
    "name": "소노펠리체CC 델피노",
    "region": "강원",
    "lat": 38.210257,
    "lng": 128.492461,
    "restaurants": []
  },
  {
    "name": "알펜시아 트룬CC",
    "region": "강원",
    "lat": 37.653583,
    "lng": 128.657891,
    "restaurants": []
  },
  {
    "name": "알펜시아700GC",
    "region": "강원",
    "lat": 37.662853,
    "lng": 128.688347,
    "restaurants": []
  },
  {
    "name": "알프스대영CC",
    "region": "강원",
    "lat": 37.464677,
    "lng": 128.072336,
    "restaurants": []
  },
  {
    "name": "에콜리안 정선CC",
    "region": "강원",
    "lat": 37.222716,
    "lng": 128.683546,
    "restaurants": []
  },
  {
    "name": "에콜리안제천CC",
    "region": "강원",
    "lat": 37.172829,
    "lng": 128.238372,
    "restaurants": []
  },
  {
    "name": "오투리조트 CC",
    "region": "강원",
    "lat": 37.157905,
    "lng": 128.948626,
    "restaurants": []
  },
  {
    "name": "용평나인 GC",
    "region": "강원",
    "lat": 37.644613,
    "lng": 128.689545,
    "restaurants": []
  },
  {
    "name": "용평CC",
    "region": "강원",
    "lat": 37.648412,
    "lng": 128.704311,
    "restaurants": []
  },
  {
    "name": "웰리힐리CC",
    "region": "강원",
    "lat": 37.48084,
    "lng": 128.236353,
    "restaurants": []
  },
  {
    "name": "인터불고GC(퍼블릭)",
    "region": "강원",
    "lat": 37.331251,
    "lng": 127.976147,
    "restaurants": []
  },
  {
    "name": "정선군 파크 골프장",
    "region": "강원",
    "lat": 37.385069,
    "lng": 128.668884,
    "restaurants": []
  },
  {
    "name": "중원GC",
    "region": "강원",
    "lat": 37.069071,
    "lng": 127.991831,
    "restaurants": []
  },
  {
    "name": "탑스텐리조트 동강시스타CC",
    "region": "강원",
    "lat": 37.214668,
    "lng": 128.511688,
    "restaurants": []
  },
  {
    "name": "태기산CC",
    "region": "강원",
    "lat": 37.584916,
    "lng": 128.319322,
    "restaurants": []
  },
  {
    "name": "파인리즈CC",
    "region": "강원",
    "lat": 38.248616,
    "lng": 128.542536,
    "restaurants": []
  },
  {
    "name": "파인밸리CC",
    "region": "강원",
    "lat": 37.373914,
    "lng": 129.206971,
    "restaurants": []
  },
  {
    "name": "파크밸리GC",
    "region": "강원",
    "lat": 37.393089,
    "lng": 128.010256,
    "restaurants": []
  },
  {
    "name": "플라자CC 설악",
    "region": "강원",
    "lat": 38.210849,
    "lng": 128.538595,
    "restaurants": []
  },
  {
    "name": "하이망 CC점",
    "region": "강원",
    "lat": 37.175634,
    "lng": 128.462771,
    "restaurants": []
  },
  {
    "name": "하이원CC",
    "region": "강원",
    "lat": 37.173701,
    "lng": 128.845403,
    "restaurants": []
  },
  {
    "name": "휘닉스평창 CC",
    "region": "강원",
    "lat": 37.588214,
    "lng": 128.337445,
    "restaurants": []
  },
  {
    "name": "360도CC",
    "region": "경기",
    "lat": 37.297094,
    "lng": 127.73594,
    "restaurants": []
  },
  {
    "name": "가평베네스트GC",
    "region": "경기",
    "lat": 37.800514,
    "lng": 127.30444,
    "restaurants": []
  },
  {
    "name": "감곡CC",
    "region": "경기",
    "lat": 37.129414,
    "lng": 127.697424,
    "restaurants": []
  },
  {
    "name": "강남300CC",
    "region": "경기",
    "lat": 37.383911,
    "lng": 127.181591,
    "restaurants": []
  },
  {
    "name": "경기경찰청CC",
    "region": "경기",
    "lat": 37.300794,
    "lng": 127.131404,
    "restaurants": []
  },
  {
    "name": "곤지암GC",
    "region": "경기",
    "lat": 37.329861,
    "lng": 127.298317,
    "restaurants": []
  },
  {
    "name": "골프클럽Q",
    "region": "경기",
    "lat": 37.046189,
    "lng": 127.391094,
    "restaurants": []
  },
  {
    "name": "그라운드 골프장",
    "region": "경기",
    "lat": 36.993289,
    "lng": 126.917055,
    "restaurants": []
  },
  {
    "name": "그린골프클럽",
    "region": "경기",
    "lat": 37.817645,
    "lng": 127.146367,
    "restaurants": []
  },
  {
    "name": "그린힐골프클럽",
    "region": "경기",
    "lat": 37.621416,
    "lng": 127.310937,
    "restaurants": []
  },
  {
    "name": "그린힐CC",
    "region": "경기",
    "lat": 37.359153,
    "lng": 127.432369,
    "restaurants": []
  },
  {
    "name": "글렌로스CC",
    "region": "경기",
    "lat": 37.294571,
    "lng": 127.181017,
    "restaurants": []
  },
  {
    "name": "금강CC",
    "region": "경기",
    "lat": 37.240168,
    "lng": 127.600943,
    "restaurants": []
  },
  {
    "name": "기흥CC",
    "region": "경기",
    "lat": 37.19307,
    "lng": 127.147699,
    "restaurants": []
  },
  {
    "name": "남부CC",
    "region": "경기",
    "lat": 37.262912,
    "lng": 127.125289,
    "restaurants": []
  },
  {
    "name": "남서울cc",
    "region": "경기",
    "lat": 37.382225,
    "lng": 127.084293,
    "restaurants": []
  },
  {
    "name": "남수원CC",
    "region": "경기",
    "lat": 37.217143,
    "lng": 127.00657,
    "restaurants": []
  },
  {
    "name": "남여주GC",
    "region": "경기",
    "lat": 37.224003,
    "lng": 127.627938,
    "restaurants": []
  },
  {
    "name": "남촌CC",
    "region": "경기",
    "lat": 37.35153,
    "lng": 127.418898,
    "restaurants": []
  },
  {
    "name": "남춘천CC",
    "region": "경기",
    "lat": 37.790866,
    "lng": 127.692048,
    "restaurants": []
  },
  {
    "name": "노스팜CC",
    "region": "경기",
    "lat": 37.786321,
    "lng": 126.912041,
    "restaurants": []
  },
  {
    "name": "뉴스프링빌CC 이천",
    "region": "경기",
    "lat": 37.156814,
    "lng": 127.423422,
    "restaurants": []
  },
  {
    "name": "대영베이스컨트리클럽",
    "region": "경기",
    "lat": 36.946128,
    "lng": 127.835632,
    "restaurants": []
  },
  {
    "name": "대영힐스컨트리클럽",
    "region": "경기",
    "lat": 36.951886,
    "lng": 127.854062,
    "restaurants": []
  },
  {
    "name": "더스타휴 골프앤리조트",
    "region": "경기",
    "lat": 37.475985,
    "lng": 127.700463,
    "restaurants": []
  },
  {
    "name": "더크로스비 골프클럽",
    "region": "경기",
    "lat": 37.23272,
    "lng": 127.414023,
    "restaurants": []
  },
  {
    "name": "더플레이어스GC",
    "region": "경기",
    "lat": 37.776187,
    "lng": 127.748891,
    "restaurants": []
  },
  {
    "name": "동서울골프클럽",
    "region": "경기",
    "lat": 37.471617,
    "lng": 127.337559,
    "restaurants": []
  },
  {
    "name": "동서울레스피아 골프&리조트",
    "region": "경기",
    "lat": 37.401103,
    "lng": 127.875593,
    "restaurants": []
  },
  {
    "name": "동여주CC",
    "region": "경기",
    "lat": 37.218455,
    "lng": 127.617481,
    "restaurants": []
  },
  {
    "name": "동원썬밸리CC",
    "region": "경기",
    "lat": 37.483983,
    "lng": 127.789389,
    "restaurants": []
  },
  {
    "name": "동촌GC",
    "region": "경기",
    "lat": 37.05512,
    "lng": 127.744255,
    "restaurants": []
  },
  {
    "name": "라데나 골프 클럽",
    "region": "경기",
    "lat": 37.840123,
    "lng": 127.723201,
    "restaurants": []
  },
  {
    "name": "라데나 골프 클럽 클럽하우스",
    "region": "경기",
    "lat": 37.841172,
    "lng": 127.718732,
    "restaurants": []
  },
  {
    "name": "라비돌CC",
    "region": "경기",
    "lat": 37.188927,
    "lng": 126.985201,
    "restaurants": []
  },
  {
    "name": "라비에벨CC",
    "region": "경기",
    "lat": 37.741627,
    "lng": 127.763474,
    "restaurants": []
  },
  {
    "name": "레이크 골프 클럽",
    "region": "경기",
    "lat": 37.250196,
    "lng": 127.087878,
    "restaurants": []
  },
  {
    "name": "레이크사이드CC",
    "region": "경기",
    "lat": 37.310121,
    "lng": 127.172072,
    "restaurants": []
  },
  {
    "name": "레이크우드컨트리클럽",
    "region": "경기",
    "lat": 37.780658,
    "lng": 127.088212,
    "restaurants": []
  },
  {
    "name": "레이크힐스용인CC",
    "region": "경기",
    "lat": 37.130093,
    "lng": 127.183707,
    "restaurants": []
  },
  {
    "name": "레인보우힐스CC",
    "region": "경기",
    "lat": 37.025762,
    "lng": 127.648693,
    "restaurants": []
  },
  {
    "name": "렉스필드CC",
    "region": "경기",
    "lat": 37.403215,
    "lng": 127.421509,
    "restaurants": []
  },
  {
    "name": "로드힐스CC",
    "region": "경기",
    "lat": 37.740024,
    "lng": 127.72495,
    "restaurants": []
  },
  {
    "name": "로얄포레컨트리클럽",
    "region": "경기",
    "lat": 36.994811,
    "lng": 127.677782,
    "restaurants": []
  },
  {
    "name": "루나힐스안성컨트리클럽",
    "region": "경기",
    "lat": 37.119096,
    "lng": 127.268208,
    "restaurants": []
  },
  {
    "name": "루트52컨트리클럽",
    "region": "경기",
    "lat": 37.347734,
    "lng": 127.723847,
    "restaurants": []
  },
  {
    "name": "리버 벤드 골프장",
    "region": "경기",
    "lat": 36.972827,
    "lng": 126.989044,
    "restaurants": []
  },
  {
    "name": "리베라CC",
    "region": "경기",
    "lat": 37.190227,
    "lng": 127.107741,
    "restaurants": []
  },
  {
    "name": "리앤리CC",
    "region": "경기",
    "lat": 37.875459,
    "lng": 127.363786,
    "restaurants": []
  },
  {
    "name": "마론뉴데이CC",
    "region": "경기",
    "lat": 36.865806,
    "lng": 127.256553,
    "restaurants": []
  },
  {
    "name": "마에스트로CC",
    "region": "경기",
    "lat": 37.104613,
    "lng": 127.262572,
    "restaurants": []
  },
  {
    "name": "마이다스레이크이천 골프앤리조트",
    "region": "경기",
    "lat": 37.173379,
    "lng": 127.523713,
    "restaurants": []
  },
  {
    "name": "모나크CC",
    "region": "경기",
    "lat": 37.007317,
    "lng": 127.627227,
    "restaurants": []
  },
  {
    "name": "몽베르CC",
    "region": "경기",
    "lat": 38.082619,
    "lng": 127.306082,
    "restaurants": []
  },
  {
    "name": "베뉴지CC",
    "region": "경기",
    "lat": 37.847784,
    "lng": 127.467414,
    "restaurants": []
  },
  {
    "name": "베어크리크GC 춘천",
    "region": "경기",
    "lat": 37.768816,
    "lng": 127.719923,
    "restaurants": []
  },
  {
    "name": "블랙스톤 벨포레CC",
    "region": "경기",
    "lat": 36.844978,
    "lng": 127.587319,
    "restaurants": []
  },
  {
    "name": "블랙스톤이천GC",
    "region": "경기",
    "lat": 37.165972,
    "lng": 127.618165,
    "restaurants": []
  },
  {
    "name": "블루버드CC",
    "region": "경기",
    "lat": 37.384789,
    "lng": 127.368473,
    "restaurants": []
  },
  {
    "name": "블루원 용인CC",
    "region": "경기",
    "lat": 37.129561,
    "lng": 127.321909,
    "restaurants": []
  },
  {
    "name": "블루헤런GC",
    "region": "경기",
    "lat": 37.383247,
    "lng": 127.646519,
    "restaurants": []
  },
  {
    "name": "비에이비스타CC",
    "region": "경기",
    "lat": 37.179193,
    "lng": 127.417682,
    "restaurants": []
  },
  {
    "name": "비콘힐스골프클럽",
    "region": "경기",
    "lat": 37.624531,
    "lng": 127.868793,
    "restaurants": []
  },
  {
    "name": "빅토리아CC",
    "region": "경기",
    "lat": 37.179057,
    "lng": 127.630212,
    "restaurants": []
  },
  {
    "name": "사우스스프링스CC",
    "region": "경기",
    "lat": 37.175833,
    "lng": 127.45682,
    "restaurants": []
  },
  {
    "name": "샤인데일골프리조트",
    "region": "경기",
    "lat": 37.674564,
    "lng": 127.565133,
    "restaurants": []
  },
  {
    "name": "샴발라CC",
    "region": "경기",
    "lat": 37.866715,
    "lng": 127.258768,
    "restaurants": []
  },
  {
    "name": "서안성골프클럽",
    "region": "경기",
    "lat": 37.061791,
    "lng": 127.141587,
    "restaurants": []
  },
  {
    "name": "서원힐스CC",
    "region": "경기",
    "lat": 37.817919,
    "lng": 126.903085,
    "restaurants": []
  },
  {
    "name": "서이천 골프 클럽",
    "region": "경기",
    "lat": 37.294604,
    "lng": 127.4065,
    "restaurants": []
  },
  {
    "name": "서창퍼블릭골프장",
    "region": "경기",
    "lat": 37.362836,
    "lng": 127.165924,
    "restaurants": []
  },
  {
    "name": "서평택골프클럽 파3골프장",
    "region": "경기",
    "lat": 36.992259,
    "lng": 126.859041,
    "restaurants": []
  },
  {
    "name": "성문안 컨트리클럽",
    "region": "경기",
    "lat": 37.395594,
    "lng": 127.833084,
    "restaurants": []
  },
  {
    "name": "성문안CC",
    "region": "경기",
    "lat": 37.398439,
    "lng": 127.833873,
    "restaurants": []
  },
  {
    "name": "세라지오CC",
    "region": "경기",
    "lat": 37.327764,
    "lng": 127.657642,
    "restaurants": []
  },
  {
    "name": "세일골프클럽",
    "region": "경기",
    "lat": 37.021167,
    "lng": 127.675384,
    "restaurants": []
  },
  {
    "name": "세일CC",
    "region": "경기",
    "lat": 37.025909,
    "lng": 127.672983,
    "restaurants": []
  },
  {
    "name": "세현CC",
    "region": "경기",
    "lat": 37.188054,
    "lng": 127.189103,
    "restaurants": []
  },
  {
    "name": "센추리21CC",
    "region": "경기",
    "lat": 37.282718,
    "lng": 127.851417,
    "restaurants": []
  },
  {
    "name": "소노펠리체CC 비발디파크 EAST",
    "region": "경기",
    "lat": 37.663476,
    "lng": 127.686123,
    "restaurants": []
  },
  {
    "name": "소노펠리체CC 비발디파크 WEST",
    "region": "경기",
    "lat": 37.640268,
    "lng": 127.677063,
    "restaurants": []
  },
  {
    "name": "소피아그린CC",
    "region": "경기",
    "lat": 37.178243,
    "lng": 127.704462,
    "restaurants": []
  },
  {
    "name": "솔모로CC",
    "region": "경기",
    "lat": 37.191252,
    "lng": 127.588675,
    "restaurants": []
  },
  {
    "name": "송추CC",
    "region": "경기",
    "lat": 37.796816,
    "lng": 126.910516,
    "restaurants": []
  },
  {
    "name": "수원CC",
    "region": "경기",
    "lat": 37.280492,
    "lng": 127.123103,
    "restaurants": []
  },
  {
    "name": "스카이밸리CC",
    "region": "경기",
    "lat": 37.332335,
    "lng": 127.728076,
    "restaurants": []
  },
  {
    "name": "스타CC",
    "region": "경기",
    "lat": 37.083932,
    "lng": 127.699719,
    "restaurants": []
  },
  {
    "name": "시그너스CC",
    "region": "경기",
    "lat": 37.174976,
    "lng": 127.735533,
    "restaurants": []
  },
  {
    "name": "신라CC",
    "region": "경기",
    "lat": 37.361471,
    "lng": 127.697606,
    "restaurants": []
  },
  {
    "name": "신세대골프클럽",
    "region": "경기",
    "lat": 37.39628,
    "lng": 126.968234,
    "restaurants": []
  },
  {
    "name": "신안CC",
    "region": "경기",
    "lat": 37.094595,
    "lng": 127.248032,
    "restaurants": []
  },
  {
    "name": "신원CC",
    "region": "경기",
    "lat": 37.181478,
    "lng": 127.245735,
    "restaurants": []
  },
  {
    "name": "써닝포인트CC",
    "region": "경기",
    "lat": 37.144234,
    "lng": 127.421587,
    "restaurants": []
  },
  {
    "name": "썬밸리CC",
    "region": "경기",
    "lat": 37.040188,
    "lng": 127.463853,
    "restaurants": []
  },
  {
    "name": "썬힐GC",
    "region": "경기",
    "lat": 37.874681,
    "lng": 127.347981,
    "restaurants": []
  },
  {
    "name": "아난티 중앙 골프클럽",
    "region": "경기",
    "lat": 36.937556,
    "lng": 127.339226,
    "restaurants": []
  },
  {
    "name": "아난티클럽 서울",
    "region": "경기",
    "lat": 37.620453,
    "lng": 127.481741,
    "restaurants": []
  },
  {
    "name": "아리지CC",
    "region": "경기",
    "lat": 37.215401,
    "lng": 127.596469,
    "restaurants": []
  },
  {
    "name": "아산CC",
    "region": "경기",
    "lat": 36.843205,
    "lng": 127.014956,
    "restaurants": []
  },
  {
    "name": "아시아나CC",
    "region": "경기",
    "lat": 37.255847,
    "lng": 127.281209,
    "restaurants": []
  },
  {
    "name": "안성베네스트골프클럽",
    "region": "경기",
    "lat": 37.020333,
    "lng": 127.385543,
    "restaurants": []
  },
  {
    "name": "안성CC",
    "region": "경기",
    "lat": 37.037653,
    "lng": 127.405396,
    "restaurants": []
  },
  {
    "name": "안양 컨트리클럽",
    "region": "경기",
    "lat": 37.337636,
    "lng": 126.941756,
    "restaurants": []
  },
  {
    "name": "양주CC",
    "region": "경기",
    "lat": 37.64312,
    "lng": 127.354115,
    "restaurants": []
  },
  {
    "name": "양지파인CC",
    "region": "경기",
    "lat": 37.215257,
    "lng": 127.294183,
    "restaurants": []
  },
  {
    "name": "양평TPC골프클럽",
    "region": "경기",
    "lat": 37.413668,
    "lng": 127.645456,
    "restaurants": []
  },
  {
    "name": "에덴블루CC",
    "region": "경기",
    "lat": 37.054566,
    "lng": 127.387608,
    "restaurants": []
  },
  {
    "name": "에이치원클럽",
    "region": "경기",
    "lat": 37.185041,
    "lng": 127.399364,
    "restaurants": []
  },
  {
    "name": "여주썬밸리CC",
    "region": "경기",
    "lat": 37.268771,
    "lng": 127.733913,
    "restaurants": []
  },
  {
    "name": "오너스GC",
    "region": "경기",
    "lat": 37.771572,
    "lng": 127.658254,
    "restaurants": []
  },
  {
    "name": "오크밸리스골프장 코스구역",
    "region": "경기",
    "lat": 37.415934,
    "lng": 127.82121,
    "restaurants": []
  },
  {
    "name": "오크밸리CC",
    "region": "경기",
    "lat": 37.426802,
    "lng": 127.821051,
    "restaurants": []
  },
  {
    "name": "오크힐스CC",
    "region": "경기",
    "lat": 37.406437,
    "lng": 127.811915,
    "restaurants": []
  },
  {
    "name": "옥스필드CC",
    "region": "경기",
    "lat": 37.520133,
    "lng": 127.846836,
    "restaurants": []
  },
  {
    "name": "용인플라자CC",
    "region": "경기",
    "lat": 37.133815,
    "lng": 127.140815,
    "restaurants": []
  },
  {
    "name": "용인CC",
    "region": "경기",
    "lat": 37.112499,
    "lng": 127.345154,
    "restaurants": []
  },
  {
    "name": "원더클럽 파가니카CC",
    "region": "경기",
    "lat": 37.752322,
    "lng": 127.613916,
    "restaurants": []
  },
  {
    "name": "웰링턴CC",
    "region": "경기",
    "lat": 37.166336,
    "lng": 127.424215,
    "restaurants": []
  },
  {
    "name": "윈체스트GC",
    "region": "경기",
    "lat": 36.961088,
    "lng": 127.288007,
    "restaurants": []
  },
  {
    "name": "은화삼CC",
    "region": "경기",
    "lat": 37.215851,
    "lng": 127.219758,
    "restaurants": []
  },
  {
    "name": "이글골프장",
    "region": "경기",
    "lat": 36.991032,
    "lng": 126.922549,
    "restaurants": []
  },
  {
    "name": "이글몬트CC",
    "region": "경기",
    "lat": 37.095723,
    "lng": 127.327414,
    "restaurants": []
  },
  {
    "name": "이스트밸리CC",
    "region": "경기",
    "lat": 37.406857,
    "lng": 127.384769,
    "restaurants": []
  },
  {
    "name": "이천실크밸리GC",
    "region": "경기",
    "lat": 37.081253,
    "lng": 127.574023,
    "restaurants": []
  },
  {
    "name": "이포CC",
    "region": "경기",
    "lat": 37.389639,
    "lng": 127.49828,
    "restaurants": []
  },
  {
    "name": "일동레이크GC",
    "region": "경기",
    "lat": 37.930022,
    "lng": 127.317815,
    "restaurants": []
  },
  {
    "name": "일레븐CC",
    "region": "경기",
    "lat": 37.091391,
    "lng": 127.738501,
    "restaurants": []
  },
  {
    "name": "임페리얼레이크CC",
    "region": "경기",
    "lat": 37.02713,
    "lng": 127.869237,
    "restaurants": []
  },
  {
    "name": "자유CC",
    "region": "경기",
    "lat": 37.208566,
    "lng": 127.567865,
    "restaurants": []
  },
  {
    "name": "장현그린골프클럽",
    "region": "경기",
    "lat": 37.728275,
    "lng": 127.177417,
    "restaurants": []
  },
  {
    "name": "젠스필드CC",
    "region": "경기",
    "lat": 37.039085,
    "lng": 127.520063,
    "restaurants": []
  },
  {
    "name": "조광컨트리(Jogwang Country)",
    "region": "경기",
    "lat": 37.403732,
    "lng": 127.212427,
    "restaurants": []
  },
  {
    "name": "조일프라자골프클럽",
    "region": "경기",
    "lat": 37.234113,
    "lng": 127.15586,
    "restaurants": []
  },
  {
    "name": "중부CC",
    "region": "경기",
    "lat": 37.334708,
    "lng": 127.351271,
    "restaurants": []
  },
  {
    "name": "지산CC",
    "region": "경기",
    "lat": 37.215803,
    "lng": 127.33284,
    "restaurants": []
  },
  {
    "name": "진양밸리GC",
    "region": "경기",
    "lat": 37.029816,
    "lng": 127.465822,
    "restaurants": []
  },
  {
    "name": "참밸리CC",
    "region": "경기",
    "lat": 37.86482,
    "lng": 127.132069,
    "restaurants": []
  },
  {
    "name": "처인CC",
    "region": "경기",
    "lat": 37.171018,
    "lng": 127.221181,
    "restaurants": []
  },
  {
    "name": "천룡CC",
    "region": "경기",
    "lat": 36.948564,
    "lng": 127.38808,
    "restaurants": []
  },
  {
    "name": "청평마이다스CC",
    "region": "경기",
    "lat": 37.664824,
    "lng": 127.455786,
    "restaurants": []
  },
  {
    "name": "캐슬파인GC",
    "region": "경기",
    "lat": 37.300717,
    "lng": 127.744562,
    "restaurants": []
  },
  {
    "name": "코리아 CC",
    "region": "경기",
    "lat": 37.220252,
    "lng": 127.154446,
    "restaurants": []
  },
  {
    "name": "코리아CC 퍼블릭코스",
    "region": "경기",
    "lat": 37.223554,
    "lng": 127.12413,
    "restaurants": []
  },
  {
    "name": "코스카CC",
    "region": "경기",
    "lat": 36.93,
    "lng": 127.622358,
    "restaurants": []
  },
  {
    "name": "크리스탈밸리 골프클럽",
    "region": "경기",
    "lat": 37.794122,
    "lng": 127.387508,
    "restaurants": []
  },
  {
    "name": "클럽모우CC",
    "region": "경기",
    "lat": 37.693284,
    "lng": 127.565899,
    "restaurants": []
  },
  {
    "name": "클럽비전힐스CC",
    "region": "경기",
    "lat": 37.641471,
    "lng": 127.269747,
    "restaurants": []
  },
  {
    "name": "킹스데일CC",
    "region": "경기",
    "lat": 37.01911,
    "lng": 127.814098,
    "restaurants": []
  },
  {
    "name": "타이거CC",
    "region": "경기",
    "lat": 37.923967,
    "lng": 126.892052,
    "restaurants": []
  },
  {
    "name": "태광CC",
    "region": "경기",
    "lat": 37.28385,
    "lng": 127.086835,
    "restaurants": []
  },
  {
    "name": "트리니티클럽",
    "region": "경기",
    "lat": 37.20776,
    "lng": 127.576607,
    "restaurants": []
  },
  {
    "name": "티클라우드CC",
    "region": "경기",
    "lat": 37.965442,
    "lng": 127.088159,
    "restaurants": []
  },
  {
    "name": "파나시아골프클럽",
    "region": "경기",
    "lat": 36.886099,
    "lng": 126.790644,
    "restaurants": []
  },
  {
    "name": "파인크리크CC",
    "region": "경기",
    "lat": 37.093209,
    "lng": 127.231724,
    "restaurants": []
  },
  {
    "name": "파인허스트골프클럽",
    "region": "경기",
    "lat": 36.840014,
    "lng": 127.044493,
    "restaurants": []
  },
  {
    "name": "파인힐클럽하우스",
    "region": "경기",
    "lat": 37.189543,
    "lng": 127.038319,
    "restaurants": []
  },
  {
    "name": "파주CC",
    "region": "경기",
    "lat": 37.843101,
    "lng": 126.904023,
    "restaurants": []
  },
  {
    "name": "페럼클럽",
    "region": "경기",
    "lat": 37.20921,
    "lng": 127.684517,
    "restaurants": []
  },
  {
    "name": "포레스트CC",
    "region": "경기",
    "lat": 37.87407,
    "lng": 127.27177,
    "restaurants": []
  },
  {
    "name": "포천 아도니스CC",
    "region": "경기",
    "lat": 37.968002,
    "lng": 127.17039,
    "restaurants": []
  },
  {
    "name": "포천힐스 CC",
    "region": "경기",
    "lat": 37.885897,
    "lng": 127.240137,
    "restaurants": []
  },
  {
    "name": "포천GC",
    "region": "경기",
    "lat": 37.841113,
    "lng": 127.237888,
    "restaurants": []
  },
  {
    "name": "프리스턴벨리 CC",
    "region": "경기",
    "lat": 37.655542,
    "lng": 127.453093,
    "restaurants": []
  },
  {
    "name": "필로스CC",
    "region": "경기",
    "lat": 37.938232,
    "lng": 127.331192,
    "restaurants": []
  },
  {
    "name": "한림광릉CC(회원제)",
    "region": "경기",
    "lat": 37.757406,
    "lng": 127.243684,
    "restaurants": []
  },
  {
    "name": "한림안성CC",
    "region": "경기",
    "lat": 37.085757,
    "lng": 127.198196,
    "restaurants": []
  },
  {
    "name": "한성CC",
    "region": "경기",
    "lat": 37.310303,
    "lng": 127.11774,
    "restaurants": []
  },
  {
    "name": "한원컨트리클럽",
    "region": "경기",
    "lat": 37.15951,
    "lng": 127.133417,
    "restaurants": []
  },
  {
    "name": "한탄강CC",
    "region": "경기",
    "lat": 38.166121,
    "lng": 127.292156,
    "restaurants": []
  },
  {
    "name": "해비치CC",
    "region": "경기",
    "lat": 37.613433,
    "lng": 127.297695,
    "restaurants": []
  },
  {
    "name": "해솔리아CC",
    "region": "경기",
    "lat": 37.207944,
    "lng": 127.189159,
    "restaurants": []
  },
  {
    "name": "해슬리나인브릿지CC",
    "region": "경기",
    "lat": 37.253951,
    "lng": 127.6165,
    "restaurants": []
  },
  {
    "name": "화산CC",
    "region": "경기",
    "lat": 37.152644,
    "lng": 127.235163,
    "restaurants": []
  },
  {
    "name": "화성상록GC",
    "region": "경기",
    "lat": 37.193515,
    "lng": 127.131081,
    "restaurants": []
  },
  {
    "name": "휘슬링락CC",
    "region": "경기",
    "lat": 37.766486,
    "lng": 127.674452,
    "restaurants": []
  },
  {
    "name": "히든밸리골프클럽",
    "region": "경기",
    "lat": 36.908581,
    "lng": 127.308876,
    "restaurants": []
  },
  {
    "name": "힐드로사이CC",
    "region": "경기",
    "lat": 37.593727,
    "lng": 127.710424,
    "restaurants": []
  },
  {
    "name": "SG아름다운CC",
    "region": "경기",
    "lat": 36.845354,
    "lng": 126.919398,
    "restaurants": []
  },
  {
    "name": "YJC골프클럽",
    "region": "경기",
    "lat": 37.279495,
    "lng": 127.601465,
    "restaurants": []
  },
  {
    "name": "가야CC",
    "region": "경상",
    "lat": 35.272993,
    "lng": 128.898578,
    "restaurants": []
  },
  {
    "name": "거제뷰CC",
    "region": "경상",
    "lat": 34.879209,
    "lng": 128.589059,
    "restaurants": []
  },
  {
    "name": "경주신라CC",
    "region": "경상",
    "lat": 35.855628,
    "lng": 129.285738,
    "restaurants": []
  },
  {
    "name": "경주CC",
    "region": "경상",
    "lat": 35.865944,
    "lng": 129.260519,
    "restaurants": []
  },
  {
    "name": "고령오펠GC",
    "region": "경상",
    "lat": 35.81455,
    "lng": 128.380644,
    "restaurants": []
  },
  {
    "name": "고성노벨CC",
    "region": "경상",
    "lat": 35.067445,
    "lng": 128.40664,
    "restaurants": []
  },
  {
    "name": "고성CC",
    "region": "경상",
    "lat": 34.945416,
    "lng": 128.356458,
    "restaurants": []
  },
  {
    "name": "골드그린GC",
    "region": "경상",
    "lat": 35.507501,
    "lng": 129.074324,
    "restaurants": []
  },
  {
    "name": "골프장",
    "region": "경상",
    "lat": 35.90503,
    "lng": 128.848029,
    "restaurants": []
  },
  {
    "name": "구니컨트리클럽",
    "region": "경상",
    "lat": 36.252519,
    "lng": 128.545342,
    "restaurants": []
  },
  {
    "name": "구미CC",
    "region": "경상",
    "lat": 36.168264,
    "lng": 128.483423,
    "restaurants": []
  },
  {
    "name": "구평골프클럽",
    "region": "경상",
    "lat": 36.088429,
    "lng": 128.431621,
    "restaurants": []
  },
  {
    "name": "군위오펠GC",
    "region": "경상",
    "lat": 36.114917,
    "lng": 128.682261,
    "restaurants": []
  },
  {
    "name": "그랜드 골프클럽",
    "region": "경상",
    "lat": 35.21678,
    "lng": 128.696049,
    "restaurants": []
  },
  {
    "name": "기장동원로얄컨트리클럽",
    "region": "경상",
    "lat": 35.257398,
    "lng": 129.189395,
    "restaurants": []
  },
  {
    "name": "김해상록GC",
    "region": "경상",
    "lat": 35.273503,
    "lng": 128.796875,
    "restaurants": []
  },
  {
    "name": "남안동컨트리클럽",
    "region": "경상",
    "lat": 36.473815,
    "lng": 128.61206,
    "restaurants": []
  },
  {
    "name": "다이아몬드CC",
    "region": "경상",
    "lat": 35.423314,
    "lng": 129.031568,
    "restaurants": []
  },
  {
    "name": "대가야CC",
    "region": "경상",
    "lat": 35.715517,
    "lng": 128.252069,
    "restaurants": []
  },
  {
    "name": "대구컨트리클럽 (Daegue Country Club)",
    "region": "경상",
    "lat": 35.86584,
    "lng": 128.811256,
    "restaurants": []
  },
  {
    "name": "대련골프클럽",
    "region": "경상",
    "lat": 36.045533,
    "lng": 129.332837,
    "restaurants": []
  },
  {
    "name": "더 그레이스컨트리클럽",
    "region": "경상",
    "lat": 35.660941,
    "lng": 128.643973,
    "restaurants": []
  },
  {
    "name": "동락파크 골프장",
    "region": "경상",
    "lat": 36.093954,
    "lng": 128.400577,
    "restaurants": []
  },
  {
    "name": "동래배네스트CC",
    "region": "경상",
    "lat": 35.263357,
    "lng": 129.099147,
    "restaurants": []
  },
  {
    "name": "동부산컨트리클럽",
    "region": "경상",
    "lat": 35.358334,
    "lng": 129.184971,
    "restaurants": []
  },
  {
    "name": "동원로얄CC 통영",
    "region": "경상",
    "lat": 34.811031,
    "lng": 128.428201,
    "restaurants": []
  },
  {
    "name": "동훈힐마루CC",
    "region": "경상",
    "lat": 35.495429,
    "lng": 128.494161,
    "restaurants": []
  },
  {
    "name": "드비치GC",
    "region": "경상",
    "lat": 35.012095,
    "lng": 128.673993,
    "restaurants": []
  },
  {
    "name": "레이크힐스경남컨트리클럽",
    "region": "경상",
    "lat": 35.309557,
    "lng": 128.573339,
    "restaurants": []
  },
  {
    "name": "루나엑스골프장",
    "region": "경상",
    "lat": 35.911732,
    "lng": 129.315659,
    "restaurants": []
  },
  {
    "name": "리더스컨트리클럽",
    "region": "경상",
    "lat": 35.475507,
    "lng": 128.814723,
    "restaurants": []
  },
  {
    "name": "마스터피스컨트리클럽",
    "region": "경상",
    "lat": 35.704681,
    "lng": 128.21492,
    "restaurants": []
  },
  {
    "name": "마우나오션CC",
    "region": "경상",
    "lat": 35.684803,
    "lng": 129.374295,
    "restaurants": []
  },
  {
    "name": "명밀양 컨트리클럽",
    "region": "경상",
    "lat": 35.458868,
    "lng": 128.734847,
    "restaurants": []
  },
  {
    "name": "미성PGA골프클럽",
    "region": "경상",
    "lat": 35.823523,
    "lng": 128.62035,
    "restaurants": []
  },
  {
    "name": "밀양노벨CC",
    "region": "경상",
    "lat": 35.476633,
    "lng": 128.861915,
    "restaurants": []
  },
  {
    "name": "밀양에스파크컨트리클럽",
    "region": "경상",
    "lat": 35.495862,
    "lng": 128.827765,
    "restaurants": []
  },
  {
    "name": "베이스타즈CC",
    "region": "경상",
    "lat": 35.589141,
    "lng": 129.43469,
    "restaurants": []
  },
  {
    "name": "보라컨트리클럽",
    "region": "경상",
    "lat": 35.494865,
    "lng": 129.133109,
    "restaurants": []
  },
  {
    "name": "보문골프클럽",
    "region": "경상",
    "lat": 35.859728,
    "lng": 129.27281,
    "restaurants": []
  },
  {
    "name": "봉곡마스터골프클럽",
    "region": "경상",
    "lat": 36.151266,
    "lng": 128.301765,
    "restaurants": []
  },
  {
    "name": "부곡컨트리클럽",
    "region": "경상",
    "lat": 35.447463,
    "lng": 128.578744,
    "restaurants": []
  },
  {
    "name": "부산컨트리클럽",
    "region": "경상",
    "lat": 35.298485,
    "lng": 129.090511,
    "restaurants": []
  },
  {
    "name": "사우스케이프오너스클럽",
    "region": "경상",
    "lat": 34.837298,
    "lng": 128.071646,
    "restaurants": []
  },
  {
    "name": "삼삼컨트리클럽",
    "region": "경상",
    "lat": 35.109849,
    "lng": 128.047579,
    "restaurants": []
  },
  {
    "name": "서경타니CC",
    "region": "경상",
    "lat": 35.098812,
    "lng": 128.019966,
    "restaurants": []
  },
  {
    "name": "서라벌골프클럽",
    "region": "경상",
    "lat": 35.688528,
    "lng": 129.278703,
    "restaurants": []
  },
  {
    "name": "선리치GC",
    "region": "경상",
    "lat": 35.950839,
    "lng": 129.206102,
    "restaurants": []
  },
  {
    "name": "세븐밸리CC",
    "region": "경상",
    "lat": 36.015298,
    "lng": 128.461978,
    "restaurants": []
  },
  {
    "name": "스톤게이트CC",
    "region": "경상",
    "lat": 35.287492,
    "lng": 129.200687,
    "restaurants": []
  },
  {
    "name": "시엘골프클럽 (Ciel Golf Club)",
    "region": "경상",
    "lat": 35.994594,
    "lng": 128.855766,
    "restaurants": []
  },
  {
    "name": "신동그린힐스CC",
    "region": "경상",
    "lat": 35.961125,
    "lng": 128.476633,
    "restaurants": []
  },
  {
    "name": "아난티 남해 골프클럽",
    "region": "경상",
    "lat": 34.776624,
    "lng": 127.85271,
    "restaurants": []
  },
  {
    "name": "아델스코트CC",
    "region": "경상",
    "lat": 35.700968,
    "lng": 128.084814,
    "restaurants": []
  },
  {
    "name": "아라미르 골프앤리조트",
    "region": "경상",
    "lat": 35.089891,
    "lng": 128.747095,
    "restaurants": []
  },
  {
    "name": "아시아드CC",
    "region": "경상",
    "lat": 35.284277,
    "lng": 129.242778,
    "restaurants": []
  },
  {
    "name": "아트피아 골프클럽",
    "region": "경상",
    "lat": 35.829482,
    "lng": 128.626664,
    "restaurants": []
  },
  {
    "name": "안강레전드골프클럽",
    "region": "경상",
    "lat": 35.998012,
    "lng": 129.162321,
    "restaurants": []
  },
  {
    "name": "안동레이크골프클럽",
    "region": "경상",
    "lat": 36.564246,
    "lng": 128.775783,
    "restaurants": []
  },
  {
    "name": "안동리버힐 컨트리클럽",
    "region": "경상",
    "lat": 36.489714,
    "lng": 128.572673,
    "restaurants": []
  },
  {
    "name": "양산동원로얄컨트리클럽",
    "region": "경상",
    "lat": 35.395322,
    "lng": 129.021142,
    "restaurants": []
  },
  {
    "name": "양산CC",
    "region": "경상",
    "lat": 35.40021,
    "lng": 129.043093,
    "restaurants": []
  },
  {
    "name": "에덴벨리컨트리클럽",
    "region": "경상",
    "lat": 35.427464,
    "lng": 128.993203,
    "restaurants": []
  },
  {
    "name": "에버그린 골프클럽",
    "region": "경상",
    "lat": 36.113435,
    "lng": 128.436565,
    "restaurants": []
  },
  {
    "name": "에스골프클럽",
    "region": "경상",
    "lat": 36.028512,
    "lng": 129.335167,
    "restaurants": []
  },
  {
    "name": "에이원 CC",
    "region": "경상",
    "lat": 35.375422,
    "lng": 129.174508,
    "restaurants": []
  },
  {
    "name": "에콜리안CC 거창",
    "region": "경상",
    "lat": 35.692812,
    "lng": 128.053777,
    "restaurants": []
  },
  {
    "name": "엠스클럽의성컨트리클럽",
    "region": "경상",
    "lat": 36.28171,
    "lng": 128.556254,
    "restaurants": []
  },
  {
    "name": "영남알프스CC",
    "region": "경상",
    "lat": 35.541624,
    "lng": 129.097024,
    "restaurants": []
  },
  {
    "name": "오르비스GC",
    "region": "경상",
    "lat": 35.449795,
    "lng": 129.275068,
    "restaurants": []
  },
  {
    "name": "오션비치CC",
    "region": "경상",
    "lat": 36.34262,
    "lng": 129.372014,
    "restaurants": []
  },
  {
    "name": "오션힐스 영천CC",
    "region": "경상",
    "lat": 36.043803,
    "lng": 129.013702,
    "restaurants": []
  },
  {
    "name": "오션힐스 청도GC",
    "region": "경상",
    "lat": 35.675402,
    "lng": 128.813448,
    "restaurants": []
  },
  {
    "name": "오션힐스 포항CC",
    "region": "경상",
    "lat": 36.244866,
    "lng": 129.353332,
    "restaurants": []
  },
  {
    "name": "오펠골프클럽 (O'phell Golf Club)",
    "region": "경상",
    "lat": 36.010029,
    "lng": 129.054567,
    "restaurants": []
  },
  {
    "name": "울산컨트리클럽",
    "region": "경상",
    "lat": 35.442281,
    "lng": 129.183912,
    "restaurants": []
  },
  {
    "name": "월드CC",
    "region": "경상",
    "lat": 36.765717,
    "lng": 128.561511,
    "restaurants": []
  },
  {
    "name": "유니밸리컨트리클럽",
    "region": "경상",
    "lat": 35.680564,
    "lng": 128.29429,
    "restaurants": []
  },
  {
    "name": "의령리온CC",
    "region": "경상",
    "lat": 35.355982,
    "lng": 128.183113,
    "restaurants": []
  },
  {
    "name": "의령친환경골프장",
    "region": "경상",
    "lat": 35.292424,
    "lng": 128.292383,
    "restaurants": []
  },
  {
    "name": "이스턴컨트리클럽",
    "region": "경상",
    "lat": 36.162642,
    "lng": 129.362676,
    "restaurants": []
  },
  {
    "name": "이스트힐CC",
    "region": "경상",
    "lat": 35.723529,
    "lng": 129.375323,
    "restaurants": []
  },
  {
    "name": "이지스카이CC",
    "region": "경상",
    "lat": 36.289014,
    "lng": 128.540904,
    "restaurants": []
  },
  {
    "name": "인터불고 CC",
    "region": "경상",
    "lat": 35.794458,
    "lng": 128.761447,
    "restaurants": []
  },
  {
    "name": "정산컨트리클럽",
    "region": "경상",
    "lat": 35.254044,
    "lng": 128.808402,
    "restaurants": []
  },
  {
    "name": "진산골프클럽",
    "region": "경상",
    "lat": 35.275154,
    "lng": 127.911321,
    "restaurants": []
  },
  {
    "name": "진주컨트리클럽",
    "region": "경상",
    "lat": 35.175249,
    "lng": 128.236337,
    "restaurants": []
  },
  {
    "name": "창원컨트리클럽",
    "region": "경상",
    "lat": 35.262803,
    "lng": 128.663866,
    "restaurants": []
  },
  {
    "name": "칠곡아이위시CC",
    "region": "경상",
    "lat": 35.944935,
    "lng": 128.373561,
    "restaurants": []
  },
  {
    "name": "칼레이트CC",
    "region": "경상",
    "lat": 36.210793,
    "lng": 128.524011,
    "restaurants": []
  },
  {
    "name": "클럽디거창CC",
    "region": "경상",
    "lat": 35.592926,
    "lng": 127.904346,
    "restaurants": []
  },
  {
    "name": "통도 파인이스트 컨트리클럽",
    "region": "경상",
    "lat": 35.486492,
    "lng": 129.100359,
    "restaurants": []
  },
  {
    "name": "파라지오 컨트리클럽",
    "region": "경상",
    "lat": 36.293456,
    "lng": 128.55406,
    "restaurants": []
  },
  {
    "name": "파미힐스CC",
    "region": "경상",
    "lat": 36.003575,
    "lng": 128.442774,
    "restaurants": []
  },
  {
    "name": "팔공컨트리클럽",
    "region": "경상",
    "lat": 35.990229,
    "lng": 128.722866,
    "restaurants": []
  },
  {
    "name": "펜타뷰골프클럽",
    "region": "경상",
    "lat": 35.740604,
    "lng": 128.85842,
    "restaurants": []
  },
  {
    "name": "포웰CC",
    "region": "경상",
    "lat": 35.236642,
    "lng": 128.780781,
    "restaurants": []
  },
  {
    "name": "포항CC",
    "region": "경상",
    "lat": 36.222982,
    "lng": 129.335987,
    "restaurants": []
  },
  {
    "name": "피플레이 골프클럽",
    "region": "경상",
    "lat": 35.286085,
    "lng": 128.867313,
    "restaurants": []
  },
  {
    "name": "해림골프클럽",
    "region": "경상",
    "lat": 35.898784,
    "lng": 128.814689,
    "restaurants": []
  },
  {
    "name": "해운대비치골프&리조트",
    "region": "경상",
    "lat": 35.223557,
    "lng": 129.219466,
    "restaurants": []
  },
  {
    "name": "해운대컨트리클럽",
    "region": "경상",
    "lat": 35.365935,
    "lng": 129.199433,
    "restaurants": []
  },
  {
    "name": "123 GC",
    "region": "서울",
    "lat": 37.639636,
    "lng": 126.905572,
    "restaurants": []
  },
  {
    "name": "18홀 파크 골프장",
    "region": "서울",
    "lat": 37.502844,
    "lng": 126.870741,
    "restaurants": []
  },
  {
    "name": "고양 CC",
    "region": "서울",
    "lat": 37.635313,
    "lng": 126.858049,
    "restaurants": []
  },
  {
    "name": "광명 골프 클럽",
    "region": "서울",
    "lat": 37.469825,
    "lng": 126.878742,
    "restaurants": []
  },
  {
    "name": "남양주CC",
    "region": "서울",
    "lat": 37.680173,
    "lng": 127.214809,
    "restaurants": []
  },
  {
    "name": "뉴서울CC",
    "region": "서울",
    "lat": 37.42458,
    "lng": 127.212611,
    "restaurants": []
  },
  {
    "name": "뉴코리아 CC",
    "region": "서울",
    "lat": 37.665993,
    "lng": 126.878906,
    "restaurants": []
  },
  {
    "name": "대한골프클럽",
    "region": "서울",
    "lat": 37.695599,
    "lng": 126.845786,
    "restaurants": []
  },
  {
    "name": "덕소골프클럽",
    "region": "서울",
    "lat": 37.587486,
    "lng": 127.20625,
    "restaurants": []
  },
  {
    "name": "동도센트리움골프클럽",
    "region": "서울",
    "lat": 37.4906,
    "lng": 126.832534,
    "restaurants": []
  },
  {
    "name": "성남골프장(미군 반환공여지)",
    "region": "서울",
    "lat": 37.479739,
    "lng": 127.156187,
    "restaurants": []
  },
  {
    "name": "성저 파크 골프장",
    "region": "서울",
    "lat": 37.681221,
    "lng": 126.742372,
    "restaurants": []
  },
  {
    "name": "위례골프장",
    "region": "서울",
    "lat": 37.478178,
    "lng": 127.157458,
    "restaurants": []
  },
  {
    "name": "인서울27골프클럽",
    "region": "서울",
    "lat": 37.54856,
    "lng": 126.793159,
    "restaurants": []
  },
  {
    "name": "일산스프링힐스 CC",
    "region": "서울",
    "lat": 37.656193,
    "lng": 126.811908,
    "restaurants": []
  },
  {
    "name": "캐슬렉스서울GC",
    "region": "서울",
    "lat": 37.49784,
    "lng": 127.166471,
    "restaurants": []
  },
  {
    "name": "파스텔 골프클럽",
    "region": "서울",
    "lat": 37.509973,
    "lng": 127.009646,
    "restaurants": []
  },
  {
    "name": "프라자골프클럽",
    "region": "서울",
    "lat": 37.696867,
    "lng": 126.734957,
    "restaurants": []
  },
  {
    "name": "한양 CC",
    "region": "서울",
    "lat": 37.656825,
    "lng": 126.856611,
    "restaurants": []
  },
  {
    "name": "한양파인 CC",
    "region": "서울",
    "lat": 37.654577,
    "lng": 126.866203,
    "restaurants": []
  },
  {
    "name": "The royal golf club",
    "region": "서울",
    "lat": 37.581013,
    "lng": 126.905777,
    "restaurants": []
  },
  {
    "name": "김포 씨사이드 CC",
    "region": "인천",
    "lat": 37.702967,
    "lng": 126.534269,
    "restaurants": []
  },
  {
    "name": "드림파크CC",
    "region": "인천",
    "lat": 37.577558,
    "lng": 126.634554,
    "restaurants": []
  },
  {
    "name": "링크나인 골프클럽",
    "region": "인천",
    "lat": 37.16974,
    "lng": 126.753856,
    "restaurants": []
  },
  {
    "name": "발리오스CC",
    "region": "인천",
    "lat": 37.116293,
    "lng": 126.860548,
    "restaurants": []
  },
  {
    "name": "베르힐CC 영종",
    "region": "인천",
    "lat": 37.527932,
    "lng": 126.563636,
    "restaurants": []
  },
  {
    "name": "베스트밸리GC",
    "region": "인천",
    "lat": 37.757062,
    "lng": 126.885827,
    "restaurants": []
  },
  {
    "name": "베어즈베스트청라GC",
    "region": "인천",
    "lat": 37.54942,
    "lng": 126.628309,
    "restaurants": []
  },
  {
    "name": "서서울CC",
    "region": "인천",
    "lat": 37.732237,
    "lng": 126.896667,
    "restaurants": []
  },
  {
    "name": "서원밸리CC",
    "region": "인천",
    "lat": 37.818566,
    "lng": 126.892368,
    "restaurants": []
  },
  {
    "name": "솔트베이GC",
    "region": "인천",
    "lat": 37.391135,
    "lng": 126.771661,
    "restaurants": []
  },
  {
    "name": "송도 유니버스 골프클럽",
    "region": "인천",
    "lat": 37.357593,
    "lng": 126.653307,
    "restaurants": []
  },
  {
    "name": "송도GC",
    "region": "인천",
    "lat": 37.413117,
    "lng": 126.650945,
    "restaurants": []
  },
  {
    "name": "스카이72 골프장 바다코스 (제5활주로 건설 예정지)",
    "region": "인천",
    "lat": 37.479493,
    "lng": 126.470179,
    "restaurants": []
  },
  {
    "name": "스카이72 골프장 하늘코스",
    "region": "인천",
    "lat": 37.451381,
    "lng": 126.482403,
    "restaurants": []
  },
  {
    "name": "아세코밸리골프클럽클럽하우스",
    "region": "인천",
    "lat": 37.367946,
    "lng": 126.769741,
    "restaurants": []
  },
  {
    "name": "아일랜드CC",
    "region": "인천",
    "lat": 37.230747,
    "lng": 126.562787,
    "restaurants": []
  },
  {
    "name": "엠투골프장",
    "region": "인천",
    "lat": 37.224565,
    "lng": 126.729428,
    "restaurants": []
  },
  {
    "name": "오렌지듄스 GC",
    "region": "인천",
    "lat": 37.351073,
    "lng": 126.589294,
    "restaurants": []
  },
  {
    "name": "오렌지듄스영종GC",
    "region": "인천",
    "lat": 37.434232,
    "lng": 126.460161,
    "restaurants": []
  },
  {
    "name": "올림픽CC",
    "region": "인천",
    "lat": 37.720937,
    "lng": 126.892179,
    "restaurants": []
  },
  {
    "name": "유니아일랜드 골프&스파 리조트",
    "region": "인천",
    "lat": 37.65788,
    "lng": 126.345761,
    "restaurants": []
  },
  {
    "name": "인그레인골프클럽",
    "region": "인천",
    "lat": 37.707741,
    "lng": 126.565532,
    "restaurants": []
  },
  {
    "name": "인천국제CC",
    "region": "인천",
    "lat": 37.56125,
    "lng": 126.652657,
    "restaurants": []
  },
  {
    "name": "인천그랜드CC",
    "region": "인천",
    "lat": 37.513896,
    "lng": 126.638414,
    "restaurants": []
  },
  {
    "name": "인천환경공단골프장",
    "region": "인천",
    "lat": 37.349083,
    "lng": 126.61641,
    "restaurants": []
  },
  {
    "name": "인피션 골프클럽",
    "region": "인천",
    "lat": 37.602386,
    "lng": 126.605246,
    "restaurants": []
  },
  {
    "name": "잭니클라우스 골프클럽",
    "region": "인천",
    "lat": 37.379846,
    "lng": 126.62439,
    "restaurants": []
  },
  {
    "name": "제이유제이골프클럽",
    "region": "인천",
    "lat": 37.239998,
    "lng": 126.610741,
    "restaurants": []
  },
  {
    "name": "제이퍼블릭골프클럽",
    "region": "인천",
    "lat": 37.749321,
    "lng": 126.847033,
    "restaurants": []
  },
  {
    "name": "제일컨트리클럽",
    "region": "인천",
    "lat": 37.327072,
    "lng": 126.868088,
    "restaurants": []
  },
  {
    "name": "화성골프클럽",
    "region": "인천",
    "lat": 37.22719,
    "lng": 126.834884,
    "restaurants": []
  },
  {
    "name": "울진마린CC",
    "region": "전국",
    "lat": 36.887989,
    "lng": 129.397775,
    "restaurants": []
  },
  {
    "name": "갤럭시골프클럽",
    "region": "전라",
    "lat": 34.790401,
    "lng": 127.641643,
    "restaurants": []
  },
  {
    "name": "고창칸트리클럽",
    "region": "전라",
    "lat": 35.521061,
    "lng": 126.505491,
    "restaurants": []
  },
  {
    "name": "골드레이크CC",
    "region": "전라",
    "lat": 34.959266,
    "lng": 126.874081,
    "restaurants": []
  },
  {
    "name": "광양CC",
    "region": "전라",
    "lat": 34.954816,
    "lng": 127.708269,
    "restaurants": []
  },
  {
    "name": "광주CC",
    "region": "전라",
    "lat": 35.309637,
    "lng": 127.172725,
    "restaurants": []
  },
  {
    "name": "군산 컨트리클럽",
    "region": "전라",
    "lat": 35.892699,
    "lng": 126.6528,
    "restaurants": []
  },
  {
    "name": "금과골프장",
    "region": "전라",
    "lat": 35.354839,
    "lng": 127.083465,
    "restaurants": []
  },
  {
    "name": "금당골프클럽",
    "region": "전라",
    "lat": 34.95104,
    "lng": 127.522645,
    "restaurants": []
  },
  {
    "name": "김제스파힐스CC",
    "region": "전라",
    "lat": 35.830641,
    "lng": 126.91702,
    "restaurants": []
  },
  {
    "name": "나주컨트리클럽",
    "region": "전라",
    "lat": 34.940129,
    "lng": 126.640636,
    "restaurants": []
  },
  {
    "name": "나주힐스컨트리클럽",
    "region": "전라",
    "lat": 34.891828,
    "lng": 126.724995,
    "restaurants": []
  },
  {
    "name": "남원상록GC",
    "region": "전라",
    "lat": 35.415841,
    "lng": 127.295256,
    "restaurants": []
  },
  {
    "name": "내장산골프&리조트",
    "region": "전라",
    "lat": 35.503651,
    "lng": 126.86679,
    "restaurants": []
  },
  {
    "name": "다산베아채CC",
    "region": "전라",
    "lat": 34.546859,
    "lng": 126.761139,
    "restaurants": []
  },
  {
    "name": "담양다이너스티CC",
    "region": "전라",
    "lat": 35.308318,
    "lng": 127.020502,
    "restaurants": []
  },
  {
    "name": "더나인골프클럽",
    "region": "전라",
    "lat": 35.79777,
    "lng": 127.030177,
    "restaurants": []
  },
  {
    "name": "디오션CC",
    "region": "전라",
    "lat": 34.647689,
    "lng": 127.6273,
    "restaurants": []
  },
  {
    "name": "르오네트컨트리클럽",
    "region": "전라",
    "lat": 35.250094,
    "lng": 127.094811,
    "restaurants": []
  },
  {
    "name": "목포골프클럽",
    "region": "전라",
    "lat": 34.825477,
    "lng": 126.393709,
    "restaurants": []
  },
  {
    "name": "무등산CC",
    "region": "전라",
    "lat": 35.044511,
    "lng": 126.935968,
    "restaurants": []
  },
  {
    "name": "무안클린밸리CC",
    "region": "전라",
    "lat": 34.94106,
    "lng": 126.458901,
    "restaurants": []
  },
  {
    "name": "무안CC",
    "region": "전라",
    "lat": 34.964052,
    "lng": 126.405612,
    "restaurants": []
  },
  {
    "name": "무주덕유산CC",
    "region": "전라",
    "lat": 35.883856,
    "lng": 127.724075,
    "restaurants": []
  },
  {
    "name": "백양우리컨트리클럽",
    "region": "전라",
    "lat": 35.420225,
    "lng": 126.808914,
    "restaurants": []
  },
  {
    "name": "벌교파3골프장",
    "region": "전라",
    "lat": 34.835006,
    "lng": 127.27276,
    "restaurants": []
  },
  {
    "name": "베르힐CC 함평",
    "region": "전라",
    "lat": 35.074773,
    "lng": 126.5667,
    "restaurants": []
  },
  {
    "name": "보성에덴CC",
    "region": "전라",
    "lat": 34.753539,
    "lng": 127.052387,
    "restaurants": []
  },
  {
    "name": "보성CC",
    "region": "전라",
    "lat": 34.820649,
    "lng": 127.219854,
    "restaurants": []
  },
  {
    "name": "부영CC순천",
    "region": "전라",
    "lat": 34.937351,
    "lng": 127.555722,
    "restaurants": []
  },
  {
    "name": "빛고을CC",
    "region": "전라",
    "lat": 35.097832,
    "lng": 126.899405,
    "restaurants": []
  },
  {
    "name": "석정힐CC",
    "region": "전라",
    "lat": 35.426902,
    "lng": 126.738543,
    "restaurants": []
  },
  {
    "name": "선그린골프클럽",
    "region": "전라",
    "lat": 34.823245,
    "lng": 126.394587,
    "restaurants": []
  },
  {
    "name": "순창CC",
    "region": "전라",
    "lat": 35.389316,
    "lng": 127.123409,
    "restaurants": []
  },
  {
    "name": "순천CC",
    "region": "전라",
    "lat": 34.867055,
    "lng": 127.401949,
    "restaurants": []
  },
  {
    "name": "스카이뷰CC",
    "region": "전라",
    "lat": 35.688025,
    "lng": 127.712404,
    "restaurants": []
  },
  {
    "name": "써미트컨트리클럽",
    "region": "전라",
    "lat": 35.838501,
    "lng": 127.324451,
    "restaurants": []
  },
  {
    "name": "아네스빌CC",
    "region": "전라",
    "lat": 35.786329,
    "lng": 126.960705,
    "restaurants": []
  },
  {
    "name": "아크로 컨트리클럽",
    "region": "전라",
    "lat": 34.867407,
    "lng": 126.790354,
    "restaurants": []
  },
  {
    "name": "어등산CC",
    "region": "전라",
    "lat": 35.166714,
    "lng": 126.772523,
    "restaurants": []
  },
  {
    "name": "에스페란사골프클럽",
    "region": "전라",
    "lat": 35.805056,
    "lng": 127.00676,
    "restaurants": []
  },
  {
    "name": "에콜리안광산CC",
    "region": "전라",
    "lat": 35.108025,
    "lng": 126.742183,
    "restaurants": []
  },
  {
    "name": "에콜리안영광CC",
    "region": "전라",
    "lat": 35.296768,
    "lng": 126.500509,
    "restaurants": []
  },
  {
    "name": "엘리체컨트리클럽",
    "region": "전라",
    "lat": 34.954344,
    "lng": 126.920548,
    "restaurants": []
  },
  {
    "name": "여수경도골프앤리조트CC",
    "region": "전라",
    "lat": 34.714847,
    "lng": 127.7251,
    "restaurants": []
  },
  {
    "name": "여수시티파크리조트",
    "region": "전라",
    "lat": 34.775793,
    "lng": 127.686035,
    "restaurants": []
  },
  {
    "name": "옥과기안CC",
    "region": "전라",
    "lat": 35.288471,
    "lng": 127.162793,
    "restaurants": []
  },
  {
    "name": "웨스트오션CC",
    "region": "전라",
    "lat": 35.352913,
    "lng": 126.417549,
    "restaurants": []
  },
  {
    "name": "장수골프리조트",
    "region": "전라",
    "lat": 35.678227,
    "lng": 127.601337,
    "restaurants": []
  },
  {
    "name": "전주샹그릴라CC",
    "region": "전라",
    "lat": 35.703545,
    "lng": 127.200792,
    "restaurants": []
  },
  {
    "name": "조아밸리 CC",
    "region": "전라",
    "lat": 34.987086,
    "lng": 126.939567,
    "restaurants": []
  },
  {
    "name": "죽향CC",
    "region": "전라",
    "lat": 35.267314,
    "lng": 126.993158,
    "restaurants": []
  },
  {
    "name": "중흥레포츠클럽",
    "region": "전라",
    "lat": 34.802514,
    "lng": 126.468654,
    "restaurants": []
  },
  {
    "name": "창평CC(골프장)",
    "region": "전라",
    "lat": 35.22287,
    "lng": 127.014686,
    "restaurants": []
  },
  {
    "name": "태인컨트리클럽",
    "region": "전라",
    "lat": 35.680254,
    "lng": 126.964341,
    "restaurants": []
  },
  {
    "name": "파인힐스CC",
    "region": "전라",
    "lat": 35.036429,
    "lng": 127.273002,
    "restaurants": []
  },
  {
    "name": "포라이즌CC",
    "region": "전라",
    "lat": 34.900115,
    "lng": 127.448752,
    "restaurants": []
  },
  {
    "name": "푸른솔GC 장성",
    "region": "전라",
    "lat": 35.250249,
    "lng": 126.712418,
    "restaurants": []
  },
  {
    "name": "함평엘리체CC",
    "region": "전라",
    "lat": 35.004461,
    "lng": 126.556896,
    "restaurants": []
  },
  {
    "name": "함평천지CC",
    "region": "전라",
    "lat": 35.053529,
    "lng": 126.5003,
    "restaurants": []
  },
  {
    "name": "해피니스CC",
    "region": "전라",
    "lat": 35.001992,
    "lng": 126.835504,
    "restaurants": []
  },
  {
    "name": "화순CC",
    "region": "전라",
    "lat": 34.971646,
    "lng": 126.908972,
    "restaurants": []
  },
  {
    "name": "JNJ골프리조트",
    "region": "전라",
    "lat": 34.796998,
    "lng": 126.972626,
    "restaurants": []
  },
  {
    "name": "OK CC",
    "region": "전라",
    "lat": 35.817624,
    "lng": 127.261549,
    "restaurants": []
  },
  {
    "name": "그린필드 CC",
    "region": "제주",
    "lat": 33.464792,
    "lng": 126.645129,
    "restaurants": []
  },
  {
    "name": "나인브릿지CC",
    "region": "제주",
    "lat": 33.339659,
    "lng": 126.401107,
    "restaurants": []
  },
  {
    "name": "더클래식컨트리클럽",
    "region": "제주",
    "lat": 33.36875,
    "lng": 126.683422,
    "restaurants": []
  },
  {
    "name": "라온골프클럽",
    "region": "제주",
    "lat": 33.339121,
    "lng": 126.278845,
    "restaurants": []
  },
  {
    "name": "라온프라이빗CC",
    "region": "제주",
    "lat": 33.377623,
    "lng": 126.24094,
    "restaurants": []
  },
  {
    "name": "라온GC",
    "region": "제주",
    "lat": 33.339464,
    "lng": 126.279893,
    "restaurants": []
  },
  {
    "name": "라헨느골프리조트",
    "region": "제주",
    "lat": 33.457234,
    "lng": 126.609271,
    "restaurants": []
  },
  {
    "name": "레이크힐스 제주 골프클럽",
    "region": "제주",
    "lat": 33.299935,
    "lng": 126.430707,
    "restaurants": []
  },
  {
    "name": "부영CC",
    "region": "제주",
    "lat": 33.360269,
    "lng": 126.716615,
    "restaurants": []
  },
  {
    "name": "블랙스톤CC",
    "region": "제주",
    "lat": 33.337895,
    "lng": 126.308563,
    "restaurants": []
  },
  {
    "name": "사이프러스CC",
    "region": "제주",
    "lat": 33.413432,
    "lng": 126.743864,
    "restaurants": []
  },
  {
    "name": "샤인빌파크CC-PALM코스",
    "region": "제주",
    "lat": 33.348506,
    "lng": 126.791079,
    "restaurants": []
  },
  {
    "name": "샤인빌파크CC-RIVER코스",
    "region": "제주",
    "lat": 33.342488,
    "lng": 126.783357,
    "restaurants": []
  },
  {
    "name": "세인트포 CC",
    "region": "제주",
    "lat": 33.520263,
    "lng": 126.737836,
    "restaurants": []
  },
  {
    "name": "스프링데일CC",
    "region": "제주",
    "lat": 33.329677,
    "lng": 126.637293,
    "restaurants": []
  },
  {
    "name": "아덴힐 리즈트 앤 골프 클럽",
    "region": "제주",
    "lat": 33.345497,
    "lng": 126.363163,
    "restaurants": []
  },
  {
    "name": "아덴힐리조트앤골프클럽",
    "region": "제주",
    "lat": 33.346217,
    "lng": 126.367506,
    "restaurants": []
  },
  {
    "name": "에버리스CC",
    "region": "제주",
    "lat": 33.374439,
    "lng": 126.361488,
    "restaurants": []
  },
  {
    "name": "에코랜드 CC",
    "region": "제주",
    "lat": 33.460742,
    "lng": 126.671532,
    "restaurants": []
  },
  {
    "name": "엘리시안제주CC",
    "region": "제주",
    "lat": 33.374781,
    "lng": 126.377747,
    "restaurants": []
  },
  {
    "name": "오라CC",
    "region": "제주",
    "lat": 33.445222,
    "lng": 126.510724,
    "restaurants": []
  },
  {
    "name": "우리들CC",
    "region": "제주",
    "lat": 33.306884,
    "lng": 126.587415,
    "restaurants": []
  },
  {
    "name": "제주컨트리클럽",
    "region": "제주",
    "lat": 33.430538,
    "lng": 126.582025,
    "restaurants": []
  },
  {
    "name": "제주힐 CC",
    "region": "제주",
    "lat": 33.439436,
    "lng": 126.602601,
    "restaurants": []
  },
  {
    "name": "중문골프클럽",
    "region": "제주",
    "lat": 33.249583,
    "lng": 126.405181,
    "restaurants": []
  },
  {
    "name": "캐슬렉스 제주CC",
    "region": "제주",
    "lat": 33.33999,
    "lng": 126.348095,
    "restaurants": []
  },
  {
    "name": "크라운 CC",
    "region": "제주",
    "lat": 33.529454,
    "lng": 126.696101,
    "restaurants": []
  },
  {
    "name": "타미우스 골프클럽",
    "region": "제주",
    "lat": 33.350645,
    "lng": 126.387281,
    "restaurants": []
  },
  {
    "name": "타미우스GC",
    "region": "제주",
    "lat": 33.35204,
    "lng": 126.387365,
    "restaurants": []
  },
  {
    "name": "태디밸리 골프 리조트",
    "region": "제주",
    "lat": 33.289476,
    "lng": 126.342193,
    "restaurants": []
  },
  {
    "name": "테디밸리 골프&리조트",
    "region": "제주",
    "lat": 33.289643,
    "lng": 126.343242,
    "restaurants": []
  },
  {
    "name": "플라자CC제주",
    "region": "제주",
    "lat": 33.44914,
    "lng": 126.629876,
    "restaurants": []
  },
  {
    "name": "핀크스 GC",
    "region": "제주",
    "lat": 33.311466,
    "lng": 126.38913,
    "restaurants": []
  },
  {
    "name": "한라산CC",
    "region": "제주",
    "lat": 33.444096,
    "lng": 126.545799,
    "restaurants": []
  },
  {
    "name": "Everis Golf & Resort",
    "region": "제주",
    "lat": 33.375066,
    "lng": 126.361925,
    "restaurants": []
  },
  {
    "name": "골드나인CC",
    "region": "충청",
    "lat": 36.614489,
    "lng": 127.618907,
    "restaurants": []
  },
  {
    "name": "골든베이골프&리조트",
    "region": "충청",
    "lat": 36.707018,
    "lng": 126.172859,
    "restaurants": []
  },
  {
    "name": "구룡대CC",
    "region": "충청",
    "lat": 36.316771,
    "lng": 127.234844,
    "restaurants": []
  },
  {
    "name": "그랜드CC",
    "region": "충청",
    "lat": 36.721373,
    "lng": 127.379256,
    "restaurants": []
  },
  {
    "name": "뉴스프링빌2CC 백화산",
    "region": "충청",
    "lat": 36.283555,
    "lng": 127.87101,
    "restaurants": []
  },
  {
    "name": "더힐컨트리클럽",
    "region": "충청",
    "lat": 36.275721,
    "lng": 127.16806,
    "restaurants": []
  },
  {
    "name": "떼제베 골프장(TGV CC)",
    "region": "충청",
    "lat": 36.66598,
    "lng": 127.321665,
    "restaurants": []
  },
  {
    "name": "로얄힐스CC",
    "region": "충청",
    "lat": 36.722486,
    "lng": 126.337758,
    "restaurants": []
  },
  {
    "name": "롯데스카이힐CC",
    "region": "충청",
    "lat": 36.302874,
    "lng": 126.904795,
    "restaurants": []
  },
  {
    "name": "마스터골프클럽",
    "region": "충청",
    "lat": 36.769853,
    "lng": 127.139326,
    "restaurants": []
  },
  {
    "name": "문경GC",
    "region": "충청",
    "lat": 36.714852,
    "lng": 128.156032,
    "restaurants": []
  },
  {
    "name": "문화골프클럽",
    "region": "충청",
    "lat": 36.61179,
    "lng": 127.294326,
    "restaurants": []
  },
  {
    "name": "백제컨트리클럽",
    "region": "충청",
    "lat": 36.343547,
    "lng": 126.793559,
    "restaurants": []
  },
  {
    "name": "보령베이스CC",
    "region": "충청",
    "lat": 36.330601,
    "lng": 126.618853,
    "restaurants": []
  },
  {
    "name": "블루원상주CC",
    "region": "충청",
    "lat": 36.335444,
    "lng": 127.939636,
    "restaurants": []
  },
  {
    "name": "사이언스 대덕 CC",
    "region": "충청",
    "lat": 36.404655,
    "lng": 127.39043,
    "restaurants": []
  },
  {
    "name": "상떼힐익산CC",
    "region": "충청",
    "lat": 35.961751,
    "lng": 127.027672,
    "restaurants": []
  },
  {
    "name": "서산수컨트리클럽",
    "region": "충청",
    "lat": 36.98979,
    "lng": 126.445701,
    "restaurants": []
  },
  {
    "name": "세레니티CC",
    "region": "충청",
    "lat": 36.546935,
    "lng": 127.388405,
    "restaurants": []
  },
  {
    "name": "세종레이캐슬CC",
    "region": "충청",
    "lat": 36.6182,
    "lng": 127.191165,
    "restaurants": []
  },
  {
    "name": "세종에머슨컨트리클럽",
    "region": "충청",
    "lat": 36.699929,
    "lng": 127.177654,
    "restaurants": []
  },
  {
    "name": "세종필드골프클럽",
    "region": "충청",
    "lat": 36.53506,
    "lng": 127.257575,
    "restaurants": []
  },
  {
    "name": "솔라고컨트리클럽",
    "region": "충청",
    "lat": 36.69339,
    "lng": 126.322158,
    "restaurants": []
  },
  {
    "name": "스톤비치컨트리클럽",
    "region": "충청",
    "lat": 36.687836,
    "lng": 126.158026,
    "restaurants": []
  },
  {
    "name": "아리스타CC",
    "region": "충청",
    "lat": 36.083898,
    "lng": 127.128202,
    "restaurants": []
  },
  {
    "name": "애플밸리컨트리클럽",
    "region": "충청",
    "lat": 36.224148,
    "lng": 128.059406,
    "restaurants": []
  },
  {
    "name": "에버힐골프클럽",
    "region": "충청",
    "lat": 36.520053,
    "lng": 127.451519,
    "restaurants": []
  },
  {
    "name": "에스앤골프리조트",
    "region": "충청",
    "lat": 36.283503,
    "lng": 126.554963,
    "restaurants": []
  },
  {
    "name": "오창에딘버러컨트리클럽",
    "region": "충청",
    "lat": 36.733936,
    "lng": 127.428042,
    "restaurants": []
  },
  {
    "name": "우정힐스CC",
    "region": "충청",
    "lat": 36.767269,
    "lng": 127.219732,
    "restaurants": []
  },
  {
    "name": "웅포골프클럽",
    "region": "충청",
    "lat": 36.069183,
    "lng": 126.889863,
    "restaurants": []
  },
  {
    "name": "유성컨트리클럽",
    "region": "충청",
    "lat": 36.355157,
    "lng": 127.294789,
    "restaurants": []
  },
  {
    "name": "이븐데일CC",
    "region": "충청",
    "lat": 36.682816,
    "lng": 127.605699,
    "restaurants": []
  },
  {
    "name": "일라이트CC",
    "region": "충청",
    "lat": 36.154378,
    "lng": 127.791327,
    "restaurants": []
  },
  {
    "name": "천안상록CC",
    "region": "충청",
    "lat": 36.742951,
    "lng": 127.281276,
    "restaurants": []
  },
  {
    "name": "클럽디보은CC",
    "region": "충청",
    "lat": 36.510143,
    "lng": 127.691552,
    "restaurants": []
  },
  {
    "name": "클럽디속리산",
    "region": "충청",
    "lat": 36.445968,
    "lng": 127.7823,
    "restaurants": []
  },
  {
    "name": "포도CC",
    "region": "충청",
    "lat": 36.041599,
    "lng": 128.058093,
    "restaurants": []
  },
  {
    "name": "프린세스GC",
    "region": "충청",
    "lat": 36.653611,
    "lng": 127.111756,
    "restaurants": []
  },
  {
    "name": "필그린GC",
    "region": "충청",
    "lat": 36.622581,
    "lng": 127.64312,
    "restaurants": []
  },
  {
    "name": "한미르대덕CC",
    "region": "충청",
    "lat": 36.418865,
    "lng": 127.401577,
    "restaurants": []
  },
  {
    "name": "K밸리컨트리클럽",
    "region": "충청",
    "lat": 36.073899,
    "lng": 127.355091,
    "restaurants": []
  }
];

function mergeExternalGolfCourses() {
  const externalCourses = Array.isArray(window.CADDIEON_GOLF_COURSES)
    ? window.CADDIEON_GOLF_COURSES
    : [];
  if (!externalCourses.length) return;

  const existingByName = new Map(state.mapCourses.map((course) => [course.name, course]));
  state.mapCourses = externalCourses.map((course) => ({
    ...course,
    restaurants: existingByName.get(course.name)?.restaurants || course.restaurants || [],
  }));

  for (const course of state.mapCourses) {
    if (!state.weather.some((item) => item.course === course.name)) {
      state.weather.push({
        course: course.name,
        temp: 24,
        status: "날씨 정보 대기",
        wind: "-",
        rain: "-",
        humidity: "-",
        time: "기본",
      });
    }
  }
}

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

const reelRuntime = {
  observer: null,
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

function normalizeReel(reel, index = 0) {
  return {
    id: reel.id || `reel-${Date.now()}-${index}`,
    category: reel.category || "스윙자랑",
    title: reel.title || "캐디온 릴스",
    caption: reel.caption || "",
    authorMode: reel.authorMode || "profile",
    author: reel.author || state.profile.nickname || "캐디",
    videoUrl: reel.videoUrl || "",
    likes: reel.likes || 0,
    reported: Boolean(reel.reported),
    createdAt: reel.createdAt || new Date().toISOString(),
    ...reel,
  };
}

function loadReelData() {
  try {
    const saved = localStorage.getItem("caddieon-reels");
    if (saved) {
      const data = JSON.parse(saved);
      state.reels = (data.reels || state.reels).map(normalizeReel);
      state.likedReels = data.likedReels || [];
    } else {
      state.reels = state.reels.map(normalizeReel);
    }
  } catch (error) {
    localStorage.removeItem("caddieon-reels");
    state.reels = state.reels.map(normalizeReel);
  }
}

function saveReelData() {
  localStorage.setItem(
    "caddieon-reels",
    JSON.stringify({
      reels: state.reels,
      likedReels: state.likedReels,
    })
  );
}

function normalizeMarketItem(item, index = 0) {
  return {
    id: item.id || `market-${Date.now()}-${index}`,
    category: item.category || "골프용품",
    title: item.title || "중고 물품",
    description: item.description || "",
    price: Number(item.price || 0),
    region: item.region || state.profile.region || "전국",
    imageUrl: item.imageUrl || "",
    status: item.status || "판매중",
    seller: item.seller || state.profile.nickname || "캐디",
    chats: Number(item.chats || 0),
    createdAt: item.createdAt || new Date().toISOString(),
    ...item,
  };
}

function loadMarketData() {
  try {
    const saved = localStorage.getItem("caddieon-market");
    if (saved) {
      const data = JSON.parse(saved);
      state.marketItems = (data.marketItems || state.marketItems).map(normalizeMarketItem);
    } else {
      state.marketItems = state.marketItems.map(normalizeMarketItem);
    }
  } catch (error) {
    localStorage.removeItem("caddieon-market");
    state.marketItems = state.marketItems.map(normalizeMarketItem);
  }
}

function saveMarketData() {
  localStorage.setItem(
    "caddieon-market",
    JSON.stringify({
      marketItems: state.marketItems,
    })
  );
}

function normalizeSupportRequest(request, index = 0) {
  return {
    id: request.id || `support-${Date.now()}-${index}`,
    type: request.type || "질문",
    title: request.title || "문의",
    body: request.body || "",
    contact: request.contact || "",
    author: request.author || state.profile.nickname || "캐디",
    status: request.status || "접수",
    createdAt: request.createdAt || new Date().toISOString(),
    ...request,
  };
}

function loadSupportData() {
  try {
    const saved = localStorage.getItem("caddieon-support");
    if (saved) {
      const data = JSON.parse(saved);
      state.supportRequests = (data.supportRequests || state.supportRequests).map(normalizeSupportRequest);
    } else {
      state.supportRequests = state.supportRequests.map(normalizeSupportRequest);
    }
  } catch (error) {
    localStorage.removeItem("caddieon-support");
    state.supportRequests = state.supportRequests.map(normalizeSupportRequest);
  }
}

function saveSupportData() {
  localStorage.setItem(
    "caddieon-support",
    JSON.stringify({
      supportRequests: state.supportRequests,
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
  $("#profilePreviewMeta").textContent = profileMetaText(state.profile.memberType, state.profile.region, state.profile.career);
  $("#profileNickname").value = state.profile.nickname;
  $("#profileRegion").value = state.profile.region;
  $("#profileCareer").value = state.profile.career;
  $("#profileSkin").value = state.profile.skin;
  $("#profileHair").value = state.profile.hair;
  $("#profileMood").value = state.profile.mood;
  $("#profileBio").value = state.profile.bio;
  document.querySelectorAll(".member-type-option").forEach((button) => {
    button.classList.toggle("is-selected", button.dataset.memberType === state.profile.memberType);
  });
  document.querySelectorAll(".swatch").forEach((swatch) => {
    swatch.classList.toggle("is-selected", swatch.dataset.color === state.profile.color);
  });
}

function memberTypeLabel(memberType) {
  return memberType === "golfer" ? "골퍼" : "캐디";
}

function profileMetaText(memberType, region, career) {
  return memberType === "golfer"
    ? `${memberTypeLabel(memberType)} · ${region}`
    : `${memberTypeLabel(memberType)} · ${region} · ${career}`;
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
    ${state.profile.memberType === "caddie" ? `<span class="member-badge" aria-label="캐디 인증">★</span>` : ""}
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
  $("#profilePreviewMeta").textContent = profileMetaText(state.profile.memberType, region, career);
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

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function renderReels() {
  const reels = state.reels
    .sort((a, b) => {
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  $("#reelList").innerHTML = reels
    .map((reel) => {
      const video = reel.videoUrl
        ? `<video src="${escapeHtml(reel.videoUrl)}" muted loop playsinline preload="metadata"></video>`
        : `<div class="reel-placeholder"><div><strong>캐디온 릴스</strong><span>영상 URL이나 짧은 파일을 올리면 여기에 재생됩니다.</span></div></div>`;

      return `
        <article class="card reel-card ${reel.reported ? "is-reported" : ""}">
          <div class="reel-player">${video}</div>
          <div class="reel-body">
            <div class="talk-meta-row">
              <span class="meta">${escapeHtml(reel.author)} · ${formatTalkDate(reel.createdAt)}</span>
            </div>
            <h3>${escapeHtml(reel.title)}</h3>
            <p>${escapeHtml(reel.caption)}</p>
            ${reel.reported ? `<p class="report-note">신고 접수된 릴스입니다. 운영자 검토 대기 중</p>` : ""}
            <div class="reel-actions">
              <button class="reel-like ${state.likedReels.includes(reel.id) ? "is-liked" : ""}" data-reel-id="${reel.id}">
                ${state.likedReels.includes(reel.id) ? "♥" : "♡"} ${reel.likes}
              </button>
              <button class="reel-share" data-reel-id="${reel.id}">공유</button>
              <button class="reel-report" data-reel-id="${reel.id}">신고</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("") || `<div class="empty-state">아직 올라온 릴스가 없습니다. 첫 스윙을 자랑해보세요.</div>`;
  setupReelAutoplay();
}

function findReel(reelId) {
  return state.reels.find((reel) => reel.id === reelId);
}

function toggleReelLike(reelId) {
  const reel = findReel(reelId);
  if (!reel) return;
  if (state.likedReels.includes(reelId)) {
    state.likedReels = state.likedReels.filter((id) => id !== reelId);
    reel.likes = Math.max(0, reel.likes - 1);
  } else {
    state.likedReels.push(reelId);
    reel.likes += 1;
  }
  saveReelData();
  renderReels();
}

function reportReel(reelId) {
  const reel = findReel(reelId);
  if (!reel) return;
  reel.reported = true;
  saveReelData();
  renderReels();
  alert("릴스 신고가 접수되었습니다. 운영자 검토로 연결됩니다.");
}

function readReelFile(file) {
  return new Promise((resolve, reject) => {
    if (!file) {
      resolve("");
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      reject(new Error("large-file"));
      return;
    }
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(file);
  });
}

function renderMarketItems() {
  const category = $("#marketCategoryFilter").value;
  const status = $("#marketStatusFilter").value;
  const sort = $("#marketSort").value;
  const items = state.marketItems
    .filter((item) => category === "all" || item.category === category)
    .filter((item) => status === "all" || item.status === status)
    .sort((a, b) => {
      if (sort === "price-low") return a.price - b.price;
      if (sort === "price-high") return b.price - a.price;
      return new Date(b.createdAt) - new Date(a.createdAt);
    });

  $("#marketList").innerHTML = items
    .map((item) => {
      const thumb = item.imageUrl
        ? `<img src="${escapeHtml(item.imageUrl)}" alt="${escapeHtml(item.title)}" />`
        : `<span>당근</span>`;

      return `
        <article class="card market-card">
          <div class="market-thumb">${thumb}</div>
          <div class="market-body">
            <div class="talk-meta-row">
              <span class="pill">${escapeHtml(item.category)}</span>
              <span class="meta">${escapeHtml(item.region)} · ${formatTalkDate(item.createdAt)}</span>
            </div>
            <h3>${escapeHtml(item.title)}</h3>
            <p>${escapeHtml(item.description)}</p>
            <div class="market-price-row">
              <strong class="market-price">${Number(item.price).toLocaleString("ko-KR")}원</strong>
              <span class="pill">${escapeHtml(item.status)}</span>
            </div>
            <p class="meta">판매자 ${escapeHtml(item.seller)} · 채팅 ${item.chats}</p>
            <div class="market-actions">
              <button class="market-chat" data-market-id="${item.id}">채팅하기</button>
              <select class="market-status" data-market-id="${item.id}" aria-label="거래 상태 변경">
                ${["판매중", "예약중", "거래완료"].map((value) => `<option value="${value}" ${item.status === value ? "selected" : ""}>${value}</option>`).join("")}
              </select>
              <button class="market-delete" data-market-id="${item.id}">삭제</button>
            </div>
          </div>
        </article>
      `;
    })
    .join("") || `<div class="empty-state">조건에 맞는 중고거래 글이 없습니다.</div>`;
}

function findMarketItem(itemId) {
  return state.marketItems.find((item) => item.id === itemId);
}

function changeMarketStatus(itemId, status) {
  const item = findMarketItem(itemId);
  if (!item) return;
  item.status = status;
  saveMarketData();
  renderMarketItems();
}

function startMarketChat(itemId) {
  const item = findMarketItem(itemId);
  if (!item) return;
  item.chats += 1;
  saveMarketData();
  renderMarketItems();
  alert(`${item.seller}님에게 채팅 요청을 보냈습니다. 실제 앱에서는 1:1 채팅방으로 연결됩니다.`);
}

function deleteMarketItem(itemId) {
  state.marketItems = state.marketItems.filter((item) => item.id !== itemId);
  saveMarketData();
  renderMarketItems();
}

function renderSupportRequests() {
  $("#supportList").innerHTML = state.supportRequests
    .slice()
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .map(
      (request) => `
        <article class="card">
          <div class="talk-meta-row">
            <span class="pill">${escapeHtml(request.type)}</span>
            <span class="meta">${escapeHtml(request.author)} · ${formatTalkDate(request.createdAt)}</span>
          </div>
          <h3>${escapeHtml(request.title)}</h3>
          <p>${escapeHtml(request.body)}</p>
          <span class="pill support-status ${request.status === "처리완료" ? "is-done" : ""}">${escapeHtml(request.status)}</span>
        </article>
      `
    )
    .join("") || `<div class="empty-state">아직 문의 내역이 없습니다.</div>`;
}

function findSupportRequest(requestId) {
  return state.supportRequests.find((request) => request.id === requestId);
}

function changeSupportStatus(requestId, status) {
  const request = findSupportRequest(requestId);
  if (!request) return;
  request.status = status;
  saveSupportData();
  renderSupportRequests();
  renderAdmin();
}

function deleteSupportRequest(requestId) {
  state.supportRequests = state.supportRequests.filter((request) => request.id !== requestId);
  saveSupportData();
  renderSupportRequests();
  renderAdmin();
}

function pauseAllReelVideos(exceptVideo = null) {
  document.querySelectorAll("#reelList video").forEach((video) => {
    if (video !== exceptVideo) video.pause();
  });
}

function playVisibleReel(video) {
  if (!video || !$("#reels").classList.contains("is-visible")) return;
  pauseAllReelVideos(video);
  video.muted = true;
  video.playsInline = true;
  const playRequest = video.play();
  if (playRequest?.catch) playRequest.catch(() => {});
}

function syncVisibleReelPlayback() {
  const videos = Array.from(document.querySelectorAll("#reelList video"));
  if (!$("#reels").classList.contains("is-visible")) {
    pauseAllReelVideos();
    return;
  }
  const visibleVideo = videos
    .map((video) => {
      const rect = video.getBoundingClientRect();
      const visibleHeight = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
      return { video, visibleHeight };
    })
    .filter((item) => item.visibleHeight > 120)
    .sort((a, b) => b.visibleHeight - a.visibleHeight)[0]?.video;

  if (visibleVideo) playVisibleReel(visibleVideo);
}

function setupReelAutoplay() {
  if (reelRuntime.observer) reelRuntime.observer.disconnect();
  const videos = Array.from(document.querySelectorAll("#reelList video"));
  videos.forEach((video) => {
    video.muted = true;
    video.loop = true;
    video.playsInline = true;
  });

  reelRuntime.observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting && entry.intersectionRatio >= 0.6)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) {
        playVisibleReel(visible.target);
      } else {
        syncVisibleReelPlayback();
      }
    },
    { threshold: [0, 0.6, 0.9] }
  );

  videos.forEach((video) => reelRuntime.observer.observe(video));
  window.requestAnimationFrame(syncVisibleReelPlayback);
}

function toggleReelVideo(video) {
  if (!video) return;
  if (video.paused) {
    playVisibleReel(video);
  } else {
    video.pause();
  }
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
  renderAdmin();
}

function reportTalk(talkId) {
  const post = findTalk(talkId);
  if (!post) return;
  post.reported = true;
  saveTalkData();
  renderTalks();
  renderAdmin();
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
  renderAdmin();
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
  renderAdmin();
}

function reportReview(reviewId) {
  const review = findReview(reviewId);
  if (!review) return;
  review.reported = true;
  saveReviewData();
  renderReviews();
  renderAdmin();
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
  renderAdminSupport();
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

function renderAdminSupport() {
  $("#adminSupport").innerHTML = state.supportRequests
    .slice()
    .sort((a, b) => {
      if (a.status !== b.status) return a.status === "접수" ? -1 : 1;
      return new Date(b.createdAt) - new Date(a.createdAt);
    })
    .map(
      (request) => `
        <article class="admin-item">
          <span class="pill support-status ${request.status === "처리완료" ? "is-done" : ""}">${escapeHtml(request.status)}</span>
          <h3>${escapeHtml(request.title)}</h3>
          <p>${escapeHtml(request.type)} · ${escapeHtml(request.author)} · ${formatTalkDate(request.createdAt)}</p>
          <p>${escapeHtml(request.body)}</p>
          ${request.contact ? `<p>연락처 ${escapeHtml(request.contact)}</p>` : ""}
          <div class="admin-actions">
            <button class="ghost-button admin-complete-support" data-support-id="${request.id}">처리완료</button>
            <button class="primary-button admin-delete-support" data-support-id="${request.id}">삭제</button>
          </div>
        </article>
      `
    )
    .join("") || `<div class="empty-state">접수된 1:1 문의가 없습니다.</div>`;
}

function switchAdminPanel(panelName) {
  document.querySelectorAll(".admin-tab").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.adminPanel === panelName);
  });
  $("#adminReports").classList.toggle("is-visible", panelName === "reports");
  $("#adminJobs").classList.toggle("is-visible", panelName === "jobs");
  $("#adminCommunity").classList.toggle("is-visible", panelName === "community");
  $("#adminSupport").classList.toggle("is-visible", panelName === "support");
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
  if (viewId === "reels") {
    setupReelAutoplay();
  } else {
    pauseAllReelVideos();
  }
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
  renderAdmin();
});

$("#postReel").addEventListener("click", () => {
  $("#reelForm").requestSubmit();
});

$("#reelList").addEventListener("click", async (event) => {
  const video = event.target.closest("video");
  const likeButton = event.target.closest(".reel-like");
  const reportButton = event.target.closest(".reel-report");
  const shareButton = event.target.closest(".reel-share");

  if (video) {
    toggleReelVideo(video);
    return;
  }
  if (likeButton) {
    toggleReelLike(likeButton.dataset.reelId);
  }
  if (reportButton) {
    reportReel(reportButton.dataset.reelId);
  }
  if (shareButton) {
    const reel = findReel(shareButton.dataset.reelId);
    if (!reel) return;
    const shareText = `${reel.title} - ${reel.caption}`;
    try {
      await navigator.clipboard.writeText(shareText);
      alert("릴스 소개 문구를 복사했습니다.");
    } catch (error) {
      alert(shareText);
    }
  }
});

$("#reelForm").addEventListener("submit", async (event) => {
  event.preventDefault();
  const url = $("#reelUrl").value.trim();
  const file = $("#reelFile").files[0];

  let videoUrl = url;
  try {
    if (!videoUrl && file) videoUrl = await readReelFile(file);
  } catch (error) {
    alert("영상 파일이 너무 큽니다. 짧은 파일을 선택하거나 영상 URL을 붙여주세요.");
    return;
  }

  state.reels.unshift({
    id: `reel-${Date.now()}`,
    category: "릴스",
    title: $("#reelTitle").value,
    caption: $("#reelCaption").value,
    authorMode: "profile",
    author: state.profile.nickname,
    videoUrl,
    likes: 0,
    reported: false,
    createdAt: new Date().toISOString(),
  });
  saveReelData();
  resetForm("#reelForm");
  renderReels();
  syncVisibleReelPlayback();
});

$("#postMarketItem").addEventListener("click", () => {
  $("#marketForm").requestSubmit();
});

$("#marketCategoryFilter").addEventListener("change", renderMarketItems);
$("#marketStatusFilter").addEventListener("change", renderMarketItems);
$("#marketSort").addEventListener("change", renderMarketItems);

$("#marketList").addEventListener("click", (event) => {
  const chatButton = event.target.closest(".market-chat");
  const deleteButton = event.target.closest(".market-delete");

  if (chatButton) startMarketChat(chatButton.dataset.marketId);
  if (deleteButton) deleteMarketItem(deleteButton.dataset.marketId);
});

$("#marketList").addEventListener("change", (event) => {
  const statusSelect = event.target.closest(".market-status");
  if (statusSelect) changeMarketStatus(statusSelect.dataset.marketId, statusSelect.value);
});

$("#marketForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.marketItems.unshift({
    id: `market-${Date.now()}`,
    category: $("#marketCategory").value,
    title: $("#marketTitle").value,
    description: $("#marketDescription").value,
    price: Number($("#marketPrice").value),
    region: $("#marketRegion").value,
    imageUrl: $("#marketImageUrl").value.trim(),
    status: "판매중",
    seller: state.profile.nickname,
    chats: 0,
    createdAt: new Date().toISOString(),
  });
  saveMarketData();
  resetForm("#marketForm");
  renderMarketItems();
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
  renderAdmin();
});

$("#submitSupport").addEventListener("click", () => {
  $("#supportForm").requestSubmit();
});

$("#supportForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.supportRequests.unshift({
    id: `support-${Date.now()}`,
    type: $("#supportType").value,
    title: $("#supportTitle").value,
    body: $("#supportBody").value,
    contact: $("#supportContact").value.trim(),
    author: state.profile.nickname,
    status: "접수",
    createdAt: new Date().toISOString(),
  });
  saveSupportData();
  resetForm("#supportForm");
  renderSupportRequests();
  renderAdmin();
  alert("1:1 문의가 접수되었습니다.");
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
  const completeSupportButton = event.target.closest(".admin-complete-support");
  const deleteSupportButton = event.target.closest(".admin-delete-support");

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
  if (completeSupportButton) changeSupportStatus(completeSupportButton.dataset.supportId, "처리완료");
  if (deleteSupportButton) deleteSupportRequest(deleteSupportButton.dataset.supportId);
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

document.querySelectorAll(".member-type-option").forEach((button) => {
  button.addEventListener("click", () => {
    state.profile.memberType = button.dataset.memberType;
    document.querySelectorAll(".member-type-option").forEach((item) => item.classList.remove("is-selected"));
    button.classList.add("is-selected");
    renderProfile();
  });
});

$("#profileForm").addEventListener("submit", (event) => {
  event.preventDefault();
  state.profile = {
    ...state.profile,
    memberType: state.profile.memberType || "caddie",
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
loadReelData();
loadMarketData();
loadSupportData();
loadReviewData();
mergeExternalGolfCourses();
$("#incomeDate").valueAsDate = new Date();
$("#currentOrigin").textContent = window.location.origin;
renderProfile();
renderJobs();
syncJobsFromSheet({ silent: true });
renderIncome();
renderTalks();
renderReels();
renderMarketItems();
renderSupportRequests();
renderReviews();
renderWeatherCourses();
renderWeather();
renderAdmin();
renderMapCourses();
renderRestaurantList(state.mapCourses[0]);
