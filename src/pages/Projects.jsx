import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Personal Website",
      description: "A modern personal portfolio website built with React and Vite",
      technologies: ["React", "Vite", "CSS"],
      status: "Ongoing",
      statusTone: "green",
      link: "/",
      repo: "https://github.com/oliverwu1024/oliverwu1024.github.io"
    },
    {
      id: 2,
      title: "Project Two",
      description: "Coming soon - describe your next project here",
      technologies: ["JavaScript", "Node.js"],
      link: "#",
      repo: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "Coming soon - describe another project here",
      technologies: ["Python", "API"],
      link: "#",
      repo: "#"
    }
  ]

  return (
    <div className="page projects-page">
      <h1>Projects & Research</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <div className="project-header">
              <h3>{project.title}</h3>
              {project.status && (
                <span className={`project-status ${project.statusTone || ''}`}>
                  <span className="status-dot" aria-hidden="true"></span>
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
              <a href={project.link} className="project-link">View Project →</a>
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
