
import { Component } from 'react';
import style from "../styles/algorithms.scss";
import NavBar from "components/NavBar";
import ProjectGallery from '../components/ProjectGallery';

class ScreensAlgorithms extends Component {

    constructor(...args) {
        super(...args);

        this.state = { };
    }

    render() {
        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: style }} />
                <div className="page_outer">
                    <NavBar />
                    <div className="page_body">
                        <h1 style={{marginLeft: '50px'}}>
                            Choose a topic
                        </h1>
                        <ProjectGallery />
                    </div>
                </div>
            </>
        )
    }
}

export default ScreensAlgorithms;