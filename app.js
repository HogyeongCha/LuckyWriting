const questions = [
    {
        q: "한양대학교 공과대학 소속 학과는 총 몇 개일까요? (건축계열 포함)",
        a: ["19개", "20개", "21개", "22개"],
        correct: 2,
        hint: "공학계열 19개, 건축계열 2개의 학과가 소속되어 있습니다."
    },
    {
        q: "한양대학교 서울캠퍼스가 소재한 자치구는 어디인가요?",
        a: ["성동구", "마포구", "강남구", "용산구"],
        correct: 0,
        hint: "한양대학교 서울캠퍼스의 주소는 서울특별시 성동구 왕십리로 222입니다."
    },
    {
        q: "한양대학교 공과대학 '새내기 새로배움터'가 진행되는 기간은 언제인가요?",
        a: ["2.25~2.27", "2.26~2.28", "2.27~3.1", "2.28~3.2"],
        correct: 3,
        hint: "@hyu_tech 인스타그램의 새내기 새로배움터 안내 게시물을 확인해보세요!"
    },
    {
        q: "2026년 기준, 한양대학교 공과대학 학생회는 몇 대 학생회인가요?",
        a: ["47대", "48대", "49대", "50대"],
        correct: 2,
        hint: "2025년에는 제48대 공과대학 학생회 비상대책위원회로 활동했습니다!"
    },
    {
        q: "한양대학교를 상징하는 동물은 무엇인가요?",
        a: ["사자", "호랑이", "독수리", "용"],
        correct: 0,
        hint: "한양대학교 공식 마스코트 하이리온의 영어 이름은 'HYLION'입니다."
    },
    {
        q: "한양대학교가 처음 세워진 설립 연도는 언제인가요?",
        a: ["1938년", "1939년", "1940년", "1941년"],
        correct: 1,
        hint: "한양대학교는 1939년, 동아공과학원으로 시작했습니다."
    },
    {
        q: "한양대학교의 건학 이념은 무엇인가요?",
        a: ["진리와 자유", "실사구시", "홍익인간", "사랑의 실천"],
        correct: 3,
        hint: "한양대학교에 입학한 모든 학생이 들어야 하는 교양필수 과목의 이름은 '사랑의 실천'입니다."
    },
    {
        q: "학교 캠퍼스와 바로 연결되는 한양대역 출구는 몇 번인가요?",
        a: ["1번 출구", "2번 출구", "3번 출구", "4번 출구"],
        correct: 1,
        hint: "한양대역 2번 출구는 '애지문'으로 불립니다."
    },
    {
        q: "5월에 열리는 한양대학교 공과대학 축제의 이름은 무엇인가요?",
        a: ["라치오스", "고공제", "공학인의 밤", "애국한양응원제"],
        correct: 2,
        hint: "공학인의 밤은 매년 5월에 열리는 한양대학교 공과대학의 대표 축제입니다."
    },
    {
        q: "한양대학교와 연결된 한양대역은 지하철 몇 호선인가요?",
        a: ["1호선", "2호선", "경의중앙선", "수인분당선"],
        correct: 1,
        hint: "한양대역과 연결된 지하철역은 뚝섬역, 성수역, 왕십리역, 건대역 등이 있습니다."
    },
    {
        q: "2026학년도 공과대학 새내기 새로배움터의 부제는 무엇인가요?",
        a: ["모두의 외침이 하나되어", "경계를 넘어 울리는 힘", "다시금 하나의 울림으로", "함성을 하나의 파동으로"],
        correct: 0,
        hint: "'공명'은 모두의 외침이 하나되어 강력해지는 공과대학의 에너지를 의미합니다."
    },
    {
        q: "현재 한양대학교 공과대학 학장님은 어떤 학과 소속의 교수님이신가요?",
        a: ["기계공학부", "융합전자공학부", "건축학부", "신소재공학부"],
        correct: 2,
        hint: "공과대학장 황희준 교수님의 연구분야는 '건축이론 및 설계'입니다."
    },
    {
        q: "[사자가 군것질할 때] 는 제1공학관 몇 층으로 나가야 하나요?",
        a: ["1층", "2층", "3층", "4층"],
        correct: 2,
        hint: "제1공학관 3층 중앙에 위치한 통로는 카페 띠아모와 세븐일레븐으로 연결됩니다."
    },
    {
        q: "한양대학교 공과대학의 마스코트 이름은 무엇인가요?",
        a: ["하이리온", "베이비리온", "어덜트리온", "테크리온"],
        correct: 1,
        hint: "한양대학교 공과대학 공식 마스코트는 실험복을 입은 귀여운 사자 캐릭터입니다."
    },
    {
        q: "다음 중 공과대학 학생회 사업이 아닌 것은 무엇인가요?",
        a: ["냠냠실", "공학인의 밤", "애국한양응원제", "대여사업"],
        correct: 2,
        hint: "애국한양응원제는 한양대학교 총학생회 주최의 가을 응원제입니다."
    },
    {
        q: "공과대학 학생회실은 어디에 위치하나요?",
        a: ["제1공학관 1층", "정몽구미래자동차연구센터 1층", "공업센터 1층", "제2공학관 1층"],
        correct: 0,
        hint: "공과대학 학생회실은 제1공학관 110호에 위치하고 있습니다."
    },
    {
        q: "다음중 공과대학의 FM은 무엇인가요?",
        a: ["최강공대", "창조공대", "미래공대", "선봉공대"],
        correct: 3,
        hint: "공과대학 FM은 '애국한양 선봉공대'입니다."
    },
    {
        q: "다음중 공과대학 학생회 대여사업에서 빌려주지 않는 물품은 무엇인가요?",
        a: ["우산", "충전기", "계산기", "노트북 받침대"],
        correct: 3,
        hint: "공과대학에서는 학기 중에 우산, 충전기, 계산기를 대여해주는 사업을 운영하고 있습니다."
    },
    {
        q: "2026학년도 공과대학 새내기 새로배움터가 진행되는 지역은 어디인가요?",
        a: ["속초", "강릉", "양양", "원주"],
        correct: 0,
        hint: "공과대학 새내기 새로배움터 장소는 속초 한화리조트 설악 별관입니다."
    },
    {
        q: "다음 중 제1공학관에 위치한 라운지 이름은 무엇인가요?",
        a: ["남재국 라운지", "이순규 라운지", "이종훈 라운지", "노영백 라운지"],
        correct: 3,
        hint: "제1공학관에 1층에는 노영백 라운지가 위치해 있습니다."
    }
];

