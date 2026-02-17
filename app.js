const questions = [
    {
        q: "한양대학교 공과대학 소속 학과는 총 몇 개일까요? (건축계열 포함)",
        a: ["19개", "20개", "21개", "22개"],
        correct: 2
    },
    {
        q: "한양대학교 서울캠퍼스가 소재한 자치구는 어디인가요?",
        a: ["성동구", "마포구", "강남구", "용산구"],
        correct: 0
    },
    {
        q: "한양대학교 공과대학 '새내기 새로배움터'가 진행되는 기간은 언제인가요?",
        a: ["2.25~2.27", "2.26~2.28", "2.27~3.1", "2.28~3.2"],
        correct: 3
    },
    {
        q: "2026년 기준, 한양대학교 공과대학 학생회는 몇 대 학생회인가요?",
        a: ["47대", "48대", "49대", "50대"],
        correct: 2
    },
    {
        q: "한양대학교를 상징하는 동물은 무엇인가요?",
        a: ["사자", "호랑이", "독수리", "용"],
        correct: 0
    },
    {
        q: "한양대학교가 처음 세워진 설립 연도는 언제인가요?",
        a: ["1938년", "1939년", "1940년", "1941년"],
        correct: 1
    },
    {
        q: "한양대학교의 건학 이념은 무엇인가요?",
        a: ["진리와 자유", "실사구시", "홍익인간", "사랑의 실천"],
        correct: 3
    },
    {
        q: "학교 캠퍼스와 바로 연결되는 한양대역 출구는 몇 번인가요?",
        a: ["1번출구", "2번출구", "3번출구", "4번출구"],
        correct: 1
    },
    {
        q: "5월에 열리는 한양대학교 공과대학 축제의 이름은 무엇인가요?",
        a: ["라치오스", "고공제", "공학인의 밤", "애국한양응원제"],
        correct: 2
    },
    {
        q: "한양대학교와 연결된 한양대역은 지하철 몇 호선인가요?",
        a: ["1호선", "2호선", "경희중앙선", "수인분당"],
        correct: 1
    }
];

const fortunes = [
    "이번 학기 성적표는 마치 새학기처럼 빛나는 A+로 가득할 거예요!",
    "따스한 봄날의 캠퍼스에서 설레는 인연이 시작될 거예요!. 주변을 잘 살펴보세요.",
    "지하철을 탈 때마다 늘 빈자리가 당신을 기다리고 있을거에요!",
    "학생회에서 만난 동기와 행복한 학기를 보내게 될거에요!",
    "입학 후 처음 들어간 동아리에서 설레는 인연이 시작될 거예요!",
    "제1공학관 엘리베이터는 항상 당신을 기다리고 있을거에요!",
    "공대판에서 가장 큰 목소리를 낸다면, 학과에 대한 사랑은 더욱 커질거에요!",
    "개강 첫날부터 매달, 당신의 주량은 한 병씩 늘어날 거에요!",
    "공과대학 새내기 새로배움터에서 평생 함께할 친구를 만나게 될거에요!",
    "새내기 새로배움터 뒷풀이에서 최고가 되어 끝까지 살아남게 될거에요!",
    "이번 학기 팀플에서는 책임감 있는 최고의 팀원만 만나게 될거에요!",
    "솔선수범하는 모습으로 선배들의 사랑을 독차지하게 될거에요.",
    "88계단을 10초만에 뛰어올라가도 지치지않는 강철 체력을 가지게 될거에요!"
];

let state = {
    screen: 'landing',
    questions: [],
    currentIdx: 0,
    selectedFortune: ''
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
    container.innerHTML = `
        <h2 style="margin-bottom: 2rem;">Q${state.currentIdx + 1}. ${qData.q}</h2>
        <div class="options-container">
            ${qData.a.map((ans, i) => `
                <button class="btn option-btn" onclick="handleAnswer(${i})">${ans}</button>
            `).join('')}
        </div>
        <div style="margin-top: 2rem; text-align: right; opacity: 0.5; font-size: 0.8rem;">
            계속해서 공명을 이어가세요 (${state.currentIdx + 1} / 3)
        </div>
    `;
}

function handleAnswer(idx) {
    const qData = state.questions[state.currentIdx];
    const btns = document.querySelectorAll('.option-btn');

    if (idx === qData.correct) {
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
        btns[idx].classList.add('wrong');
        setTimeout(() => {
            alert("공명이 끊겼습니다. 새로운 문제로 다시 도전하세요!");
            startQuiz();
        }, 500);
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

document.addEventListener('DOMContentLoaded', () => {
    // Wait for interaction
});
