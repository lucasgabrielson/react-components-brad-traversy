import React from 'react';
import PropTypes from 'prop-types';

class ProjectItem extends React.Component {
    deleteProject(){
        this.props.onDelete(this.props);
    }
    render() { // required lifecycle method
        console.log(this.props)
        return (
            <li className="Project">
                <strong>{this.props.project.title}</strong> - {this.props.project.category} <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>X</a>
            </li>
        );
    }
}

ProjectItem.propTypes = {
    project: PropTypes.object,
    onDelete: PropTypes.func
}


export default ProjectItem;