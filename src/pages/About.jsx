import './About.css'

function About() {
  return (
    <div className="page about-page">
      <h1>Work & Volunteer Experience</h1>
      <div className="about-content">
        <section className="experience-item">
          <div className="experience-header">
            <h2>Software Developer</h2>
            <span className="experience-period">2023 - Present</span>
          </div>
          <h3 className="experience-company">Company Name</h3>
          <ul className="experience-description">
            <li>Developed and maintained web applications using React and Node.js</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software</li>
            <li>Implemented new features and optimized existing codebase</li>
          </ul>
        </section>

        <section className="experience-item">
          <div className="experience-header">
            <h2>Volunteer Developer</h2>
            <span className="experience-period">2022 - 2023</span>
          </div>
          <h3 className="experience-company">Non-Profit Organization</h3>
          <ul className="experience-description">
            <li>Built websites for local community organizations</li>
            <li>Provided technical support and training</li>
            <li>Helped improve digital presence for social causes</li>
          </ul>
        </section>

        <section className="experience-item">
          <div className="experience-header">
            <h2>Junior Developer</h2>
            <span className="experience-period">2021 - 2022</span>
          </div>
          <h3 className="experience-company">Tech Startup</h3>
          <ul className="experience-description">
            <li>Assisted in developing mobile and web applications</li>
            <li>Participated in code reviews and agile ceremonies</li>
            <li>Learned best practices in software development</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default About
