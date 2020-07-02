import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioList = ({ projects }) => {
  return (
    <div className='row justify-content-center'>
      {projects.map( (project, i) => {
        return (
            <div className='col-12 col-sm-10 entry' key={i} >
                <div className='row'>
                    <div className='col-12 info'>
                        <h3>
                            <Link to={`/portfolio/${project.title}`} className='project-title'>{project.title}</Link>
                        </h3>
                        <h5 className='project-subtitle'>{project.subtitle}</h5> 
                        <p>{project.description}</p>    
                    </div>
                    <div className='row'>
                        <div className='col-12 col-sm-8'>
                            <Link to={`/portfolio/${project.title}`}>
                                <img className= 'project-image' 
                                    src={project.photos[0]} 
                                    alt={project.title} 
                                />
                            </Link>
                        </div>
                        <div className='col-12 col-sm-4'>
                            <div className='row'>
                                <p className='col-12 tech-text'>Technologies:</p>
                                {project.technologies.map( (technology, i) => {
                                    return (
                                        <p className='technologies' key={i}>{technology}</p>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
      })}
    </div>
  )
}

export default PortfolioList;