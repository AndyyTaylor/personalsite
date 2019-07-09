

import { Component } from 'react';

import style from '../styles/navbar.scss';


class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {
        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: style }} />

                <div className="navbar elev_2">
                    This is a navbar
                </div>
            </>
        )
    }
}

export default NavBar;