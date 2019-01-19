import React from 'react';
import ProjectSummary from "./ProjectSummary";

const ProjectList = ({projects}) => {
    return (
        <div className=" poject-list section">
          { projects && projects.map(project => {
              return(
                  <ProjectSummary project={project} key={project.id} />
              )
          })}
        </div>
    )
};
export default ProjectList;
