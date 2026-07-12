import { questionsEI } from './questions_ei';
import { questionsSN } from './questions_sn';
import { questionsTF } from './questions_tf';
import { questionsJP } from './questions_jp';

export const questions = [];

// Interleave the groups to maintain the strict KDI 12-cycle cross-layered order!
for (let i = 0; i < 12; i++) {
    // Add EI question (Id: 1, 5, 9, 13, ...)
    questions.push({
        id: i * 4 + 1,
        ...questionsEI[i]
    });
    // Add SN question (Id: 2, 6, 10, 14, ...)
    questions.push({
        id: i * 4 + 2,
        ...questionsSN[i]
    });
    // Add TF question (Id: 3, 7, 11, 15, ...)
    questions.push({
        id: i * 4 + 3,
        ...questionsTF[i]
    });
    // Add JP question (Id: 4, 8, 12, 16, ...)
    questions.push({
        id: i * 4 + 4,
        ...questionsJP[i]
    });
}

// 16가지 MBTI 상세 분석 데이터
export const mbtiDetails = {
    "INFJ": {
        title: "통찰력 있는 선지자 (Insightful Visionary)",
        desc: "가장 희귀한 성격 유형으로, 신념이 뚜렷하고 깊은 동정심을 가집니다. 보이지 않는 미래 성향과 메타포를 읽으며 이상적인 공동체를 실천하려 노력합니다.",
        tags: ["비전메이커", "영적 교류자", "타인 동화력", "완벽주의 사색"]
    },
    "INFP": {
        title: "중재하는 이상주의자 (Mediating Idealist)",
        desc: "마음이 깊고 신념이 강하며 자기만의 예술적 세계관을 수호합니다. 인간의 가치와 성장의 비밀에 감응하며 조용히 타인의 빛을 발견해 줍니다.",
        tags: ["예술가 영혼", "신념 수호자", "따뜻한 치유", "공상 과학"]
    },
    "ENFJ": {
        title: "사회를 이끄는 교도관 (Inspiring Leader)",
        desc: "타인의 가치와 성장을 깊이 믿고 공동체의 단합과 긍정적인 비전을 이끌어 갑니다. 뛰어난 조화력과 공감 화법으로 사람들을 단합시킵니다.",
        tags: ["리더의 귀감", "따뜻한 조타수", "공감 메신저", "윤리 수호"]
    },
    "ENFP": {
        title: "재기발랄한 활동가 (Sparkling Activist)",
        desc: "흥미롭고 새로운 사건에 대해 도파민이 터지며 무한한 아이디어를 발산합니다. 사람들과 만나는 인싸력과 즉흥 모험력이 탁월합니다.",
        tags: ["도파민 엔진", "참신함 메이커", "인싸 시선", "도전적 행동"]
    },
    "INTJ": {
        title: "전략적 아키텍트 (Strategic Architect)",
        desc: "논리적이고 독립적이며 전체 판의 구조적 빈틈과 인과율을 날카롭게 스캔합니다. 비전과 원리를 결합하여 완벽한 설계도를 정합시킵니다.",
        tags: ["냉철한 설계자", "인과율 수호", "독립적 개척", "완벽 분석"]
    },
    "INTP": {
        title: "아이디어 관조자 (Logical Thinker)",
        desc: "진실과 구조의 본질에 다가가며, 왜 그렇게 작동하는지 근원적 메커니즘을 탐닉합니다. 독창적인 개념 정립과 비판적 사색에 가치를 둡니다.",
        tags: ["학자 아우라", "개념 수집기", "비판적 분석", "자유 사유"]
    },
    "ENTJ": {
        title: "대담한 통솔자 (Decisive Commander)",
        desc: "현실적인 실행 기한과 자원을 통제하며, 비전 달성을 위해 룰과 팀원을 일사불란하게 정합해 나가는 당찬 추진력을 지녔습니다.",
        tags: ["행동의 수뇌", "목표의 기관차", "원리원칙 지배", "장기 조망"]
    },
    "ENTP": {
        title: "뜨거운 논쟁가 (Visionary Debater)",
        desc: "주위의 모든 고정관념을 깨부수며, 지적 사색의 장난기와 매서운 비판적 토론으로 새로운 패러다임을 제안하고 호기심을 발양합니다.",
        tags: ["기득권 격파", "지적 장난", "참신성 추구", "비판적 발상"]
    },
    "ISFJ": {
        title: "소리 없는 수호자 (Loyal Protector)",
        desc: "차분하고 다정하며 세밀한 실재적 데이터 감리법으로 맡은바 책무를 완벽히 준수하고 공동체의 내실 있는 조화를 지켜 줍니다.",
        tags: ["정직의 기둥", "성실한 이행", "배려의 장원", "안정의 초상"]
    },
    "ISFP": {
        title: "예술가적 탐색관 (Creative Explorer)",
        desc: "현재의 순간, 흙내음, 미술의 채도와 촉각적 질감을 온전하게 음미하고 수용합니다. 사욕이 없고 따뜻하며 조용히 현상을 관조합니다.",
        tags: ["자유 영혼", "촉각 감각가", "평화의 숲길", "소리 없는 빛"]
    },
    "ESFJ": {
        title: "조화로운 사교가 (Harmonious Supporter)",
        desc: "다정한 친화력과 소통의 온기를 주위에 방출하여 모임을 가장 아늑하게 유지합니다. 타인들의 섭섭함을 다정하게 달래고 보살핍니다.",
        tags: ["다정의 메아리", "행사 주역", "인정의 레이더", "실용적 화합"]
    },
    "ESFP": {
        title: "흥이 넘치는 예능인 (Energetic Entertainer)",
        desc: "즉흥적인 텐션과 유쾌한 리엑션으로 주위 사람들에게 기분 좋은 햇살을 비춰 줍니다. 현재 이 순간의 오감 만족과 파티를 즐깁니다.",
        tags: ["도파민 주연", "현장 메이커", "유쾌한 장난", "순간 매식"]
    },
    "ISTJ": {
        title: "청렴결백한 감리원 (Logistician)",
        desc: "시간 엄수, 정량 준수, 숫자의 오차 제거 등 명확한 사실과 원칙의 기둥을 지키며 흔들림 없이 약속을 끝마치는 청렴한 신용을 줍니다.",
        tags: ["원칙주의 검증", "시간의 마스터", "수치적 분석", "든든한 지표"]
    },
    "ISTP": {
        title: "백능의 만능 재주꾼 (Craftsman)",
        desc: "냉철한 이성과 예리한 눈썰미로, 손에 잡히는 도구와 사물의 메커니즘을 관찰하고 뜯어맞춥니다. 최소 노력 최대 효율을 중시합니다.",
        tags: ["도구의 지배자", "최고 가성비", "침착한 시선", "실용적 실천"]
    },
    "ESTJ": {
        title: "엄격한 관리자 (Executive)",
        desc: "명확한 공사 구분과 매뉴얼, 공정성을 지키며 대규모 조직과 물류를 일사불란하게 통제하고 생산성을 극대화하는 행정의 귀재입니다.",
        tags: ["법률적 단죄", "현장 사령관", "최고 효율성", "공정함 수호"]
    },
    "ESTP": {
        title: "모험을 즐기는 주도자 (Entrepreneur)",
        desc: "생동감 있는 실전 기운을 분출하며, 눈으로 팩트가 입증된 현장 문제로 직접 뛰어들어 해결하길 좋아합니다. 행동력과 넉살이 뛰어납니다.",
        tags: ["현장 기마대", "기회 선구자", "호쾌한 결단", "팩트 해결사"]
    }
};
