import { useState } from 'react'
import './Projects.css'

function Projects() {
  const [activeTab, setActiveTab] = useState('all')

  const projects = [
    {
      id: 1,
      title: "Personal Website",
      description: "A modern personal portfolio website built with React and Vite",
      technologies: ["React", "Vite", "CSS"],
      status: "Ongoing",
      statusTone: "green",
      category: "projects",
      link: "/",
      repo: "https://github.com/oliverwu1024/oliverwu1024.github.io"
    },
    {
      id: 2,
      title: "My Master Thesis",
      description: "Combining Bayesian inference with a Prior-Fitted Network for time series forecasting.",
      technologies: ["Machine Learning", "Deep Learning", "Forecasting", "Time Series", "Bayesian", "PFN", "Python"],
      status: "Completed",
      statusTone: "blue",
      category: "research",
      link: "https://github.com/oliverwu1024/my_master_thesis/blob/main/31977251_Che-YuWu_AngusDempster_Thesis.pdf",
      repo: "https://github.com/oliverwu1024/my_master_thesis"
    },
    {
      id: 3,
      title: "Shiny Dashboard",
      description: "An interactive dashboard showcasing data exploration and insights.",
      technologies: ["R", "Shiny", "Data Visualization"],
      status: "Completed",
      statusTone: "blue",
      category: "projects",
      link: "https://oliverwu1024.shinyapps.io/che-yu_wu_31977251_code/",
      repo: "https://github.com/oliverwu1024/shiny_dashboard"
    }
  ]

  const filteredProjects = activeTab === 'all'
    ? projects
    : projects.filter((project) => project.category === activeTab)

  return (
    <div className="page projects-page">
      <h1>Projects & Research</h1>
      <div className="projects-tabs">
        <button
          type="button"
          className={`tab-button ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button
          type="button"
          className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
          onClick={() => setActiveTab('projects')}
        >
          Projects
        </button>
        <button
          type="button"
          className={`tab-button ${activeTab === 'research' ? 'active' : ''}`}
          onClick={() => setActiveTab('research')}
        >
          Research
        </button>
      </div>
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              {project.status && (
                <span className={`project-status ${project.statusTone || ''}`}>
                  <span className={`status-dot ${project.statusTone || ''}`} aria-hidden="true"></span>
                  {project.status}
                </span>
              )}
            </div>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
              <a href={project.repo} className="project-link" target="_blank" rel="noopener noreferrer">
                GitHub Repo →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
