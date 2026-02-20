# 공명 (共鳴) : 한양대학교 공과대학 새내기 새로배움터

2026학년도 한양대학교 공과대학 새내기 새로배움터를 위한 공식 이벤트 페이지입니다. 새내기들이 공과대학의 정신과 정보를 재미있게 익힐 수 있도록 퀴즈와 행운의 글귀 뽑기 기능을 제공합니다.

> **"우리의 목소리가 하나로 울려 퍼질 때, 진정한 '공명'이 시작됩니다."**

**행사 기간**: 2월 28일 - 3월 2일

---

## 🌟 주요 기능

1. **랜딩 페이지**: 행사의 슬로건, 일정, 그리고 행사 안내 정보를 제공합니다.
2. **공명 퀴즈**: 한양대학교와 공과대학에 관한 3문항의 랜덤 퀴즈를 풀며 기초 지식을 습득합니다. 
   - 총 10개 문항 중 3문항 무작위 출제
   - 각 문항별 힌트 제공
   - 예: 학과 수, 캠퍼스 위치, 한양대학교 역사 등
3. **행운의 글귀 뽑기 (Gacha)**: 퀴즈를 통과한 새내기들에게 학교 생활의 설렘을 담은 행운의 글귀를 제공합니다.
   - 리소난스 트리거를 통한 인터랙티브한 경험
   - 축하 애니메이션 효과
4. **결과 카드 저장**: 뽑은 행운의 글귀를 아름다운 카드 형태로 이미지 저장하여 SNS(인스타그램 등)에 공유할 수 있습니다.

---

## 🛠 기술 스택

### Frontend
- **HTML5, CSS3** (Vanilla CSS)
- **JavaScript** (Vanilla JS, 프레임워크 없음)

### 디자인 & 폰트
- **Google Fonts**: `Noto Serif KR`, `Outfit`
- **특수 효과**: Paper Texture, Dynamic Ripple Animations, Resonance Wave Effects

### 외부 라이브러리
- **[canvas-confetti](https://github.com/catdad/canvas-confetti)**: 축하 및 축포 애니메이션
- **[html2canvas](https://html2canvas.hertzen.com/)**: 결과 카드를 이미지로 캡처 및 저장

### 배포
- **[Firebase Hosting](https://firebase.google.com/products/hosting)**: 프로덕션 배포 플랫폼

---

## 📁 프로젝트 구조

```
LuckyWriting/
├── index.html          # 메인 HTML 페이지
├── app.js              # 퀴즈 데이터 및 애플리케이션 로직
├── style.css           # 전체 스타일시트
├── firebase.json       # Firebase 호스팅 설정
├── README.md           # 이 파일
└── view.md             # 추가 정보 문서
```

---

## 🚀 시작하기

### 로컬 실행

1. **저장소 클론**
   ```bash
   git clone <repository-url>
   cd LuckyWriting
   ```

2. **브라우저에서 열기**
   - `index.html` 파일을 Chrome, Edge, Firefox 등의 웹 브라우저로 엽니다.
   - 또는 로컬 서버를 실행합니다:
     ```bash
     # Python이 설치되어 있는 경우
     python -m http.server 8000
     # 또는 Node.js의 경우
     npx serve
     ```

3. **브라우저에서 접속**
   - http://localhost:8000 (Python 서버)
   - http://localhost:3000 (npx serve)

### Firebase로 배포

1. **Firebase CLI 설치**
   ```bash
   npm install -g firebase-tools
   ```

2. **Firebase 프로젝트 초기화**
   ```bash
   firebase login
   firebase init
   ```

3. **배포**
   ```bash
   firebase deploy
   ```

---

## 📝 사용 방법

1. **"공명 시작하기"** 버튼을 클릭하여 시작합니다.
2. **3문항의 퀴즈**를 풀어 공과대학에 대해 배웁니다.
3. **모든 퀴즈를 통과**하면 행운의 글귀 뽑기 페이지로 이동합니다.
4. **중심을 누르면** 당신의 운명과 공명하는 글귀를 받을 수 있습니다.
5. **결과 카드를 저장**하여 SNS에 공유합니다.

---

## 🎨 특징

- **반응형 디자인**: 모바일, 태블릿, 데스크톱 모두에서 최적화된 환경
- **종이 텍스처**: 따뜻하고 감성적인 사용자 경험
- **리소난스 애니메이션**: 파동 효과를 통한 시각적 몰입감
- **프레임워크 없음**: 순수 HTML, CSS, JavaScript로 가볍고 빠른 성능
- **오프라인 지원**: 로컬에서 완전히 독립적으로 실행 가능

---

## 👥 기여자

**제49대 공과대학 학생회 건설준비위원회**  
- **개발**: Ho-gyeong Cha
- **운영**: [@hyu_tech](https://instagram.com/hyu_tech) PR-Team

---

## 📄 라이선스

이 프로젝트는 한양대학교 공과대학의 공식 이벤트 페이지입니다.  
상업적 이용은 금지하며, 교육 목적으로만 사용할 수 있습니다.

---

## 📞 문의

[@hyu_tech](https://instagram.com/hyu_tech) Instagram 또는 한양대학교 공과대학 학생회를 통해 문의하실 수 있습니다.
