import { useState } from 'react'
import './Education.css'

const educationItems = [
  {
    title: 'Master of Data Science',
    period: 'Expected 2026',
    institution: 'Monash University',
    description: [
      'Grade: High Distinction 80.9, Thesis Grade 91',
      'Thesis: Combining Full Bayesian Inference with Prior-Fitted Network for Time Series Forecasting',
      'Supervisors: Dr. Angus Dempster, Dr. Christoph Bergmeir, Prof. Daniel Schmidt',
      'Focus areas: Data Analysis, Data Engineering, Data Science, Data Modelling, Data Visualisation, Statistical Modeling, Statistical Methods, Probabilistic Modelling, Machine Learning, Deep Learning',
    ],
  },
  {
    title: 'Bachelor of Commerce (Finance)',
    period: 'Aug 2020 - Dec 2023',
    institution: 'University of Melbourne (Unimelb)',
    description:
      'Quantitative subjects: Linear Algebra, Calculus, Econometrics, Probability, Statistics, Time Series Analysis and Forecasting.',
  },
]

const qualificationItems = [
  {
    title: 'PTE Overall 90/90',
    period: '2025',
    institution: 'Pearson Test of English',
    description: 'English language proficiency certification.',
  },
  {
    title: 'IELTS Overall 7.0/9',
    period: '2019',
    institution: 'International English Language Testing System',
    description: 'English language proficiency certification.',
  },
  {
    title: 'TOEFL Overall 104/120',
    period: '2019',
    institution: 'Test of English as a Foreign Language',
    description: 'English language proficiency certification.',
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
            {Array.isArray(item.description) ? (
              <ul className="education-description">
                {item.description.map((line) => (
                  <li key={line}>{line}</li>
                ))}
              </ul>
            ) : (
              <p className="education-description">{item.description}</p>
            )}
          </section>
        ))}
      </div>
    </div>
  )
}

export default Education
