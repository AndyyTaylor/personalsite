

import { Component } from 'react';

import style from '../styles/projectbox.scss';
import ProjectTag from 'components/ProjectTag';


class ProjectBox extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isHover: false,
            hoverState: 0,
            hoverSpeed: 0.10
        };

        this.interval = null;

        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter(e) {
        this.setState({ isHover: true });

        if (this.interval != null)
            clearInterval(this.interval);

        this.interval = setInterval(() => {
            this.setState({
                hoverState: this.state.hoverState + this.state.hoverSpeed
            });

            if (this.state.hoverState > 1) {
                this.setState({ hoverState: 1 });
                clearInterval(this.interval);
                this.interval = null;
            }
        }, 16);
    }

    handleMouseLeave(e) {
        this.setState({ isHover: false });

        if (this.interval != null)
            clearInterval(this.interval);

        this.interval = setInterval(() => {
            this.setState({
                hoverState: this.state.hoverState - this.state.hoverSpeed
            });

            if (this.state.hoverState < 0) {
                this.setState({ hoverState: 0 });
                clearInterval(this.interval);
                this.interval = null;
            }
        }, 16);
    }

    render() {
        const imgWidth = (300 * (1 - this.state.hoverState)) + 'px';

        const subtitleElements = [];
        for (let i = 0; i < this.props.subtitles.length; i++) {
            subtitleElements.push(
                <a className="project_subtitle" href={this.props.subtitles[i].pathname} style={{width: (300 - imgWidth) + 'px'}}>
                    {this.props.subtitles[i].name}
                </a>
            )
        }

        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: style }} />

                <a className="projectbox" href={this.props.pathname} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}>
                    <div style={{display: 'flex'}}>
                        <img className="project_image" src={this.props.image} style={{width: imgWidth}} />

                        {
                            this.state.isHover &&
                            <div className="project_subtitles" style={{width: (300 - imgWidth) + 'px'}}>
                                {subtitleElements}
                            </div>
                        }
                    </div>

                    <div className="project_info">
                        <div className="project_tags">
                            <ProjectTag name="Demo" color={0} />
                            <ProjectTag name="Python" color={1} />
                        </div>
                        <div className="project_name">
                            {this.props.name}
                        </div>
                    </div>
                </a>
            </>
        )
    }
}

export default ProjectBox;