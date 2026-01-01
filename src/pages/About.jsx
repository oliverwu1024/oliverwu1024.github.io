import { useState } from 'react'
import './About.css'

const workExperience = [
  {
    title: 'Software Developer',
    period: '2023 - Present',
    company: 'Company Name',
    bullets: [
      'Developed and maintained web applications using React and Node.js',
      'Collaborated with cross-functional teams to deliver high-quality software',
      'Implemented new features and optimized existing codebase',
    ],
  },
  {
    title: 'Junior Developer',
    period: '2021 - 2022',
    company: 'Tech Startup',
    bullets: [
      'Assisted in developing mobile and web applications',
      'Participated in code reviews and agile ceremonies',
      'Learned best practices in software development',
    ],
  },
]

const volunteerExperience = [
  {
    title: 'Volunteer Developer',
    period: '2022 - 2023',
    company: 'Non-Profit Organization',
    bullets: [
      'Built websites for local community organizations',
      'Provided technical support and training',
      'Helped improve digital presence for social causes',
    ],
  },
]

function About() {
  const [activeTab, setActiveTab] = useState('work')
  const items = activeTab === 'work' ? workExperience : volunteerExperience

  return (
    <div className="page about-page">
      <h1>Experience</h1>
      <div className="experience-tabs">
        <button
          type="button"
          className={`tab-button ${activeTab === 'work' ? 'active' : ''}`}
          onClick={() => setActiveTab('work')}
        >
          Work
        </button>
        <button
          type="button"
          className={`tab-button ${activeTab === 'volunteer' ? 'active' : ''}`}
          onClick={() => setActiveTab('volunteer')}
        >
          Volunteer
        </button>
      </div>
      <div className="about-content">
        {items.map((item) => (
          <section key={`${item.title}-${item.period}`} className="experience-item">
            <div className="experience-header">
              <h2>{item.title}</h2>
              <span className="experience-period">{item.period}</span>
            </div>
            <h3 className="experience-company">{item.company}</h3>
            <ul className="experience-description">
              {item.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  )
}

export default About
