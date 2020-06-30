import React from 'react';

const PortfolioList = ({ projects }) => {
  return (
    <div className='row justify-content-center'>
      {projects.map( (project, i) => {
        return (
            <div className='col-12 col-sm-10 entry' key={i} >
                <div className='row'>
                    <div className='col-12 col-sm-9 info'>
                        <h3 className='project-title' onClick={() => window.open(project.githubLink)} >{project.title}</h3>
                        <h5 className='project-subtitle'>{project.subtitle}</h5> 
                        <p>{project.description}</p>    
                    </div>
                    <div className='col-12 col-sm-3'>
                        <img className= 'project-image' 
                            src={project.photos[0]} 
                            alt={project.title} 
                            onClick={() => window.open(project.githubLink)}
                        />
                    </div>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default PortfolioList;