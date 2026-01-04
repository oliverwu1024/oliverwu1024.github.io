import { useState } from 'react'
import './About.css'

const workExperience = [
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
    title: 'Research Operations Intern',
    period: 'Dec 2022 – Mar 2023',
    company: 'Business Council for Sustainable Development Australia',
    bullets: [
      'Prepared research reports and briefing documents on sustainability and industry developments.',
      'Collected and analysed news and policy data to support ongoing research initiatives.',
      'Participated in weekly team meetings, contributing insights and progress updates on assigned topics.',
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
    title: 'Master Thesis',
    period: 'Feb 2025 – Dec 2025',
    company: 'Combining Bayesian Inference with Prior-Fitted Network for Time Series Forecasting',
    bullets: [
      'Conducted a literature review on forecasting models and learning methods.',
      'Developed a model to generate synthetic time-series data for training and evaluation.',
      'Designed and implemented a Prior-Fitted Network (PFN) for zero-shot forecasting using Bayesian priors.',
    ],
  },
  {
    title: 'Research Assistant',
    period: 'Jan 2025 – Present',
    company: 'Monash Temporal Analytics Lab',
    bullets: [
      'Participated in weekly research group meetings and reading sessions on time-series and machine learning.',
      'Collaborated with researchers to share feedback on projects and explore interdisciplinary applications.',
    ],
  },
]

const monthIndex = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
}

const parsePeriod = (period) => {
  const [startRaw, endRaw] = period.split(/\s*[–—-]\s*/).map((value) => value.trim())
  const [startMonth, startYear] = startRaw.split(' ')
  const startDate = new Date(Number(startYear), monthIndex[startMonth] ?? 0, 1)

  const isPresent = !endRaw || endRaw.toLowerCase() === 'present'
  if (isPresent) {
    return { startDate, endDate: new Date(9999, 11, 31), isPresent }
  }

  const [endMonth, endYear] = endRaw.split(' ')
  const endDate = new Date(Number(endYear), monthIndex[endMonth] ?? 0, 1)
  return { startDate, endDate, isPresent }
}

const sortByDates = (items) =>
  [...items].sort((a, b) => {
    const { startDate: aStart, endDate: aEnd, isPresent: aPresent } = parsePeriod(a.period)
    const { startDate: bStart, endDate: bEnd, isPresent: bPresent } = parsePeriod(b.period)

    if (aPresent !== bPresent) {
      return aPresent ? -1 : 1
    }
    if (aEnd.getTime() !== bEnd.getTime()) {
      return bEnd.getTime() - aEnd.getTime()
    }
    return bStart.getTime() - aStart.getTime()
  })

function About() {
  const [activeTab, setActiveTab] = useState('work')
  const items = (() => {
    if (activeTab === 'volunteer') return sortByDates(volunteerExperience)
    if (activeTab === 'research') return sortByDates(researchExperience)
    return sortByDates(workExperience)
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
