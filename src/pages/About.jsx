import './About.css'

function About() {
  return (
    <div className="page about-page">
      <h1>About Me</h1>
      <div className="about-content">
        <section className="about-section">
          <h2>Background</h2>
          <p>
            I'm a passionate developer with expertise in web technologies and software development.
            I love building things that make a difference.
          </p>
        </section>

        <section className="about-section">
          <h2>Skills</h2>
          <div className="skills-grid">
            <div className="skill-item">JavaScript</div>
            <div className="skill-item">React</div>
            <div className="skill-item">Node.js</div>
            <div className="skill-item">Python</div>
            <div className="skill-item">Git</div>
            <div className="skill-item">Linux</div>
          </div>
        </section>

        <section className="about-section">
          <h2>Interests</h2>
          <p>
            When I'm not coding, I enjoy exploring new technologies, contributing to open source,
            and sharing knowledge with the developer community.
          </p>
        </section>
      </div>
    </div>
  )
}

export default About
