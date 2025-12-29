import './Contact.css'

function Contact() {
  return (
    <div className="page contact-page">
      <h1>Get In Touch</h1>
      <div className="contact-content">
        <p className="contact-intro">
          I'd love to hear from you! Feel free to reach out through any of the following channels:
        </p>

        <div className="contact-links">
          <a href="https://github.com/oliverwu1024" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">🐙</span>
            <span>GitHub</span>
          </a>

          <a href="mailto:your.email@example.com" className="contact-link">
            <span className="contact-icon">📧</span>
            <span>Email</span>
          </a>

          <a href="https://linkedin.com/in/yourprofile" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">💼</span>
            <span>LinkedIn</span>
          </a>

          <a href="https://twitter.com/yourhandle" className="contact-link" target="_blank" rel="noopener noreferrer">
            <span className="contact-icon">🐦</span>
            <span>Twitter</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