const fortunes = [
    "이번 학기 성적표는 마치 새 학기처럼 빛나는 A+로 가득할 거예요!",
    "따스한 봄날의 캠퍼스에서 설레는 인연이 시작될 테니 주변을 잘 살펴보세요.",
    "지하철을 탈 때마다 늘 빈자리가 당신을 기다리고 있을 거예요!",
    "학생회에서 만난 동기와 행복한 학기를 보내게 될 거예요!",
    "입학 후 처음 들어간 동아리에서 설레는 인연이 시작될 거예요!",
    "제1공학관 엘리베이터는 항상 당신을 기다리고 있을 거예요!",
    "공대판에서 가장 큰 목소리를 낸다면, 학과에 대한 소속감은 그 누구보다 커질 거예요!",
    "개강 첫날부터 매달, 당신의 주량은 한 병씩 늘어날 거예요!",
    "공과대학 새내기 새로배움터에서 평생 함께할 친구를 만나게 될 거예요!",
    "새내기 새로배움터 뒤풀이에서 최고가 되어 끝까지 살아남게 될 거예요!",
    "이번 학기 팀플에서는 책임감 있는 최고의 팀원만 만나게 됩니다.",
    "솔선수범하는 모습으로 선배들의 사랑을 독차지하게 될 거예요.",
    "88계단을 10초 만에 뛰어 올라가도 지치지 않는 강철 체력을 가지게 될 거예요!",
    "이번 학기 당신의 시간표는 기적처럼 공강과 연강 사이 황금 밸런스를 이룹니다!",
    "첫 수강신청 클릭이 곧 성공을 의미합니다. 서버가 당신 편이예요!",
    "도서관에서 우연히 마주친 그 사람이 당신의 다음 이야기가 됩니다.",
    "이번 학기 당신의 과제는 마감 10분 전에 완벽하게 끝납니다. 심지어 여유롭게!",
    "학식 줄이 유난히 짧은 날, 당신은 항상 그 타이밍에 서 있습니다.",
    "이번 학기 당신의 통장은 이상하게도 자주 살아납니다.",
    "과제 마감 날, 당신의 와이파이는 유독 빠릅니다.",
    "이번 학기 당신의 실험은 한 번에 성공합니다. 오차율이 당신을 피해 갑니다.",
    "시험 전날 벼락치기가 유난히 잘 먹히는 날이 옵니다."
];

