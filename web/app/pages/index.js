
import { Component } from 'react';
import indexStyle from "../styles/index.scss";
import NavBar from "components/NavBar";

class ScreensIndex extends Component {

    constructor(...args) {
        super(...args);

        this.state = { };
    }

    render() {
        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: indexStyle }} />
                <NavBar />
            </>
        )
    }
}

export default ScreensIndex;