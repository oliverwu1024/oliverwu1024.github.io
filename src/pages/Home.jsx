import './Home.css'

function Home() {
  return (
    <div className="page home-page">
      <div className="hero">
        <div className="hero-content">
          <div className="profile-section">
            <div className="profile-picture">
              <img src="/profile.jpg" alt="Oliver Wu" />
            </div>
            <div className="social-links">
              <a href="https://github.com/oliverwu1024" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="mailto:cheyuwu1024@gmail.com" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/oliver-wu-aa40a7215" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
            </div>
            <div className="education-info">
              <div className="education-degree">
                <strong>Master of Data Science</strong>
                <span>Monash University</span>
              </div>
              <div className="education-degree">
                <strong>Bachelor of Commerce (Finance)</strong>
                <span>University of Melbourne</span>
              </div>
            </div>
          </div>
          <div className="hero-text">
            <h1 className="hero-title">Hi, I'm Oliver Wu (Che-Yu Wu)</h1>
            <p className="hero-subtitle">Welcome to my personal website</p>
            <div className="about-me">
              <h2>About Me</h2>
              <p className="hero-description">
                I'm a data analyst and data scientist who enjoys turning raw data into insights that actually matter. I like working across the full data workflow, from cleaning and exploring data, to building models and communicating results in a clear way. I've worked with Python, R, and SQL on projects involving analytics, forecasting, and machine learning, and I enjoy building things that sit between technical depth and practical use, whether that's a predictive model, an analysis pipeline, or a simple dashboard that helps people make better decisions.
              </p>
              <p className="hero-description">
                My research interests span three closely related areas: time series analysis, statistics, and machine learning. I have the most experience in time series, particularly forecasting, but I’m equally interested in developing a deeper understanding across all three. I enjoy learning how classical statistical ideas connect with modern machine learning and deep learning methods, including Bayesian and probabilistic approaches. Much of my interest lies in understanding models at a deeper level: how they behave, where they break down, and what assumptions they rely on. I’m especially motivated to keep developing my research skills by working on problems related to robustness, evaluation, and generalization, and by gaining more hands-on experience through future research projects.
              </p>
            </div>

            <div className="skills-section">
              <h2>Skills</h2>

              <div className="skill-category">
                <h3 className="category-title">Languages</h3>
                <div className="skills-tags">
                  <span className="skill-tag">Python</span>
                  <span className="skill-tag">R</span>
                  <span className="skill-tag">SQL</span>
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">ML/DL Frameworks</h3>
                <div className="skills-tags">
                  <span className="skill-tag">PyTorch</span>
                  <span className="skill-tag">TensorFlow</span>
                  <span className="skill-tag">Scikit-learn</span>
                  <span className="skill-tag">Pandas/NumPy</span>
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Data Science & Analytics</h3>
                <div className="skills-tags">
                  <span className="skill-tag">Machine Learning</span>
                  <span className="skill-tag">Deep Learning</span>
                  <span className="skill-tag">Time Series</span>
                  <span className="skill-tag">Forecasting</span>
                  <span className="skill-tag">Statistical Modeling</span>
                  <span className="skill-tag">Data Analytics</span>
                  <span className="skill-tag">Data Visualization</span>
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Big Data & Engineering</h3>
                <div className="skills-tags">
                  <span className="skill-tag">Apache Spark</span>
                  <span className="skill-tag">Apache Kafka</span>
                  <span className="skill-tag">Data Engineering</span>
                  <span className="skill-tag">Cloud Platforms</span>
                </div>
              </div>

              <div className="skill-category">
                <h3 className="category-title">Tools & Platforms</h3>
                <div className="skills-tags">
                  <span className="skill-tag">Git</span>
                  <span className="skill-tag">Linux</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="visitor-counter">
        <img src="https://visitor-badge.laobi.icu/badge?page_id=oliverwu1024.github.io&left_color=blue&right_color=green&left_text=Visitors" alt="Visitor counter" />
      </div>
    </div>
  )
}

export default Home
