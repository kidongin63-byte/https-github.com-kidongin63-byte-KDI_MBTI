import React, { useState, useEffect } from 'react';
import { questions, mbtiDetails } from './questions';

// ==========================================
// KDI 전용 명품 오가닉 황토 로고 컴포넌트
// ==========================================
export function KdiLogo({ className = "w-16 h-16" }) {
    return (
        <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
                <linearGradient id="kdiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#cc5a37" />
                    <stop offset="100%" stopColor="#e28a67" />
                </linearGradient>
                <filter id="kdiGlow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>
            <circle cx="50" cy="50" r="45" stroke="url(#kdiGrad)" strokeWidth="2.5" strokeDasharray="6 3" />
            <circle cx="50" cy="50" r="38" fill="url(#kdiGrad)" filter="url(#kdiGlow)" />
            <circle cx="50" cy="50" r="32" fill="#2d221c" />
            <text x="51" y="58" fill="#ffffff" fontSize="20" fontWeight="900" textAnchor="middle" letterSpacing="1.5" fontFamily="sans-serif">KDI</text>
            <path d="M 30,50 A 20,20 0 0,1 70,50" stroke="#cc5a37" strokeWidth="1.5" strokeDasharray="2 2" />
        </svg>
    );
}

// ==========================================
// [초고도화] 1단계부터 48단계까지 완전히 교차 배열되어
// 0.1초마다 전혀 겹치지 않고 새롭게 도출되는 SVG 예술 렌더러
// ==========================================
export function VisualCard({ type, option, id, className = "w-full aspect-[4/3] rounded-2xl cursor-pointer transition-all duration-300 hover:scale-[1.03] hover:shadow-lg border border-[#ebdcd3] bg-white flex flex-col items-center justify-center p-4" }) {
    const renderArt = () => {
        const seed = id;

        switch (type) {
            case "EI": // 외향 (방사, 다채로움, 파편성) vs 내향 (수렴, 아늑함, 고요함)
                if (option === "A") {
                    const raysCount = 5 + (seed % 6); // 5~10개의 고유 빛줄기
                    const angleRotation = seed * 12;
                    return (
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r={8 + (seed % 6)} fill="#cc5a37" />
                            {Array.from({ length: raysCount }).map((_, idx) => {
                                const angle = (idx * 360) / raysCount + angleRotation;
                                const rad = (angle * Math.PI) / 180;
                                const x2 = 50 + Math.cos(rad) * (26 + (seed % 9));
                                const y2 = 50 + Math.sin(rad) * (26 + (seed % 9));
                                return (
                                    <line
                                        key={idx}
                                        x1="50" y1="50"
                                        x2={x2} y2={y2}
                                        stroke="#e28a67"
                                        strokeWidth="3.5"
                                        strokeLinecap="round"
                                    />
                                );
                            })}
                            <circle cx={25 + (seed % 14)} cy={30 + (seed % 10)} r="4.5" fill="#a67c52" />
                            <circle cx={75 - (seed % 10)} cy={70 - (seed % 14)} r="5.5" fill="#5b8c85" />
                        </svg>
                    );
                } else {
                    const ringsCount = 2 + (seed % 3); // 2~4개 고유 아늑 고리
                    const sparkOffset = seed * 4;
                    return (
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                            {Array.from({ length: ringsCount }).map((_, idx) => (
                                <circle
                                    key={idx}
                                    cx="50" cy="50"
                                    r={16 + idx * (7 + (seed % 5))}
                                    fill="none"
                                    stroke="#ebdcd3"
                                    strokeWidth="2"
                                />
                            ))}
                            <circle cx="50" cy="50" r={10 + (seed % 5)} fill="#cc5a37" opacity="0.12" />
                            <path
                                d={`M50,${33 - (seed % 5)} Q${53 + (seed % 4)},43 50,57 Q${47 - (seed % 4)},43 50,${33 - (seed % 5)} Z`}
                                fill="#cc5a37"
                            />
                            <circle cx={50 + Math.sin(sparkOffset) * 4} cy="42" r="3" fill="#e28a67" />
                        </svg>
                    );
                }

            case "SN": // 감각 (반듯한 건축 격자, 질서) vs 직관 (꿈결 파도, 은하 흐름)
                if (option === "A") {
                    const layoutMode = seed % 3;
                    return (
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                            <rect x="15" y="15" width="70" height="70" stroke="#2d221c" strokeWidth="2.5" fill="none" />
                            {layoutMode === 0 && (
                                <>
                                    <line x1="15" y1="50" x2="85" y2="50" stroke="#ebdcd3" strokeWidth="2" />
                                    <line x1="50" y1="15" x2="50" y2="85" stroke="#ebdcd3" strokeWidth="2" />
                                    <rect x="18" y="18" width="29" height="30" fill="#cc5a37" opacity="0.8" />
                                </>
                            )}
                            {layoutMode === 1 && (
                                <>
                                    <line x1="15" y1="38" x2="85" y2="38" stroke="#ebdcd3" strokeWidth="2" />
                                    <line x1="15" y1="62" x2="85" y2="62" stroke="#ebdcd3" strokeWidth="2" />
                                    <line x1="50" y1="15" x2="50" y2="85" stroke="#ebdcd3" strokeWidth="2" />
                                    <rect x="52" y="39" width="31" height="21" fill="#e28a67" opacity="0.8" />
                                </>
                            )}
                            {layoutMode === 2 && (
                                <>
                                    <rect x="25" y="25" width="50" height="50" stroke="#ebdcd3" strokeWidth="2" fill="none" />
                                    <rect x="35" y="35" width="30" height="30" fill="#cc5a37" opacity="0.8" />
                                </>
                            )}
                        </svg>
                    );
                } else {
                    const wavesCount = 1 + (seed % 3);
                    const amplitude = 6 + (seed % 8);
                    const points = Array.from({ length: 71 }).map((_, idx) => {
                        const x = 15 + idx;
                        const y = 50 + Math.sin((idx * wavesCount * Math.PI) / 35 + seed) * amplitude;
                        return `${x},${y}`;
                    }).join(' ');

                    return (
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                            <polyline points={points} fill="none" stroke="#cc5a37" strokeWidth="3.5" strokeLinecap="round" />
                            {Array.from({ length: 1 + (seed % 3) }).map((_, idx) => (
                                <circle
                                    key={idx}
                                    cx={25 + (idx * 22) + (seed % 8)}
                                    cy={25 + (seed % 14) + (idx % 2 === 0 ? 10 : -6)}
                                    r="3.5"
                                    fill="#e28a67"
                                />
                            ))}
                        </svg>
                    );
                }

            case "TF": // 사고 (수학 다면체, 분자 결합) vs 감정 (겹친 구름, 꽃잎)
                if (option === "A") {
                    const sidesCount = 3 + (seed % 3); // 3, 4, 5각형 변형
                    const polyPoints = Array.from({ length: sidesCount }).map((_, idx) => {
                        const angle = (idx * 360) / sidesCount - 90 + (seed * 6);
                        const rad = (angle * Math.PI) / 180;
                        const currentRadius = 22 + (seed % 6);
                        const x = 50 + Math.cos(rad) * currentRadius;
                        const y = 50 + Math.sin(rad) * currentRadius;
                        return `${x},${y}`;
                    }).join(' ');
                    return (
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                            <polygon points={polyPoints} stroke="#2d221c" strokeWidth="2.5" fill="none" />
                            {polyPoints.split(' ').map((p, idx) => {
                                const [x, y] = p.split(',');
                                return <circle key={idx} cx={x} cy={y} r="5" fill="#cc5a37" />;
                            })}
                        </svg>
                    );
                } else {
                    const softPetals = 4 + (seed % 3);
                    return (
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                            {Array.from({ length: softPetals }).map((_, idx) => {
                                const angle = (idx * 360) / softPetals + (seed * 5);
                                const rad = (angle * Math.PI) / 180;
                                const cx = 50 + Math.cos(rad) * (12 + (seed % 4));
                                const cy = 50 + Math.sin(rad) * (12 + (seed % 4));
                                return (
                                    <circle
                                        key={idx}
                                        cx={cx}
                                        cy={cy}
                                        r={10 + (seed % 4)}
                                        fill="#cc5a37"
                                        opacity="0.6"
                                    />
                                );
                            })}
                            <circle cx="50" cy="50" r="8" fill="#faf6f0" />
                        </svg>
                    );
                }

            case "JP": // 판단 (정렬 보관함) vs 인식 (역동 소용돌이)
                if (option === "A") {
                    const gridRows = 2 + (seed % 2);
                    const gridCols = 2 + (seed % 2);
                    return (
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                            {Array.from({ length: gridRows }).map((_, rIdx) => (
                                Array.from({ length: gridCols }).map((_, cIdx) => {
                                    const boxWidth = 54 / gridCols;
                                    const boxHeight = 54 / gridRows;
                                    const posX = 23 + cIdx * (boxWidth + 3);
                                    const posY = 23 + rIdx * (boxHeight + 3);
                                    return (
                                        <g key={`${rIdx}-${cIdx}`}>
                                            <rect
                                                x={posX}
                                                y={posY}
                                                width={boxWidth}
                                                height={boxHeight}
                                                rx="3"
                                                fill={(rIdx + cIdx + seed) % 2 === 0 ? "#cc5a37" : "#ebdcd3"}
                                            />
                                            <circle cx={posX + boxWidth / 2} cy={posY + boxHeight / 2} r="2.2" fill="#faf6f0" />
                                        </g>
                                    );
                                })
                            ))}
                        </svg>
                    );
                } else {
                    const spiralDensity = 35 + (seed % 25);
                    const spiralPoints = Array.from({ length: spiralDensity }).map((_, idx) => {
                        const theta = (idx * 0.18) + (seed * 0.15);
                        const radial = 3.5 + (idx * 0.42);
                        const x = 50 + Math.cos(theta) * radial;
                        const y = 50 + Math.sin(theta) * radial;
                        return `${x},${y}`;
                    }).join(' ');
                    return (
                        <svg className="w-24 h-24" viewBox="0 0 100 100">
                            <polyline points={spiralPoints} fill="none" stroke="#cc5a37" strokeWidth="2.8" strokeLinecap="round" />
                            <circle cx={35 + (seed % 15)} cy={25 + (seed % 15)} r="4" fill="#a67c52" />
                            <circle cx={65 - (seed % 15)} cy={75 - (seed % 15)} r="3.5" fill="#5b8c85" />
                        </svg>
                    );
                }
            default:
                return null;
        }
    };

    const getSubTitle = () => {
        if (type === "EI") return option === "A" ? "사방으로 퍼지는 활기" : "안으로 모이는 아늑함";
        if (type === "SN") return option === "A" ? "자로 잰 규칙적인 질서" : "꿈결처럼 흐르는 낭만";
        if (type === "TF") return option === "A" ? "균형 잡힌 기하학 도형" : "포근하게 안아주는 곡선";
        if (type === "JP") return option === "A" ? "정갈하게 정돈된 서랍" : "자유롭게 튀어오르는 바람";
        return "";
    };

    return (
        <div className={className}>
            <div className="flex-1 flex items-center justify-center">
                {renderArt()}
            </div>
            <span className="text-[11px] font-extrabold text-[#7d6e65] mt-3 font-sans">
                {getSubTitle()}
            </span>
        </div>
    );
}

