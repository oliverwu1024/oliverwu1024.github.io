import './Education.css'

function Education() {
  return (
    <div className="page education-page">
      <h1>Education & Qualifications</h1>
      <div className="education-content">
        <section className="education-item">
          <div className="education-header">
            <h2>Master of Data Science</h2>
            <span className="education-period">Expected 2026</span>
          </div>
          <h3 className="education-institution">Monash University</h3>
          <p className="education-description">
            Advanced studies in data science, machine learning, and statistical analysis.
          </p>
        </section>

        <section className="education-item">
          <div className="education-header">
            <h2>Bachelor of Commerce (Finance)</h2>
            <span className="education-period">Completed 2023</span>
          </div>
          <h3 className="education-institution">University of Melbourne</h3>
          <p className="education-description">
            Focused on financial analysis, quantitative methods, and economic modeling.
          </p>
        </section>
      </div>
    </div>
  )
}

export default Education
