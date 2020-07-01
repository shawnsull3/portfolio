import React from 'react';

const ProjectDetails = ({ match }) => {
  const { params: { projectTitle } } = match;
  return (
    <div>
        {projectTitle}
    </div>
  )
}

export default ProjectDetails;