export const getAttemptMetrics = (answersList) => {
    const score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    if (answersList && Array.isArray(answersList)) {
        answersList.forEach(ans => { score[ans] = (score[ans] || 0) + 1; });
    }
    return {
        E: Math.round((score.E / 12) * 100),
        I: Math.round((score.I / 12) * 100),
        S: Math.round((score.S / 12) * 100),
        N: Math.round((score.N / 12) * 100),
        T: Math.round((score.T / 12) * 100),
        F: Math.round((score.F / 12) * 100),
        J: Math.round((score.J / 12) * 100),
        P: Math.round((score.P / 12) * 100)
    };
};

export const selectVariantIndex = (qIdx, attempts) => {
    const counts = [0, 0, 0, 0, 0];
    if (attempts && Array.isArray(attempts)) {
        attempts.forEach(att => {
            if (att.variantIndexes && att.variantIndexes[qIdx] !== undefined) {
                const v = att.variantIndexes[qIdx];
                if (v >= 0 && v < 5) {
                    counts[v]++;
                }
            }
        });
    }
    const minCount = Math.min(...counts);
    const candidates = [];
    for (let i = 0; i < 5; i++) {
        if (counts[i] === minCount) {
            candidates.push(i);
        }
    }
    return candidates[Math.floor(Math.random() * candidates.length)];
};

export function TrendChart({ attempts }) {
    const [activeLines, setActiveLines] = useState({ E: true, S: true, T: true, J: true });

    if (!attempts || attempts.length === 0) return null;

    const width = 360;
    const height = 180;
    const paddingLeft = 32;
    const paddingRight = 10;
    const paddingTop = 15;
    const paddingBottom = 25;

    const chartWidth = width - paddingLeft - paddingRight;
    const chartHeight = height - paddingTop - paddingBottom;

    const n = attempts.length;

    const getCoordinates = (traitKey) => {
        return attempts.map((att, idx) => {
            const metrics = getAttemptMetrics(att.answers);
            const val = metrics[traitKey] || 0;
            const x = paddingLeft + (n > 1 ? (idx / (n - 1)) * chartWidth : chartWidth / 2);
            const y = paddingTop + chartHeight - (val / 100) * chartHeight;
            return { x, y, val };
        });
    };

    const lines = [
        { key: 'E', label: 'E (외향)', color: '#cc5a37', coords: getCoordinates('E') },
        { key: 'S', label: 'S (감각)', color: '#a67c52', coords: getCoordinates('S') },
        { key: 'T', label: 'T (사고)', color: '#5b8c85', coords: getCoordinates('T') },
        { key: 'J', label: 'J (판단)', color: '#887060', coords: getCoordinates('J') }
    ];

    return (
        <div className="bg-[#faf6f0] p-4 rounded-2xl border border-[#ebdcd3] shadow-inner font-sans">
            <div className="flex justify-between items-center mb-2">
                <span className="text-[11px] font-black text-[#2d221c] flex items-center gap-1">
                    <span>📈</span> 일차별 성향 스펙트럼 변동 (최근 {n}회차)
                </span>
                <span className="text-[9px] text-[#7d6e65]">0%는 대칭 성향(I/N/F/P) 100% 의미</span>
            </div>

            <svg viewBox={`0 0 ${width} ${height}`} className="w-full h-auto overflow-visible select-none select-none">
                {[0, 25, 50, 75, 100].map(val => {
                    const y = paddingTop + chartHeight - (val / 100) * chartHeight;
                    return (
                        <g key={val} className="opacity-60">
                            <line
                                x1={paddingLeft}
                                y1={y}
                                x2={width - paddingRight}
                                y2={y}
                                stroke="#decbb7"
                                strokeWidth="0.8"
                                strokeDasharray={val === 50 ? "0" : "2 2"}
                            />
                            <text
                                x={paddingLeft - 6}
                                y={y + 3}
                                fill="#7d6e65"
                                fontSize="8"
                                textAnchor="end"
                                className="font-bold"
                            >
                                {val}%
                            </text>
                        </g>
                    );
                })}

                {attempts.map((att, idx) => {
                    const x = paddingLeft + (n > 1 ? (idx / (n - 1)) * chartWidth : chartWidth / 2);
                    return (
                        <g key={idx}>
                            <line
                                x1={x}
                                y1={paddingTop}
                                x2={x}
                                y2={paddingTop + chartHeight}
                                stroke="#decbb7"
                                strokeWidth="0.8"
                                opacity="0.35"
                            />
                            <text
                                x={x}
                                y={height - 8}
                                fill="#7d6e65"
                                fontSize="8"
                                textAnchor="middle"
                                className="font-bold"
                            >
                                #{idx + 1}
                            </text>
                        </g>
                    );
                })}

                {lines.map(line => {
                    if (!activeLines[line.key] || line.coords.length === 0) return null;

                    let pathD = "";
                    if (line.coords.length > 1) {
                        pathD = `M ${line.coords[0].x} ${line.coords[0].y} ` +
                            line.coords.slice(1).map(c => `L ${c.x} ${c.y}`).join(' ');
                    }

                    return (
                        <g key={line.key}>
                            {pathD && (
                                <path
                                    d={pathD}
                                    fill="none"
                                    stroke={line.color}
                                    strokeWidth="2.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="transition-all duration-300"
                                />
                            )}
                            {line.coords.map((c, cIdx) => (
                                <g key={cIdx} className="group cursor-pointer">
                                    <circle
                                        cx={c.x}
                                        cy={c.y}
                                        r="3.5"
                                        fill={line.color}
                                        stroke="#ffffff"
                                        strokeWidth="1.2"
                                    />
                                    <circle
                                        cx={c.x}
                                        cy={c.y}
                                        r="7"
                                        fill={line.color}
                                        opacity="0"
                                        className="hover:opacity-20 transition-opacity"
                                    />
                                    <title>{`${line.label}: ${c.val}%`}</title>
                                </g>
                            ))}
                        </g>
                    );
                })}
            </svg>

            <div className="flex flex-wrap gap-1.5 mt-3 justify-center">
                {lines.map(line => (
                    <button
                        key={line.key}
                        onClick={() => setActiveLines(prev => ({ ...prev, [line.key]: !prev[line.key] }))}
                        className={`px-2.5 py-1 rounded-full text-[9px] font-black flex items-center gap-1 transition-all border ${activeLines[line.key]
                            ? 'bg-white text-[#2d221c]'
                            : 'bg-gray-100/50 text-[#a3948b] border-transparent opacity-65'
                            }`}
                        style={{ borderColor: activeLines[line.key] ? line.color : 'transparent' }}
                    >
                        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: line.color }}></span>
                        {line.label}
                    </button>
                ))}
            </div>
        </div>
    );
}

