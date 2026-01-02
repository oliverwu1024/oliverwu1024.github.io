import { useState } from 'react'
import './About.css'

const workExperience = [
  {
    title: 'Space Utilisation Auditor',
    period: 'Mar 2024 – Oct 2025',
    company: 'Monash University',
    bullets: [
      'Gathered and structured space-usage data to guide classroom planning and scheduling.',
      'Partnered with stakeholders to translate findings into practical, decision-ready insights.',
      'Maintained clear documentation to keep planning aligned across teams.',
    ],
  },
  {
    title: 'Project Intern',
    period: 'Jul 2025 – Aug 2025',
    company: 'Monash University & University of Warwick',
    bullets: [
      'Performed data-driven analysis on fibre-optic infrastructure to inform U.S. market strategy.',
      'Delivered clear reports that surfaced trends and actionable opportunities.',
      'Summarized findings into concise recommendations for project stakeholders.',
    ],
  },
  {
    title: 'Customer Assistant',
    period: 'Oct 2024 – Jan 2025',
    company: "Dan Murphy's",
    bullets: [
      'Provided attentive customer service while keeping daily operations accurate and smooth.',
      'Resolved customer requests quickly and professionally to maintain service quality.',
      'Supported team workflows during busy periods with reliable attention to detail.',
    ],
  },
]

const volunteerExperience = [
  {
    title: 'Peer Mentor',
    period: 'Feb 2025 – Jun 2025',
    company: 'Monash University',
    bullets: [
      'Organised and led weekly mentoring sessions to guide first-year students.',
      'Hosted social and networking events to strengthen peer connections.',
      'Demonstrated leadership through engagement, coordination, and student support.',
    ],
  },
  {
    title: 'Student Ambassador',
    period: 'Aug 2024 – Jun 2025',
    company: 'Monash University English Connect',
    bullets: [
      'Hosted social and networking events to promote intercultural engagement and inclusion.',
      'Volunteered at outreach programs, supporting student communication and community initiatives.',
      'Facilitated language exchange activities to build cross-cultural understanding.',
    ],
  },
]

const researchExperience = [
  {
    title: 'Research Assistant',
    period: 'Year - Year',
    company: 'Research Lab or University',
    bullets: [
      'Describe the research focus and your role',
      'Highlight key methods, tools, or results',
      'Note publications, posters, or presentations if relevant',
    ],
  },
]

function About() {
  const [activeTab, setActiveTab] = useState('work')
  const items = (() => {
    if (activeTab === 'volunteer') return volunteerExperience
    if (activeTab === 'research') return researchExperience
    return workExperience
  })()

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
        <button
          type="button"
          className={`tab-button ${activeTab === 'research' ? 'active' : ''}`}
          onClick={() => setActiveTab('research')}
        >
          Research
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
