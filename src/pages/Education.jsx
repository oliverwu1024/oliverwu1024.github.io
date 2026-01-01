import { useState } from 'react'
import './Education.css'

const educationItems = [
  {
    title: 'Master of Data Science',
    period: 'Expected 2026',
    institution: 'Monash University',
    description:
      'Advanced studies in data science, machine learning, and statistical analysis.',
  },
  {
    title: 'Bachelor of Commerce (Finance)',
    period: 'Completed 2023',
    institution: 'University of Melbourne',
    description:
      'Focused on financial analysis, quantitative methods, and economic modeling.',
  },
]

const qualificationItems = [
  {
    title: 'Qualification Title',
    period: 'Year',
    institution: 'Issuing Organization',
    description: 'Add a short summary of this qualification.',
  },
]

function Education() {
  const [activeTab, setActiveTab] = useState('education')
  const items = activeTab === 'education' ? educationItems : qualificationItems

  return (
    <div className="page education-page">
      <h1>Education & Qualifications</h1>
      <div className="education-tabs">
        <button
          type="button"
          className={`tab-button ${activeTab === 'education' ? 'active' : ''}`}
          onClick={() => setActiveTab('education')}
        >
          Education
        </button>
        <button
          type="button"
          className={`tab-button ${activeTab === 'qualifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('qualifications')}
        >
          Qualifications
        </button>
      </div>
      <div className="education-content">
        {items.map((item) => (
          <section key={`${item.title}-${item.period}`} className="education-item">
            <div className="education-header">
              <h2>{item.title}</h2>
              <span className="education-period">{item.period}</span>
            </div>
            <h3 className="education-institution">{item.institution}</h3>
            <p className="education-description">{item.description}</p>
          </section>
        ))}
      </div>
    </div>
  )
}

export default Education
