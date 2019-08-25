

import { Component } from 'react';
import NavItem from 'components/NavItem';

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

                <div className="navbar elev_2 text_surface">
                    <NavItem name="home" page="/" />
                    <NavItem name="screeps" page="/screeps" />
                    <NavItem name="algorithms" page="/algorithms" />
                    <NavItem name="machine learning" page="/machine_learning" />
                    <NavItem name="about me" page="/about" />
                </div>
            </>
        )
    }
}

export default NavBar;