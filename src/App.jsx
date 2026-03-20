import './App.css'

const highlights = [
  '빠르게 아이디어를 배포할 수 있는 프론트 환경',
  'Vercel 자동 배포로 수정 후 바로 반영',
  '나중에 Spring Boot API와 자연스럽게 연결 가능',
]

const steps = [
  {
    title: '화면 만들기',
    description: '이제부터는 이 페이지를 네 프로젝트 실제 메인 화면으로 바꾸면 됩니다.',
  },
  {
    title: 'API 연결 준비',
    description: '다음 단계에서는 서버 API 주소를 환경변수로 분리해서 붙이면 됩니다.',
  },
  {
    title: '배포 반복',
    description: '코드를 수정하고 push 하면 Vercel이 자동으로 다시 배포해줍니다.',
  },
]

function App() {
  return (
    <main className="page-shell">
      <section className="hero-panel">
        <p className="eyebrow">My First Deploy</p>
        <h1>이제 여기가 네 프로젝트의 시작 화면이야.</h1>
        <p className="hero-copy">
          React, Vercel, Ubuntu 서버 준비까지 한 번에 넘겼으니 이제부터는 기능과 화면을
          차근차근 쌓아 올리면 됩니다.
        </p>

        <div className="hero-actions">
          <a className="primary-action" href="https://vercel.com/dashboard" target="_blank" rel="noreferrer">
            Vercel 대시보드 보기
          </a>
          <a className="secondary-action" href="https://github.com/Lupus-01/my-frontend" target="_blank" rel="noreferrer">
            GitHub 저장소 보기
          </a>
        </div>

        <ul className="highlight-list">
          {highlights.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="content-grid">
        <article className="info-card accent-card">
          <p className="card-label">현재 상태</p>
          <h2>프론트 배포 성공</h2>
          <p>
            GitHub와 Vercel 연결이 끝났기 때문에, 앞으로는 수정 후 <strong>push</strong>만
            해도 자동 반영됩니다.
          </p>
        </article>

        <article className="info-card">
          <p className="card-label">다음 추천 작업</p>
          <div className="step-list">
            {steps.map((step) => (
              <div key={step.title} className="step-item">
                <span className="step-number">{steps.indexOf(step) + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
    </main>
  )
}

export default App
