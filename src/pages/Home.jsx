import './Home.css'

function Home() {
  return (
    <div className="page home-page">
      <div className="hero">
        <div className="hero-content">
          <div className="profile-picture">
            <img src="/profile.jpg" alt="Oliver Wu" />
          </div>
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm Oliver Wu (Che-Yu Wu)</h1>
            <p className="hero-subtitle">Welcome to my personal website</p>
            <p className="hero-description">
              I'm a software developer passionate about creating elegant solutions to complex problems.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