export default function App() {
    const [gameState, setGameState] = useState('login'); // login, intro, play, result, compare, dashboard
    const [selectedMode, setSelectedMode] = useState('text'); // text, image (visual)
    const [currentIdx, setCurrentIdx] = useState(0);
    const [answers, setAnswers] = useState([]);

    const [nickname, setNickname] = useState('');
    const [pin, setPin] = useState('');
    const [loginError, setLoginError] = useState('');
    const [loading, setLoading] = useState(false);

    const [savedProfile, setSavedProfile] = useState(null);

    const [mbtiScore, setMbtiScore] = useState({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });
    const [textResult, setTextResult] = useState(null);
    const [imageResult, setImageResult] = useState(null);

    const [customModal, setCustomModal] = useState({ show: false, title: '', desc: '', onConfirm: null, onCancel: null });
    const [toastMessage, setToastMessage] = useState('');

    // PWA 설치 감지 상태변수
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [showInstallBtn, setShowInstallBtn] = useState(false);
    const [showManualModal, setShowManualModal] = useState(false);

    // [초고도화] 다회차 및 다이내믹 질문 선택용 세션 상태
    const [activeVariantIndexes, setActiveVariantIndexes] = useState([]);
    const [activeShuffledOptions, setActiveShuffledOptions] = useState([]);

    const localDbPrefix = "kdi_mbti_local_db_";

    const triggerToast = (msg) => {
        setToastMessage(msg);
        setTimeout(() => { setToastMessage(''); }, 2500);
    };

    // PWA 설치 제어
    useEffect(() => {
        const handleBeforeInstall = (e) => {
            e.preventDefault();
            setDeferredPrompt(e);
            setShowInstallBtn(true);
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstall);
        return () => window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
    }, []);

    // 자동 로그인 세션 복구 마운트 로드
    useEffect(() => {
        try {
            const lastLoginId = localStorage.getItem('kdi_mbti_last_logged_in_id');
            if (lastLoginId) {
                const savedDataStr = localStorage.getItem(lastLoginId);
                if (savedDataStr) {
                    const data = JSON.parse(savedDataStr);
                    setTextResult(data.textResult || null);
                    setImageResult(data.imageResult || null);
                    setSavedProfile(data);
                    setGameState('intro');
                }
            }
        } catch (err) {
            console.error("Failed to restore login session:", err);
        }
    }, []);

    const handleInstallApp = async () => {
        if (!deferredPrompt) return;
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            setDeferredPrompt(null);
            setShowInstallBtn(false);
            triggerToast("KDI MBTI 앱이 스마트폰 홈 화면에 추가되었습니다! 🎉");
        }
    };

    // 로컬 로그인 기동
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (!nickname.trim()) {
            setLoginError("별명을 올바르게 입력해 주세요!");
            return;
        }
        if (pin.length !== 6 || isNaN(Number(pin))) {
            setLoginError("비밀번호 숫자 6자리를 정교하게 맞춰주세요!");
            return;
        }

        setLoading(true);
        setLoginError("");

        setTimeout(() => {
            try {
                const docId = `${localDbPrefix}${nickname.trim()}_${pin.trim()}`;
                const existingDataStr = localStorage.getItem(docId);

                if (existingDataStr) {
                    const data = JSON.parse(existingDataStr);
                    setTextResult(data.textResult || null);
                    setImageResult(data.imageResult || null);
                    setSavedProfile(data);
                    localStorage.setItem('kdi_mbti_last_logged_in_id', docId);

                    const savedTextAnswers = data.textAnswers || [];
                    const savedImageAnswers = data.imageAnswers || [];

                    let activeSession = data.activeSession;

                    // Fallback to legacy fields if activeSession is missing but progress is incomplete
                    if (!activeSession) {
                        if (savedTextAnswers.length > 0 && savedTextAnswers.length < 48) {
                            activeSession = {
                                mode: 'text',
                                answers: savedTextAnswers,
                                variantIndexes: Array(48).fill(0).map((_, i) => selectVariantIndex(i, data.attempts || [])),
                                shuffledOptions: Array(48).fill(0).map(() => Math.random() < 0.5)
                            };
                        } else if (savedImageAnswers.length > 0 && savedImageAnswers.length < 48) {
                            activeSession = {
                                mode: 'image',
                                answers: savedImageAnswers,
                                variantIndexes: Array(48).fill(0).map((_, i) => selectVariantIndex(i, data.attempts || [])),
                                shuffledOptions: Array(48).fill(0).map(() => Math.random() < 0.5)
                            };
                        }
                    }

                    if (activeSession && activeSession.answers && activeSession.answers.length > 0 && activeSession.answers.length < 48) {
                        const sess = activeSession;
                        setCustomModal({
                            show: true,
                            title: "📝 이전 진행 기록 발견!",
                            desc: `${sess.mode === 'text' ? '텍스트 이성' : '이미지 직관'} 검사를 [${sess.answers.length}단계]까지 완료하신 중단 기록이 있습니다. 이어서 해결할까요?`,
                            onConfirm: () => {
                                setSelectedMode(sess.mode);
                                setAnswers(sess.answers);
                                setCurrentIdx(sess.answers.length);
                                setActiveVariantIndexes(sess.variantIndexes || []);
                                setActiveShuffledOptions(sess.shuffledOptions || []);

                                const restoredScore = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
                                sess.answers.forEach(ans => { restoredScore[ans] = (restoredScore[ans] || 0) + 1; });
                                setMbtiScore(restoredScore);

                                setGameState('play');
                                setCustomModal(prev => ({ ...prev, show: false }));
                                triggerToast("이전 단계를 이어서 시작합니다! 🚀");
                            },
                            onCancel: () => {
                                const docId = `${localDbPrefix}${nickname.trim()}_${pin.trim()}`;
                                const updatedData = { ...data, activeSession: null };
                                localStorage.setItem(docId, JSON.stringify(updatedData));
                                setSavedProfile(updatedData);
                                setCustomModal(prev => ({ ...prev, show: false }));
                                setGameState('intro');
                            }
                        });
                    } else {
                        setGameState('intro');
                    }
                } else {
                    const newProfile = {
                        nickname: nickname.trim(),
                        pin: pin.trim(),
                        textResult: null,
                        imageResult: null,
                        textAnswers: [],
                        imageAnswers: [],
                        attempts: [],
                        activeSession: null,
                        createdAt: new Date().toISOString()
                    };
                    localStorage.setItem(docId, JSON.stringify(newProfile));
                    setTextResult(null);
                    setImageResult(null);
                    setSavedProfile(newProfile);
                    localStorage.setItem('kdi_mbti_last_logged_in_id', docId);
                    setGameState('intro');
                    triggerToast("KDI 개인 자아 보관함이 생성되었습니다! 🌱");
                }
            } catch (err) {
                console.error(err);
                setLoginError("디바이스 메모리 보관함 연동에 에러가 발생했습니다.");
            } finally {
                setLoading(false);
            }
        }, 400);
    };

    const startTest = (mode) => {
        setSelectedMode(mode);
        setCurrentIdx(0);
        setAnswers([]);
        setMbtiScore({ E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 });

        const isCompleted = mode === 'text' ? (textResult ? true : false) : (imageResult ? true : false);
        const initializeNewSession = () => {
            const pastAttempts = savedProfile?.attempts || [];
            const newVariantIndexes = [];
            const newShuffledOptions = [];
            for (let i = 0; i < 48; i++) {
                newVariantIndexes.push(selectVariantIndex(i, pastAttempts));
                newShuffledOptions.push(Math.random() < 0.5);
            }
            setActiveVariantIndexes(newVariantIndexes);
            setActiveShuffledOptions(newShuffledOptions);
            updateLocalAnswersWithVariant(mode, [], newVariantIndexes, newShuffledOptions);
        };

        if (isCompleted) {
            setCustomModal({
                show: true,
                title: "🔄 성향 재측정 안내",
                desc: "이미 도출된 성향 결과지가 저장소에 기록되어 있습니다. 초기화하고 처음부터 다시 분석하시겠습니까?",
                onConfirm: () => {
                    setCustomModal(prev => ({ ...prev, show: false }));
                    setGameState('play');
                    initializeNewSession();
                },
                onCancel: () => { setCustomModal(prev => ({ ...prev, show: false })); }
            });
        } else {
            setGameState('play');
            initializeNewSession();
        }
    };

    const handleSelect = (scoreLetter) => {
        const updatedAnswers = [...answers, scoreLetter];
        setAnswers(updatedAnswers);

        const newScore = { ...mbtiScore };
        newScore[scoreLetter] = (newScore[scoreLetter] || 0) + 1;
        setMbtiScore(newScore);

        updateLocalAnswers(selectedMode, updatedAnswers);

        if (currentIdx < 47) {
            setCurrentIdx(currentIdx + 1);
        } else {
            const finalMbti = calculateMbti(newScore);
            saveFinalResultToLocal(selectedMode, finalMbti, updatedAnswers);
            setGameState('result');
            triggerToast("48계단 완료! 성향 분석 완료 🏆");
        }
    };

    const handlePrev = () => {
        if (currentIdx > 0) {
            const updatedAnswers = [...answers];
            const lastAnswer = updatedAnswers.pop();
            setAnswers(updatedAnswers);

            const newScore = { ...mbtiScore };
            if (lastAnswer) {
                newScore[lastAnswer] = Math.max(0, newScore[lastAnswer] - 1);
            }
            setMbtiScore(newScore);
            setCurrentIdx(currentIdx - 1);

            updateLocalAnswers(selectedMode, updatedAnswers);
        }
    };

    const updateLocalAnswersWithVariant = (mode, currentAnswersList, vIndexes, sOptions) => {
        if (!savedProfile) return;
        try {
            const docId = `${localDbPrefix}${savedProfile.nickname}_${savedProfile.pin}`;
            const existingData = JSON.parse(localStorage.getItem(docId) || "{}");

            existingData.activeSession = {
                mode,
                answers: currentAnswersList,
                variantIndexes: vIndexes,
                shuffledOptions: sOptions
            };

            localStorage.setItem(docId, JSON.stringify(existingData));
            setSavedProfile(existingData);
        } catch (err) {
            console.error("로컬 세션 저장 실패", err);
        }
    };

    const updateLocalAnswers = (mode, currentAnswersList) => {
        updateLocalAnswersWithVariant(mode, currentAnswersList, activeVariantIndexes, activeShuffledOptions);
    };

    const calculateMbti = (score) => {
        let result = "";
        result += (score.E >= score.I) ? "E" : "I";
        result += (score.S >= score.N) ? "S" : "N";
        result += (score.T >= score.F) ? "T" : "F";
        result += (score.J >= score.P) ? "J" : "P";
        return result;
    };

    const saveFinalResultToLocal = (mode, finalMbti, finalAnswersList) => {
        if (!savedProfile) return;
        try {
            const docId = `${localDbPrefix}${savedProfile.nickname}_${savedProfile.pin}`;
            const existingData = JSON.parse(localStorage.getItem(docId) || "{}");

            const newAttempt = {
                id: Date.now(),
                timestamp: new Date().toISOString(),
                mode,
                result: finalMbti,
                answers: finalAnswersList,
                variantIndexes: activeVariantIndexes
            };

            let updatedAttempts = [...(existingData.attempts || []), newAttempt];
            if (updatedAttempts.length > 10) {
                updatedAttempts = updatedAttempts.slice(-10);
            }

            existingData.attempts = updatedAttempts;
            existingData.activeSession = null;

            // Keep the legacy fields in sync for compatibility
            const latestText = updatedAttempts.filter(att => att.mode === 'text').pop();
            const latestImage = updatedAttempts.filter(att => att.mode === 'image').pop();

            existingData.textResult = latestText ? latestText.result : null;
            existingData.textAnswers = latestText ? latestText.answers : [];
            existingData.imageResult = latestImage ? latestImage.result : null;
            existingData.imageAnswers = latestImage ? latestImage.answers : [];

            localStorage.setItem(docId, JSON.stringify(existingData));
            setSavedProfile(existingData);

            setTextResult(existingData.textResult);
            setImageResult(existingData.imageResult);
        } catch (err) {
            console.error("최종 저장 실패", err);
        }
    };

    const generateAnalysisReport = () => {
        if (!textResult || !imageResult) return null;

        const calcPercentages = (answersList) => {
            const score = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
            answersList.forEach(ans => { score[ans] = (score[ans] || 0) + 1; });

            return {
                EI: {
                    E: Math.round((score.E / 12) * 100),
                    I: Math.round((score.I / 12) * 100)
                },
                SN: {
                    S: Math.round((score.S / 12) * 100),
                    N: Math.round((score.N / 12) * 100)
                },
                TF: {
                    T: Math.round((score.T / 12) * 100),
                    F: Math.round((score.F / 12) * 100)
                },
                JP: {
                    J: Math.round((score.J / 12) * 100),
                    P: Math.round((score.P / 12) * 100)
                }
            };
        };

        const textMetrics = calcPercentages(savedProfile?.textAnswers || []);
        const imageMetrics = calcPercentages(savedProfile?.imageAnswers || []);

        if (textResult === imageResult) {
            return {
                status: "perfect_match",
                title: "온전한 내면의 지배자! 일란성 자아 💎",
                desc: "글자를 분석해 차분한 논리적 결론을 내릴 때와, 감각적인 미술 카드를 보고 마음을 열 때의 본능이 완전하게 일치합니다. 대인관계에서 스스로 세운 중심선이 매우 확고한 건강한 정신력의 상징입니다.",
                textMetrics,
                imageMetrics
            };
        }

        const differences = [];
        if (textResult[0] !== imageResult[0]) {
            differences.push({
                trait: "E(외향) vs I(내향) : 사회적 배터리 충돌",
                reason: "언어(글)를 읽을 때는 다른 사람들과 대화하며 맞춰가려는 외향성(E)이 작동하지만, 고요한 미술 일러스트를 관람할 때는 지쳐있는 영혼을 가만히 내려놓고 나를 묵묵히 충전하고 싶은 내향적 온기(I)가 작동한 것입니다."
            });
        }
        if (textResult[1] !== imageResult[1]) {
            differences.push({
                trait: "S(감각) vs N(직관) : 구조적 감성 충돌",
                reason: "논리적인 정론 글자를 바라보는 뇌는 상식적인 질서나 팩트(S)에 갇히기 쉬운 반면, 추상화 같은 감각적인 드로잉을 감상할 때는 꿈틀거리는 무의식 영역이 자극되어 자유로운 은하수나 낭만(N)을 허용했기 때문입니다."
            });
        }
        if (textResult[2] !== imageResult[2]) {
            differences.push({
                trait: "T(사고) vs F(감정) : 이성과 감정의 줄다리기",
                reason: "상황이 글자로 들어올 때는 옳고 그름을 가리거나 논리적 해법(T)을 고르려 통제하지만, 다정한 꽃잎이나 마음 곡선 일러스트 앞에서는 나도 모르게 가슴이 풀어지며 공감과 배려(F)를 선택했기 때문입니다."
            });
        }
        if (textResult[3] !== imageResult[3]) {
            differences.push({
                trait: "J(판단) vs P(인식) : 규율과 탈출의 갈망",
                reason: "지문 상에서는 규율을 정확하게 지키고 철저히 계획을 하려는 사회적 의무감(J)에 따르지만, 자유분방한 드로잉 아트를 볼 때는 계획에서 잠시 벗어나 유연하고 자유로운 공상(P)을 품고 싶다는 속마음이 표출된 것입니다."
            });
        }

        return {
            status: "discrepancy",
            title: "신비롭고 영리한 입체적 다면 자아! 🎭",
            desc: "글을 이해하는 좌뇌(이성/분석)와 그림을 느끼는 우뇌(무의식/영감)가 서로 독창적인 심리 지도를 구성했습니다. 이는 이상한 상태가 아니라 주위 자극의 질감에 맞게 적응하는 뇌의 유연한 회복 탄력성을 의미합니다.",
            details: differences,
            textMetrics,
            imageMetrics
        };
    };

    const handleCopyResult = () => {
        if (!textResult || !imageResult || !savedProfile) return;
        const summaryText = `[KDI ${savedProfile.nickname}님의 이중자아 MBTI 비교서]\n\n📝 이성(텍스트) 자아: ${textResult} (${mbtiDetails[textResult]?.title || ''})\n🎨 무의식(이미지) 자아: ${imageResult} (${mbtiDetails[imageResult]?.title || ''})\n\n과연 당신의 겉과 속은 얼마나 닮았을까요? 함께 분석해 보세요! ✨`;

        const tempTextArea = document.createElement('textarea');
        tempTextArea.value = summaryText;
        document.body.appendChild(tempTextArea);
        tempTextArea.select();
        try {
            document.execCommand('copy');
            triggerToast("멋진 KDI 성격 분석서가 클립보드에 담겼습니다! 친구들에게 전송해 보세요 💌");
        } catch (err) {
            triggerToast("수동 복사를 진행해 주세요.");
        }
        document.body.removeChild(tempTextArea);
    };

    const currentQuestion = questions[currentIdx];

    // Get currently active variant index for SN, TF, JP, EI
    const currentVariantIndex = (activeVariantIndexes && activeVariantIndexes[currentIdx] !== undefined) ? activeVariantIndexes[currentIdx] : 0;

    // Get question content from variants list
    const questionText = currentQuestion ? (currentQuestion.variants ? currentQuestion.variants[currentVariantIndex] : {
        t: currentQuestion.title,
        d: currentQuestion.desc,
        a: currentQuestion.optionA,
        b: currentQuestion.optionB
    }) : { t: "", d: "", a: "", b: "" };

    const isShuffled = (activeShuffledOptions && activeShuffledOptions[currentIdx]) ? true : false;

    // Define option representations
    const option1 = isShuffled
        ? { score: currentQuestion?.scoreB, text: questionText.b, visualOption: "B" }
        : { score: currentQuestion?.scoreA, text: questionText.a, visualOption: "A" };

    const option2 = isShuffled
        ? { score: currentQuestion?.scoreA, text: questionText.a, visualOption: "A" }
        : { score: currentQuestion?.scoreB, text: questionText.b, visualOption: "B" };

    const progressPercent = Math.round(((currentIdx + 1) / 48) * 100);
    const activeResult = selectedMode === 'text' ? textResult : imageResult;
    const analysis = generateAnalysisReport();

    return (
        <div className="min-h-screen w-screen bg-[#ebe4da] text-[#2d221c] flex items-center justify-center sm:p-6 font-sans select-none relative overflow-hidden">
            {/* Desktop Background Circles */}
            <div className="absolute top-10 left-10 w-96 h-96 bg-[#cc5a37]/5 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#e28a67]/5 rounded-full blur-3xl pointer-events-none"></div>

            {/* 9:16 aspect ratio smartphone container */}
            <div className="w-full h-screen sm:h-[840px] sm:max-h-[92vh] sm:w-[472.5px] sm:aspect-[9/16] bg-[#f7f2ea] sm:rounded-[40px] sm:shadow-2xl sm:border-[10px] sm:border-[#382b24] relative flex flex-col justify-start overflow-y-auto no-scrollbar">

                {/* Background elements inside the mobile frame */}
                <div className="absolute top-10 left-10 w-64 h-64 bg-[#cc5a37]/5 rounded-full blur-2xl pointer-events-none"></div>
                <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#e28a67]/5 rounded-full blur-2xl pointer-events-none"></div>

                {customModal.show && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                        <div className="bg-white border border-[#ebdcd3] rounded-3xl p-6 max-w-sm w-full shadow-2xl text-center font-sans">
                            <h3 className="text-base font-extrabold text-[#2d221c] mb-2 font-sans">{customModal.title}</h3>
                            <p className="text-[#7d6e65] text-xs leading-relaxed mb-6 font-sans">{customModal.desc}</p>
                            <div className="flex gap-2.5 font-sans">
                                <button
                                    onClick={customModal.onCancel}
                                    className="flex-1 py-3 bg-[#f7f2ea] hover:bg-[#ebdcd0] text-[#7d6e65] font-bold rounded-xl text-xs active:scale-[0.98] transition-all font-sans"
                                >
                                    새로 시작할래요
                                </button>
                                <button
                                    onClick={customModal.onConfirm}
                                    className="flex-1 py-3 bg-gradient-to-r from-[#cc5a37] to-[#e28a67] text-white font-extrabold rounded-xl text-xs active:scale-[0.98] transition-all font-sans"
                                >
                                    이어서 할게요!
                                </button>
                            </div>
                        </div>
                    </div>
                )}

                {showManualModal && (
                    <div className="absolute inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in font-sans">
                        <div className="bg-white border border-[#ebdcd3] rounded-3xl p-5 max-w-sm w-full max-h-[85%] shadow-2xl flex flex-col relative font-sans animate-fade-in">
                            <h3 className="text-base font-extrabold text-[#2d221c] mb-3 text-center flex items-center justify-center gap-1.5 font-bold font-sans">
                                <span>📖</span> KDI의 MBTI 분석기 사용설명서
                            </h3>

                            <div className="flex-1 overflow-y-auto pr-1 text-left text-[11px] text-[#4c3e38] space-y-3.5 leading-relaxed font-sans mb-4 no-scrollbar">
                                <div className="bg-[#faf6f0] p-3 rounded-xl border border-[#ebdcd3]">
                                    <h4 className="font-extrabold text-[#cc5a37] mb-1 font-bold">1. 두 가지 자아 탐색 모드</h4>
                                    <p>• <strong>📝 텍스트 이성 자아 검사:</strong> 좌뇌의 언어적 판단을 통해 내가 현재 논리적·지적으로 추구하는 성향을 분석합니다.</p>
                                    <p className="mt-1">• <strong>🎨 무의식 예술 카드 검사:</strong> 우뇌의 시각적·감각적 감흥을 자극하여 무의식 속 본능이 향하는 심상을 포착합니다.</p>
                                </div>

                                <div className="bg-[#faf6f0] p-3 rounded-xl border border-[#ebdcd3]">
                                    <h4 className="font-extrabold text-[#cc5a37] mb-1 font-bold">2. 이중자아 융합 분석</h4>
                                    <p>• 텍스트 검사와 이미지 카드 검사를 모두 완료하면 내외면 자아 불일치 원인을 진단하는 <strong>소견 리포트</strong>가 활성화됩니다.</p>
                                </div>

                                <div className="bg-[#faf6f0] p-3 rounded-xl border border-[#ebdcd3]">
                                    <h4 className="font-extrabold text-[#cc5a37] mb-1 font-bold">3. 누적 자아 진화록 (대시보드)</h4>
                                    <p>• 최대 10회까지 검사가 누적 기록되며, 질문의 중복 답변 Bias를 방지하기 위해 문항별 5가지 가변 시나리오가 회차별로 로테이션됩니다. (선택지 A/B 순서 셔플 적용)</p>
                                </div>

                                <div className="bg-[#fbeee8] p-3 rounded-xl border border-[#f0cbbd]">
                                    <h4 className="font-extrabold text-[#cc5a37] mb-1.5 flex items-center gap-1 font-bold">
                                        <span>📲</span> 스마트폰 앱 설치(다운로드) 안내
                                    </h4>
                                    <p className="mb-2">바탕화면에 설치하여 사용하면 오프라인에서도 완전한 풀스크린 하이브리드 앱으로 구동됩니다.</p>

                                    {showInstallBtn ? (
                                        <button
                                            type="button"
                                            onClick={() => {
                                                handleInstallApp();
                                                setShowManualModal(false);
                                            }}
                                            className="w-full py-2 bg-[#cc5a37] hover:bg-[#b04828] text-white font-extrabold rounded-lg text-xs transition-colors active:scale-95 flex items-center justify-center gap-1 font-sans"
                                        >
                                            📲 이 기기에 앱 즉시 설치하기
                                        </button>
                                    ) : (
                                        <div className="text-[10px] text-[#7d6e65] space-y-1 bg-white p-2 rounded-lg border border-[#f0cbbd]/50 font-sans">
                                            <p><strong>• 아이폰 (iOS Safari):</strong> 브라우저 하단 <strong>'공유하기 ⇧'</strong> 버튼 클릭 후 <strong>'홈 화면에 추가 ➕'</strong> 터치</p>
                                            <p><strong>• 안드로이드 (Chrome):</strong> 주소창 우측 <strong>'설정(⋮)'</strong> 클릭 후 <strong>'홈 화면에 추가'</strong> 또는 <strong>'앱 설치'</strong> 터치</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button
                                type="button"
                                onClick={() => setShowManualModal(false)}
                                className="w-full py-3 bg-[#f7f2ea] hover:bg-[#ebdcd0] text-[#7d6e65] font-extrabold rounded-xl text-xs active:scale-[0.98] transition-all font-sans"
                            >
                                설명서 닫기 ❌
                            </button>
                        </div>
                    </div>
                )}

                {toastMessage && (
                    <div className="absolute bottom-6 z-50 left-1/2 transform -translate-x-1/2 px-4 py-2.5 bg-[#2d221c] border border-[#cc5a37]/35 text-[#fbeee8] text-xs font-bold rounded-full shadow-2xl backdrop-blur flex items-center gap-2">
                        <span>🤎</span> {toastMessage}
                    </div>
                )}

                {/* Inner Content Area */}
                <div className="w-full flex-1 flex flex-col items-center justify-center p-4 sm:p-5 relative z-10 min-h-0">

                    {gameState === 'login' && (
                        <div className="max-w-md w-full bg-white rounded-3xl p-7 shadow-xl border border-[#ebdcd3] relative z-10 text-center animate-fade-in font-sans">
                            <div className="flex justify-center mb-4">
                                <KdiLogo className="w-20 h-20" />
                            </div>

                            <h1 className="text-lg sm:text-xl font-black text-[#2d221c] leading-tight mb-6 font-sans">
                                KDI의 <span className="bg-gradient-to-r from-[#cc5a37] to-[#e28a67] bg-clip-text text-transparent font-sans">MBTI 분석기</span>
                            </h1>

                            <form onSubmit={handleLoginSubmit} className="space-y-4 text-left font-sans">
                                <div>
                                    <label className="block text-xs font-bold text-[#4c3e38] mb-1.5 font-sans">👤 보관함 별명 (중복 가능)</label>
                                    <input
                                        type="text"
                                        placeholder="내 별명 입력 (예: 해피멍멍이)"
                                        value={nickname}
                                        onChange={(e) => setNickname(e.target.value)}
                                        className="w-full px-4 py-3 bg-[#faf6f0] border border-[#ebdcd3] focus:border-[#cc5a37] rounded-xl text-xs text-[#2d221c] placeholder-[#a3948b] outline-none transition-all font-medium font-sans"
                                        maxLength={10}
                                    />
                                </div>

                                <div>
                                    <label className="block text-xs font-bold text-[#4c3e38] mb-1.5 font-sans">🔑 비밀번호 (숫자 6자리)</label>
                                    <input
                                        type="password"
                                        placeholder="비밀번호 숫자 6자리 입력"
                                        value={pin}
                                        onChange={(e) => setPin(e.target.value.replace(/[^0-9]/g, ''))}
                                        className="w-full px-4 py-3 bg-[#faf6f0] border border-[#ebdcd3] focus:border-[#cc5a37] rounded-xl text-xs text-[#2d221c] placeholder-[#a3948b] outline-none transition-all font-bold tracking-widest font-sans"
                                        maxLength={6}
                                    />
                                </div>

                                {loginError && (
                                    <div className="p-3 bg-red-500/5 border border-red-500/20 text-red-500 text-[11px] rounded-xl leading-relaxed text-center font-medium font-sans animate-pulse">
                                        ⚠️ {loginError}
                                    </div>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3.5 bg-gradient-to-r from-[#cc5a37] to-[#e28a67] text-white font-extrabold text-xs rounded-xl shadow-md hover:brightness-105 active:scale-[0.98] transition-all flex items-center justify-center gap-2 font-sans"
                                >
                                    {loading ? (
                                        <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <span>시작 🔓</span>
                                    )}
                                </button>
                            </form>

                            <div className="mt-5 pt-5 border-t border-[#ebdcd3] text-center animate-fade-in font-sans">
                                <button
                                    type="button"
                                    onClick={() => setShowManualModal(true)}
                                    className="w-full py-3 bg-[#fbeee8] hover:bg-[#f6ded4] text-[11px] font-extrabold text-[#cc5a37] border border-[#f0cbbd] rounded-xl transition-all active:scale-[0.98] flex items-center justify-center gap-1.5 font-sans"
                                >
                                    📖 사용설명서 & 설치 안내 📲
                                </button>
                            </div>
                        </div>
                    )}

                    {gameState === 'intro' && savedProfile && (
                        <div className="max-w-md w-full bg-white rounded-3xl p-6 shadow-xl border border-[#ebdcd3] relative z-10 text-center animate-fade-in font-sans">
                            <div className="flex justify-between items-center pb-4 mb-5 border-b border-[#ebdcd3]">
                                <div className="flex items-center gap-2 text-left">
                                    <KdiLogo className="w-10 h-10" />
                                    <div>
                                        <span className="text-[9px] text-[#7d6e65] block uppercase font-bold font-sans">KDI Member</span>
                                        <span className="text-sm font-black text-[#2d221c] font-sans">{savedProfile.nickname} <span className="text-[#7d6e65] font-normal">님의 보관함</span></span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => {
                                        setNickname('');
                                        setPin('');
                                        setSavedProfile(null);
                                        localStorage.removeItem('kdi_mbti_last_logged_in_id');
                                        setGameState('login');
                                        triggerToast("보관함을 닫고 안전하게 탈출했습니다.");
                                    }}
                                    className="px-2.5 py-1 bg-[#f7f2ea] hover:bg-[#ebdcd0] text-[10px] font-bold text-[#7d6e65] rounded-lg border border-[#ebdcd3] transition-colors font-sans"
                                >
                                    로그아웃 🚪
                                </button>
                            </div>

                            <div className="flex justify-center mb-4">
                                <KdiLogo className="w-16 h-16" />
                            </div>
                            <h2 className="text-lg sm:text-xl font-black text-[#2d221c] leading-tight mb-6 font-sans">두개의 거울을 깨워봐요</h2>

                            <div className="space-y-3 mb-6 font-sans">
                                <button
                                    onClick={() => startTest('text')}
                                    className="w-full p-4 bg-[#fbeee8]/60 hover:bg-[#fbeee8] rounded-2xl border border-[#ebdcd3] hover:border-[#f0cbbd] text-left transition-all group font-sans"
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-extrabold text-[#2d221c] group-hover:text-[#cc5a37] flex items-center gap-1.5 font-bold font-sans">
                                            📝 텍스트 이성 자아 검사
                                        </span>
                                        <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold font-sans ${textResult ? 'bg-[#cc5a37]/20 text-[#cc5a37]' : 'bg-[#f7f2ea] text-[#7d6e65]'}`}>
                                            {textResult ? `완료: ${textResult}` : '미완료 ⏳'}
                                        </span>
                                    </div>
                                    <p className="text-[10px] text-[#7d6e65] leading-relaxed font-sans">
                                        좌뇌의 문장 구조 파악 능력을 자극하여 평소 내가 추구하는 가치관을 이성적인 문자로 매칭시킵니다.
                                    </p>
                                </button>

                                <button
                                    onClick={() => startTest('image')}
                                    className="w-full p-4 bg-[#f7f2ea]/60 hover:bg-[#ebdcd0] rounded-2xl border border-[#ebdcd3] hover:border-[#cc5a37]/45 text-left transition-all group font-sans"
                                >
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm font-extrabold text-[#2d221c] group-hover:text-[#cc5a37] flex items-center gap-1.5 font-bold font-sans">
                                            🎨 무의식 예술 카드 검사 (글씨 읽기 X)
                                        </span>
                                        <span className={`text-[9px] px-2 py-0.5 rounded-full font-bold font-sans ${imageResult ? 'bg-[#cc5a37]/20 text-[#cc5a37]' : 'bg-[#f7f2ea] text-[#7d6e65]'}`}>
                                            {imageResult ? `완료: ${imageResult}` : '미완료 ⏳'}
                                        </span>
                                    </div>
                                    <p className="text-[10px] text-[#7d6e65] leading-relaxed font-sans">
                                        글씨를 읽을 필요가 전혀 없습니다! 순간적인 마음의 감흥에 따라 더 눈이 가고 끌리는 예술 카드 그림만 터치하며 진행합니다.
                                    </p>
                                </button>
                            </div>

                            {textResult && imageResult ? (
                                <button
                                    onClick={() => setGameState('compare')}
                                    className="w-full py-3.5 bg-gradient-to-r from-[#cc5a37] to-[#e28a67] text-white font-extrabold text-xs rounded-xl shadow-md hover:brightness-105 active:scale-[0.98] transition-all font-sans"
                                >
                                    KDI 성격 불일치 상세 보고서 확인하기 ⚡
                                </button>
                            ) : (
                                <div className="p-3.5 bg-[#faf6f0] rounded-xl border border-[#ebdcd3] text-[10px] text-[#7d6e65] leading-relaxed text-center font-sans">
                                    💡 두 모드를 각각 1번씩만 끝마치시면, 두 자아가 정밀하게 다를 때의 내적 원인을 규명해 주는 특별 심리 자문서 궤도가 해제됩니다!
                                </div>
                            )}

                            {savedProfile?.attempts && savedProfile.attempts.length > 0 && (
                                <button
                                    onClick={() => setGameState('dashboard')}
                                    className="w-full mt-3 py-3.5 bg-[#fbeee8] hover:bg-[#f6ded4] text-[#cc5a37] font-extrabold text-xs rounded-xl border border-[#f0cbbd] active:scale-[0.98] transition-all flex items-center justify-center gap-1.5 font-sans"
                                >
                                    📊 누적 자아 진화 대시보드 ({savedProfile.attempts.length}회차 기록) 📈
                                </button>
                            )}
                        </div>
                    )}

                    {gameState === 'play' && (
                        <div className="max-w-md w-full flex flex-col gap-3 relative z-10 animate-fade-in font-sans">
                            <div className="bg-white rounded-2xl p-4 border border-[#ebdcd3] shadow-md flex justify-between items-center font-sans">
                                <div className="flex items-center gap-2">
                                    <KdiLogo className="w-8 h-8" />
                                    <div>
                                        <p className="text-[9px] text-[#cc5a37] font-black uppercase tracking-widest font-sans">
                                            {selectedMode === 'text' ? "KDI TEXT MODE" : "KDI VISUAL MODE"}
                                        </p>
                                        <h3 className="text-xs font-extrabold text-[#2d221c] font-sans">
                                            탐험 단계: <span className="text-[#cc5a37] font-black font-sans">{currentIdx + 1}</span> / 48
                                        </h3>
                                    </div>
                                </div>

                                <div className="w-20 bg-[#ebdcd3] rounded-full h-1.5 overflow-hidden border border-[#ebdcd3]">
                                    <div className="bg-[#cc5a37] h-full rounded-full transition-all duration-300" style={{ width: `${progressPercent}%` }}></div>
                                </div>
                            </div>

                            <div className="bg-white rounded-3xl p-5 shadow-xl border border-[#ebdcd3] text-center relative overflow-hidden font-sans">
                                {selectedMode === 'text' ? (
                                    <div className="my-2.5 text-center font-sans">
                                        <span className="text-2xl block mb-1">{currentQuestion.emoji}</span>
                                        <h2 className="text-base font-bold text-[#2d221c] leading-snug">{questionText.t}</h2>
                                        <p className="text-[#4c3e38] text-xs leading-relaxed mt-2 px-1">
                                            "{questionText.d}"
                                        </p>
                                    </div>
                                ) : (
                                    <div className="my-2 text-center font-sans">
                                        <span className="text-2xl block mb-1">🎨</span>
                                        <h2 className="text-base font-black text-[#2d221c] leading-snug font-bold">두 장의 카드 중 직관적으로 더 끌리는 그림을 선택하세요</h2>
                                        <p className="text-[#7d6e65] text-[10px] mt-1.5">
                                            복잡하게 생각할 필요 없이 마음속 본능이 반응하는 그림 한 장을 누르시면 됩니다!
                                        </p>
                                    </div>
                                )}

                                {selectedMode === 'text' ? (
                                    <div className="space-y-2 mt-5 font-sans">
                                        <button
                                            onClick={() => handleSelect(option1.score)}
                                            className="w-full p-4 text-left bg-[#fbeee8] hover:bg-[#f6ded4] border border-[#f0cbbd] rounded-xl transition-all active:scale-[0.99] flex items-start gap-3 group font-sans"
                                        >
                                            <div className="w-5 h-5 rounded bg-[#cc5a37]/10 text-[#cc5a37] text-[10px] flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-[#cc5a37] group-hover:text-white font-sans">A</div>
                                            <p className="text-[#4c3e38] group-hover:text-[#2d221c] text-[11px] leading-relaxed">
                                                {option1.text}
                                            </p>
                                        </button>

                                        <button
                                            onClick={() => handleSelect(option2.score)}
                                            className="w-full p-4 text-left bg-[#f7f2ea] hover:bg-[#ebdcd0] border border-[#decbb7] rounded-xl transition-all active:scale-[0.99] flex items-start gap-3 group font-sans"
                                        >
                                            <div className="w-5 h-5 rounded bg-[#936b4e]/10 text-[#936b4e] text-[10px] flex items-center justify-center font-bold flex-shrink-0 group-hover:bg-[#936b4e] group-hover:text-white font-sans">B</div>
                                            <p className="text-[#4c3e38] group-hover:text-[#2d221c] text-[11px] leading-relaxed">
                                                {option2.text}
                                            </p>
                                        </button>
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 gap-4 mt-6">
                                        <div onClick={() => handleSelect(option1.score)}>
                                            <VisualCard type={currentQuestion.type} option={option1.visualOption} id={currentQuestion.id} variantIndex={currentVariantIndex} />
                                        </div>
                                        <div onClick={() => handleSelect(option2.score)}>
                                            <VisualCard type={currentQuestion.type} option={option2.visualOption} id={currentQuestion.id} variantIndex={currentVariantIndex} />
                                        </div>
                                    </div>
                                )}

                                {currentIdx > 0 && (
                                    <button onClick={handlePrev} className="text-[10px] text-[#7d6e65] hover:text-[#2d221c] mt-5 underline underline-offset-2 block mx-auto transition-colors font-sans">
                                        이전 문항 카드로 돌아가기
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {gameState === 'result' && (
                        <div className="max-w-md w-full bg-white rounded-3xl p-6 shadow-xl border border-[#ebdcd3] text-center relative z-10 animate-fade-in font-sans">
                            <div className="flex justify-center mb-2">
                                <KdiLogo className="w-14 h-14" />
                            </div>

                            <span className="inline-block px-3 py-1 bg-[#cc5a37]/10 text-[#cc5a37] text-[10px] font-bold rounded-full mb-3">
                                Exploration Completed 🏆
                            </span>
                            <p className="text-[#7d6e65] text-xs leading-normal font-sans">
                                훌륭합니다! <strong>[{selectedMode === 'text' ? "📝 텍스트 모드" : "🎨 이미지 카드 모드"}]</strong>의 48계단을 모두 완수한 뒤 데이터베이스에 안전하게 봉인해 두었습니다.
                            </p>

                            <div className={`my-5 p-6 rounded-2xl bg-gradient-to-br ${mbtiDetails[activeResult]?.color || 'from-[#cc5a37] to-[#e28a67]'} text-white shadow-md`}>
                                <h2 className="text-4xl font-black tracking-widest font-sans">{activeResult}</h2>
                                <p className="text-xs opacity-90 font-medium mt-1">{mbtiDetails[activeResult]?.title}</p>
                            </div>

                            <div className="bg-[#faf6f0] p-4 rounded-2xl border border-[#ebdcd3] text-left text-xs mb-5 space-y-2.5 font-sans">
                                <h4 className="text-[#2d221c] font-extrabold flex items-center gap-1.5">
                                    <span>📡</span> 자아 매칭 현황판
                                </h4>
                                <div className="grid grid-cols-2 gap-3 pt-1">
                                    <div className="bg-white p-3 rounded-xl border border-[#ebdcd3]">
                                        <span className="text-[9px] text-[#7d6e65] block font-bold font-sans">📝 텍스트 결과</span>
                                        <strong className="text-xs text-[#cc5a37]">{textResult ? textResult : "미완료 ⏳"}</strong>
                                    </div>
                                    <div className="bg-white p-3 rounded-xl border border-[#ebdcd3]">
                                        <span className="text-[9px] text-[#7d6e65] block font-bold font-sans">🎨 이미지 결과</span>
                                        <strong className="text-xs text-[#936b4e]">{imageResult ? imageResult : "미완료 ⏳"}</strong>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2.5 font-sans">
                                <button
                                    onClick={() => setGameState('intro')}
                                    className="w-full py-3 bg-[#f7f2ea] hover:bg-[#ebdcd0] text-[#7d6e65] font-bold rounded-xl text-xs active:scale-[0.98] transition-all"
                                >
                                    로비로 돌아가 남은 모드 끝내기 🏠
                                </button>
                                {textResult && imageResult && (
                                    <button
                                        onClick={() => setGameState('compare')}
                                        className="w-full py-3 bg-gradient-to-r from-[#cc5a37] to-[#e28a67] text-white font-black rounded-xl text-xs active:scale-[0.98] transition-all"
                                    >
                                        대망의 이중자아 융합 비교서 확인하기 ⚡
                                    </button>
                                )}
                            </div>
                        </div>
                    )}

                    {gameState === 'compare' && analysis && (
                        <div className="max-w-md w-full bg-white rounded-3xl p-6 shadow-xl border border-[#ebdcd3] relative z-10 animate-fade-in font-sans">

                            <div className="flex justify-center mb-3">
                                <KdiLogo className="w-14 h-14" />
                            </div>

                            <div className="text-center mb-5 font-sans">
                                <span className="px-3 py-1 bg-[#cc5a37]/10 text-[#cc5a37] text-[10px] font-bold rounded-full uppercase tracking-wider">
                                    Ego Synergy Report 🧬
                                </span>
                                <h2 className="text-lg font-black text-[#2d221c] mt-2 font-bold">{analysis.title}</h2>
                                <p className="text-[#7d6e65] text-[11px] leading-relaxed mt-2 px-1">
                                    {analysis.desc}
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3 mb-4">
                                <div className="bg-gradient-to-br from-[#ebdcd3]/30 to-[#faf6f0] p-4 rounded-2xl border border-[#ebdcd3] text-center">
                                    <span className="text-[9px] text-[#cc5a37] font-bold block mb-1">📝 텍스트 분석 결과</span>
                                    <h3 className="text-3xl font-black text-[#2d221c]">{textResult}</h3>
                                    <span className="text-[9px] text-[#7d6e65] block mt-1">{mbtiDetails[textResult]?.title || ''}</span>
                                </div>

                                <div className="bg-gradient-to-br from-[#decbb7]/30 to-[#faf6f0] p-4 rounded-2xl border border-[#ebdcd3] text-center">
                                    <span className="text-[9px] text-[#936b4e] font-bold block mb-1">🎨 이미지 무의식 결과</span>
                                    <h3 className="text-3xl font-black text-[#2d221c]">{imageResult}</h3>
                                    <span className="text-[9px] text-[#7d6e65] block mt-1">{mbtiDetails[imageResult]?.title || ''}</span>
                                </div>
                            </div>

                            <div className="bg-[#faf6f0] rounded-2xl p-4 border border-[#ebdcd3] mb-4 space-y-3">
                                <h4 className="text-xs font-bold text-[#2d221c]">📊 백분율 성향 분포 상세</h4>

                                <div>
                                    <div className="flex justify-between text-[10px] text-[#7d6e65] mb-1">
                                        <span>외향(E) {analysis.textMetrics?.EI?.E}%</span>
                                        <span>내향(I) {analysis.textMetrics?.EI?.I}%</span>
                                    </div>
                                    <div className="w-full bg-[#ebdcd3] h-2 rounded-full overflow-hidden flex">
                                        <div className="bg-[#cc5a37] h-full" style={{ width: `${analysis.textMetrics?.EI?.E}%` }}></div>
                                        <div className="bg-[#936b4e] h-full" style={{ width: `${analysis.textMetrics?.EI?.I}%` }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-[10px] text-[#7d6e65] mb-1">
                                        <span>감각(S) {analysis.textMetrics?.SN?.S}%</span>
                                        <span>직관(N) {analysis.textMetrics?.SN?.N}%</span>
                                    </div>
                                    <div className="w-full bg-[#ebdcd3] h-2 rounded-full overflow-hidden flex">
                                        <div className="bg-[#cc5a37] h-full" style={{ width: `${analysis.textMetrics?.SN?.S}%` }}></div>
                                        <div className="bg-[#936b4e] h-full" style={{ width: `${analysis.textMetrics?.SN?.N}%` }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-[10px] text-[#7d6e65] mb-1">
                                        <span>사고(T) {analysis.textMetrics?.TF?.T}%</span>
                                        <span>감정(F) {analysis.textMetrics?.TF?.F}%</span>
                                    </div>
                                    <div className="w-full bg-[#ebdcd3] h-2 rounded-full overflow-hidden flex">
                                        <div className="bg-[#cc5a37] h-full" style={{ width: `${analysis.textMetrics?.TF?.T}%` }}></div>
                                        <div className="bg-[#936b4e] h-full" style={{ width: `${analysis.textMetrics?.TF?.F}%` }}></div>
                                    </div>
                                </div>

                                <div>
                                    <div className="flex justify-between text-[10px] text-[#7d6e65] mb-1">
                                        <span>판단(J) {analysis.textMetrics?.JP?.J}%</span>
                                        <span>인식(P) {analysis.textMetrics?.JP?.P}%</span>
                                    </div>
                                    <div className="w-full bg-[#ebdcd3] h-2 rounded-full overflow-hidden flex">
                                        <div className="bg-[#cc5a37] h-full" style={{ width: `${analysis.textMetrics?.JP?.J}%` }}></div>
                                        <div className="bg-[#936b4e] h-full" style={{ width: `${analysis.textMetrics?.JP?.P}%` }}></div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-[#faf6f0] rounded-2xl p-4 border border-[#ebdcd3] mb-5 max-h-[160px] overflow-y-auto">
                                <h4 className="text-xs font-bold text-[#2d221c] mb-2.5 flex items-center gap-1.5">
                                    <span>🧬</span> KDI 자아간 정합성 소견 리포트
                                </h4>

                                {analysis.status === 'perfect_match' ? (
                                    <p className="text-[11px] text-[#7d6e65] leading-relaxed font-light">
                                        축하합니다! 글을 정교하게 해석하는 뇌와 이미지를 아름답게 직감하는 뇌가 자석처럼 일치합니다. 이는 겉과 속이 매우 조화로우며 내재된 자아 갈등 요인이 매우 적은 축복받은 상태를 말해줍니다.
                                    </p>
                                ) : (
                                    <div className="space-y-3">
                                        {analysis.details.map((diff, index) => (
                                            <div key={index} className="bg-white p-3 rounded-xl border border-[#ebdcd3]">
                                                <span className="text-[10px] text-[#cc5a37] font-extrabold block mb-1">📍 차이 요인: {diff.trait}</span>
                                                <p className="text-[11px] text-[#4c3e38] leading-relaxed font-light">
                                                    {diff.reason}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <button
                                    onClick={handleCopyResult}
                                    className="w-full py-3.5 bg-gradient-to-r from-[#cc5a37] to-[#e28a67] text-white font-extrabold rounded-xl text-xs active:scale-[0.98] transition-all shadow-sm"
                                >
                                    내 이중자아 결과 복사 및 공유하기 💌
                                </button>

                                <div className="flex gap-2">
                                    <button
                                        onClick={() => setGameState('intro')}
                                        className="flex-1 py-3 bg-[#f7f2ea] hover:bg-[#ebdcd0] text-[#7d6e65] font-bold rounded-xl text-xs active:scale-[0.98] transition-all border border-[#ebdcd3]"
                                    >
                                        로비로 나가기 🏠
                                    </button>
                                    <button
                                        onClick={() => {
                                            if (savedProfile) {
                                                try {
                                                    const docId = `${localDbPrefix}${savedProfile.nickname}_${savedProfile.pin}`;
                                                    const clearedProfile = {
                                                        ...savedProfile,
                                                        textResult: null,
                                                        imageResult: null,
                                                        textAnswers: [],
                                                        imageAnswers: []
                                                    };
                                                    localStorage.setItem(docId, JSON.stringify(clearedProfile));
                                                    setTextResult(null);
                                                    setImageResult(null);
                                                    setSavedProfile(clearedProfile);
                                                    triggerToast("KDI 로컬 저장소 기록이 말끔히 지워졌습니다.");
                                                } catch (err) {
                                                    console.error(err);
                                                }
                                            }
                                            setGameState('intro');
                                        }}
                                        className="flex-1 py-3 bg-[#936b4e]/10 text-[#936b4e] hover:bg-[#936b4e]/20 border border-[#decbb7]/35 font-bold rounded-xl text-xs active:scale-[0.98] transition-all"
                                    >
                                        기록 초기화 🔄
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {gameState === 'dashboard' && savedProfile?.attempts && (
                        <div className="max-w-md w-full bg-white rounded-3xl p-6 shadow-xl border border-[#ebdcd3] relative z-10 animate-fade-in font-sans">
                            <div className="flex justify-center mb-3">
                                <KdiLogo className="w-14 h-14" />
                            </div>

                            <div className="text-center mb-5 font-sans">
                                <span className="px-3 py-1 bg-[#cc5a37]/10 text-[#cc5a37] text-[10px] font-bold rounded-full uppercase tracking-wider">
                                    Personal Evolution Archive 🧬
                                </span>
                                <h2 className="text-lg font-black text-[#2d221c] mt-2 font-bold">{savedProfile.nickname}님의 성향 진화록</h2>
                                <p className="text-[#7d6e65] text-[10px] leading-relaxed mt-1.5">
                                    검사를 반복할수록 내적인 상태의 변화 경로가 기록됩니다. (최대 10회차 자동 갱신 보관)
                                </p>
                            </div>

                            {/* Trend Chart component */}
                            <div className="mb-4">
                                <TrendChart attempts={savedProfile.attempts} />
                            </div>

                            {/* Attempts List */}
                            <div className="bg-[#faf6f0] rounded-2xl p-4 border border-[#ebdcd3] mb-5 max-h-[220px] overflow-y-auto font-sans">
                                <h4 className="text-xs font-bold text-[#2d221c] mb-2.5 flex justify-between items-center">
                                    <span>📡 누적 히스토리 디렉토리</span>
                                    <span className="text-[9px] text-[#7d6e65] font-normal">정렬: 최신 우선</span>
                                </h4>

                                <div className="space-y-2">
                                    {[...savedProfile.attempts].reverse().map((att) => {
                                        const date = new Date(att.timestamp);
                                        const dateStr = `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, '0')}.${String(date.getDate()).padStart(2, '0')} ${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;
                                        return (
                                            <div key={att.id} className="bg-white p-3 rounded-xl border border-[#ebdcd3] flex justify-between items-center select-none">
                                                <div className="text-left">
                                                    <div className="flex items-center gap-1.5 mb-1">
                                                        <span className={`text-[9px] px-1.5 py-0.5 rounded font-extrabold ${att.mode === 'text' ? 'bg-[#cc5a37]/10 text-[#cc5a37]' : 'bg-[#936b4e]/10 text-[#936b4e]'}`}>
                                                            {att.mode === 'text' ? '📝 TEXT' : '🎨 VISUAL'}
                                                        </span>
                                                        <span className="text-[10px] text-[#7d6e65] font-medium">{dateStr}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-xs font-black text-[#2d221c] tracking-wider">{att.result}</span>
                                                        <span className="text-[9px] text-[#a3948b] truncate max-w-[140px]">{mbtiDetails[att.result]?.title}</span>
                                                    </div>
                                                </div>

                                                <button
                                                    onClick={() => {
                                                        setCustomModal({
                                                            show: true,
                                                            title: "🗑️ 테스트 기록 삭제",
                                                            desc: `해당 ${att.mode === 'text' ? '텍스트' : '이미지'} [${att.result}] 검사 기록을 아카이브에서 안전하게 영구 삭제하시겠습니까?`,
                                                            onConfirm: () => {
                                                                const docId = `${localDbPrefix}${savedProfile.nickname}_${savedProfile.pin}`;
                                                                const updatedAttempts = savedProfile.attempts.filter(item => item.id !== att.id);

                                                                const latestText = updatedAttempts.filter(item => item.mode === 'text').pop();
                                                                const latestImage = updatedAttempts.filter(item => item.mode === 'image').pop();

                                                                const updatedProfile = {
                                                                    ...savedProfile,
                                                                    attempts: updatedAttempts,
                                                                    textResult: latestText ? latestText.result : null,
                                                                    textAnswers: latestText ? latestText.answers : [],
                                                                    imageResult: latestImage ? latestImage.result : null,
                                                                    imageAnswers: latestImage ? latestImage.answers : [],
                                                                };

                                                                localStorage.setItem(docId, JSON.stringify(updatedProfile));
                                                                setSavedProfile(updatedProfile);
                                                                setTextResult(updatedProfile.textResult);
                                                                setImageResult(updatedProfile.imageResult);

                                                                setCustomModal(prev => ({ ...prev, show: false }));
                                                                triggerToast("아카이브 기록이 성공적으로 삭제되었습니다.");

                                                                if (updatedAttempts.length === 0) {
                                                                    setGameState('intro');
                                                                }
                                                            },
                                                            onCancel: () => {
                                                                setCustomModal(prev => ({ ...prev, show: false }));
                                                            }
                                                        });
                                                    }}
                                                    className="p-1.5 bg-red-500/5 hover:bg-red-500/10 text-red-500 text-[10px] rounded-lg transition-colors border border-red-500/10 active:scale-95"
                                                >
                                                    삭제 🗑️
                                                </button>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <button
                                onClick={() => setGameState('intro')}
                                className="w-full py-3.5 bg-[#f7f2ea] hover:bg-[#ebdcd0] text-[#7d6e65] border border-[#ebdcd3] font-extrabold text-xs rounded-xl active:scale-[0.98] transition-all font-sans"
                            >
                                로비 홈으로 돌아가기 🏠
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