let state = {
    screen: 'landing',
    questions: [],
    currentIdx: 0,
    selectedFortune: '',
    answerLocked: false
};

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    state.screen = screenId;
}

function startQuiz() {
    state.questions = shuffle([...questions]).slice(0, 3);
    state.currentIdx = 0;
    renderQuestion();
    showScreen('quiz');
}

function renderQuestion() {
    const qData = state.questions[state.currentIdx];
    const container = document.getElementById('quiz-container');
    state.answerLocked = false;
    container.innerHTML = `
        <h2 style="margin-bottom: 2rem;">Q${state.currentIdx + 1}. ${qData.q}</h2>
        <div class="options-container">
            ${qData.a.map((ans, i) => `
                <button class="btn option-btn" onclick="handleAnswer(${i})">${ans}</button>
            `).join('')}
        </div>
        <div id="hint-message" class="hint-box" aria-live="polite"></div>
        <div style="margin-top: 2rem; text-align: right; opacity: 0.5; font-size: 0.8rem;">
            계속해서 공명을 이어가세요 (${state.currentIdx + 1} / 3)
        </div>
    `;
}

function handleAnswer(idx) {
    if (state.answerLocked) {
        return;
    }

    const qData = state.questions[state.currentIdx];
    const btns = document.querySelectorAll('.option-btn');
    const hintBox = document.getElementById('hint-message');

    if (idx === qData.correct) {
        state.answerLocked = true;
        btns[idx].classList.add('correct');
        setTimeout(() => {
            state.currentIdx++;
            if (state.currentIdx < 3) {
                renderQuestion();
            } else {
                // Resonance Transition Effect
                resonanceBurst();
                document.getElementById('quiz').style.opacity = '0';
                document.getElementById('quiz').style.transition = 'opacity 1s ease';

                setTimeout(() => {
                    showScreen('gacha');
                    const gacha = document.getElementById('gacha');
                    gacha.style.opacity = '0';
                    setTimeout(() => {
                        gacha.style.opacity = '1';
                        gacha.style.transition = 'opacity 1s ease';
                    }, 50);
                }, 1000);
            }
        }, 500);
    } else {
        state.answerLocked = true;
        btns[idx].classList.add('wrong');

        if (hintBox) {
            hintBox.classList.add('show');
            const customHint = typeof qData.hint === 'string' ? qData.hint.trim() : '';
            hintBox.innerHTML = customHint
                ? `<strong>힌트:</strong> ${customHint}`
                : `<strong>힌트:</strong> question 리스트에 hint 문구를 입력해 주세요.`;
        }

        setTimeout(() => {
            state.answerLocked = false;
        }, 350);
    }
}

function openBox() {
    const trigger = document.querySelector('.resonance-trigger');
    trigger.classList.add('shaking');

    setTimeout(() => {
        trigger.classList.remove('shaking');
        state.selectedFortune = fortunes[Math.floor(Math.random() * fortunes.length)];

        document.getElementById('fortune-display').innerText = state.selectedFortune;
        showScreen('result');

        // Resonance Burst Effect (Replacing Confetti)
        resonanceBurst();
    }, 1500);
}

function resonanceBurst() {
    const colors = ['#2e3b5e', '#8b3a3a', '#c5a059'];
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const ripple = document.createElement('div');
            ripple.className = 'burst-ripple';
            ripple.style.borderColor = colors[i % colors.length];
            document.body.appendChild(ripple);
            setTimeout(() => ripple.remove(), 2000);
        }, i * 300);
    }
}

async function saveImage() {
    const area = document.getElementById('capture-area');
    const btn = event.target;
    const originalText = btn.innerText;

    const shareMsg = document.getElementById('share-msg');

    btn.innerText = "저장 중...";
    btn.disabled = true;
    shareMsg.style.display = 'none';

    try {
        const canvas = await html2canvas(area, {
            backgroundColor: "#f4f1ea",
            scale: 2, // High quality
            useCORS: true
        });

        const link = document.createElement('a');
        link.download = `HYU_Resonance_Fortune_${Date.now()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
    } catch (err) {
        console.error("Save failed:", err);
        alert("이미지 저장에 실패했습니다. 직접 캡처를 이용해주세요.");
    } finally {
        btn.innerText = originalText;
        btn.disabled = false;
        shareMsg.style.display = 'inline';
    }
}

function restart() {
    showScreen('landing');
}
