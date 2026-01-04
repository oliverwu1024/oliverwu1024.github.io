import { useState } from 'react'
import './Education.css'

const educationItems = [
  {
    title: 'Master of Data Science',
    period: 'Feb 2024 - Dec 2025',
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
