import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Personal Website",
      description: "A modern personal portfolio website built with React and Vite",
      technologies: ["React", "Vite", "CSS"],
      link: "#"
    },
    {
      id: 2,
      title: "Project Two",
      description: "Coming soon - describe your next project here",
      technologies: ["JavaScript", "Node.js"],
      link: "#"
    },
    {
      id: 3,
      title: "Project Three",
      description: "Coming soon - describe another project here",
      technologies: ["Python", "API"],
      link: "#"
    }
  ]

  return (
    <div className="page projects-page">
      <h1>Projects & Research</h1>
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map(tech => (
                <span key={tech} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a href={project.link} className="project-link">View Project →</a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
