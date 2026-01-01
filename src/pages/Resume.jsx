import './Resume.css'

function Resume() {
  const resumeUrl = '/Resume_for_webpage.pdf'

  return (
    <div className="page resume-page">
      <h1>Resume</h1>
      <div className="resume-content">
        <p className="resume-intro">
          View my resume below or download a copy.
        </p>
        <a href={resumeUrl} className="resume-button" download>
          <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
            <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
          </svg>
          Download Resume (PDF)
        </a>
        <div className="resume-viewer">
          <iframe
            title="Resume PDF"
            src={resumeUrl}
            loading="lazy"
          />
        </div>
      </div>
    </div>
  )
}

export default Resume
