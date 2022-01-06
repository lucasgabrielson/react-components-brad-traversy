import React from 'react';
import ProjectItem from './ProjectItem'
import PropTypes from 'prop-types';

class Projects extends React.Component {

    deleteProject(id) {
        this.props.onDelete(id);
    }
    render() { // required lifecycle method
    let projectItems;
    if(this.props.projects){
        projectItems = this.props.projects.map(project => {
            // console.log(project)
            return  (
                <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.id} project={project} />
            )
        });
    }
        console.log(this.props)
        return (
            <div className="Projects">
            <h3>Latest Projects</h3>
                {projectItems}
            </div>
        );
    }
}

Projects.propTypes = {
    projects: PropTypes.array,
    onDelete: PropTypes.func
}


export default Projects;