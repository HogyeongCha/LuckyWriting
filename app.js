const questions = [
    {
        q: "이번 2026 새내기 새로배움터를 주최하는 학생 기구는?",
        a: ["제49대 공과대학 건설준비위원회", "제50대 학생회", "총학생회", "동아리연합회"],
        correct: 0
    },
    {
        q: "2026 새내기 새로배움터의 행사 기간은?",
        a: ["1월 30일 ~ 2월 1일", "2월 14일 ~ 2월 16일", "2월 28일 ~ 3월 2일", "3월 1일 ~ 3월 3일"],
        correct: 2
    },
    {
        q: "한양대학교 공과대학의 상징 동물은?",
        a: ["독수리", "사자", "호랑이", "코끼리"],
        correct: 1
    },
    {
        q: "새내기 새로배움터가 열리는 장소는 어디일까요?",
        a: ["제주공항", "대구 엑스코", "속초 한화리조트 설악", "강릉 세인트존스"],
        correct: 2
    },
    {
        q: "한양공대만의 열정 가득한 응원전의 이름은?",
        a: ["라치오스", "응원한마당", "공대판", "한양제"],
        correct: 2
    },
    {
        q: "한양대학교의 설립 정신은?",
        a: ["사랑의 실천", "지혜의 탐구", "정의의 실현", "미래의 도약"],
        correct: 0
    },
    {
        q: "한양대학교 교내 인스타그램 @hyu_tech은 어디 소속일까요?",
        a: ["총학생회", "입학처", "공과대학", "대외협력팀"],
        correct: 2
    },
    {
        q: "한양대학교 공과대학 학생회는 몇 대 학생회일까요?",
        a: ["제47대", "제48대", "제49대", "제50대"],
        correct: 2
    },
    {
        q: "공대의 심장이라 불리는 한양대학교 건물은?",
        a: ["제1공학관", "백남학술정보관", "본관", "한양플라자"],
        correct: 0
    },
    {
        q: "새내기 새로배움터 행사 위치의 상세 건물은?",
        a: ["본관", "신관", "별관", "운동장"],
        correct: 2
    }
];

const fortunes = [
    "우리의 목소리가 울려 퍼질 때, 당신은 그 중심에 있을 거예요. 🦁",
    "공명하는 마음으로 만난 친구들과 평생의 인연이 됩니다. 🤝",
    "강력한 에너지의 파장이 당신의 1학기 학점 A+을 이끕니다. 🍀",
    "공대판의 뜨거운 열기가 당신의 열정을 깨울 운명입니다. ✨",
    "하나된 응원 소리 속에서 당신의 존재감이 빛나게 됩니다. 🔥",
    "선후배가 서로의 목소리에 귀 기울이는 최고의 새내기가 될 거예요. 🥰",
    "한양공대의 거대한 물결 속에서 당신만의 파동을 만드세요. ⭐",
    "오늘의 울림이 내일의 거대한 변화가 되어 돌아옵니다. 💪"
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
            alert("공명이 끊겼습니다. 새로운 문제로 다시 도정하세요!");
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
