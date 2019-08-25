
import { Component } from 'react';
import style from "../styles/algorithms.scss";
import NavBar from "components/NavBar";

class ScreensAlgorithms extends Component {

    constructor(...args) {
        super(...args);

        this.state = { };
    }

    render() {
        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: style }} />
                <NavBar />
            </>
        )
    }
}

export default ScreensAlgorithms;