

import { Component } from 'react';

import style from '../styles/projectgallery.scss';
import ProjectBox from './ProjectBox';


class ProjectGallery extends Component {

    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {
        if (!this.props.data)
            return;

        const projects = [];
        for (let i = 0; i < this.props.data.length; i++) {
            const project = this.props.data[i];
            projects.push(
                <ProjectBox title={project.title}
                            path={project.path}
                            image={project.image}
                            tags={project.tags}
                            subtitles={project.subtitles} />
            )
        }

        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: style }} />

                <div className="container">
                    <div className="grid-row">
                        { projects }
                    </div>
                </div>
            </>
        )
    }
}

export default ProjectGallery;