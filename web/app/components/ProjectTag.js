

import { Component } from 'react';

import style from '../styles/projecttag.scss';


class ProjectTag extends Component {

    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {

        const colors = [
            "#F35858",
            "#65CDCD"
        ];

        const color = colors[this.props.color % colors.length];

        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: style }} />

                <div className="tag_outer">
                    <div className="projecttag" href="#" style={{ backgroundColor: color }}>
                        {this.props.name}
                    </div>
                </div>
            </>
        )
    }
}

export default ProjectTag;