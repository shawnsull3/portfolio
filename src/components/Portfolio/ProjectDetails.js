import React from 'react';
import ProjectInfo from './ProjectInfo';

const ProjectDetails = ({ match }) => {
  const { params: { projectTitle } } = match;
  const project = ProjectInfo.filter( a => a.title === projectTitle)[0];
  return (
    <div className='col-12'>
        <div className='row justify-content-center'>
            <div className='col-12 col-lg-10'>
                <div className='row'>
                  <h1 className='col-12'>{project.title}</h1>
                </div>

                <div className='row'>
                  <h3 className='col-12'>{project.subtitle}</h3>
                </div>

                <div className='row'>
                  <div className='col-12 col-md-8'>
                      <div>
                        <a href={project.githubLink} className='project-links'>Github Repo</a>
                      </div>
                      {project.url !== '' ? 
                        <a href={project.url} className='project-links'>{project.url}</a>
                        : <p className='in-development'>{project.noURL}</p>                      
                      }
                      <div>
                        <p>{project.overview}</p>   
                      </div>
                      <ul>
                        {project.description.map( (bullet, i) => {
                          return (
                            <li key={i}>{bullet}</li>
                          )
                        })}
                      </ul>
                  </div>
                  <div className='col-12 col-md-4'>
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

                <div className='row justify-content-center'>
                  <div className='col-10 text-center'>
                    {project.photos.map( (photo, i) => <img src={photo} className='details-images' alt='' key={i}/>)}
                  </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default ProjectDetails;