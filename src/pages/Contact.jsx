import './Contact.css'

function Contact() {
  return (
    <div className="page contact-page">
      <h1>Get In Touch</h1>
      <div className="contact-content">
        <p className="contact-intro">
          I'd love to hear from you. Feel free to reach out through any of the channels below.
        </p>

        <ul className="contact-list">
          <li className="contact-item">
            <span className="contact-icon">📧</span>
            <div className="contact-details">
              <span className="contact-label">Email</span>
              <a href="mailto:cheyuwu1024@gmail.com">cheyuwu1024@gmail.com</a>
            </div>
          </li>
          <li className="contact-item">
            <span className="contact-icon">💼</span>
            <div className="contact-details">
              <span className="contact-label">LinkedIn</span>
              <a href="https://linkedin.com/in/oliver-wu-aa40a7215" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/oliver-wu-aa40a7215
              </a>
            </div>
          </li>
          <li className="contact-item">
            <span className="contact-icon">🐙</span>
            <div className="contact-details">
              <span className="contact-label">GitHub</span>
              <a href="https://github.com/oliverwu1024" target="_blank" rel="noopener noreferrer">
                github.com/oliverwu1024
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Contact
