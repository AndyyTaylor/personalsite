

import { Component } from 'react';
import NavItem from 'components/NavItem';

import style from '../styles/navbar.scss';


class NavBar extends Component {

    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {
        const subheadings = [
            {
                name: "Arrays",
                path: "/arrays"
            },
            {
                name: "Graphs",
                path: "/graphs"
            },
            {
                name: "Hash Tables",
                path: "/hash_tables"
            },
            {
                name: "Heaps",
                path: "/heaps"
            },
            {
                name: "Linked Lists",
                path: "/lists"
            },
            {
                name: "Queues",
                path: "/queues"
            },
            {
                name: "Stacks",
                path: "/stacks"
            },
            {
                name: "Trees",
                path: "/trees"
            },
            {
                name: "Tries",
                path: "/tries"
            }
        ]
        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: style }} />

                <div className="navbar elev_2 text_surface">
                    <NavItem name="home" page="/" />
                    {/* <NavItem name="screeps" page="/screeps" /> */}
                    <NavItem name="algorithms" page="/algorithms" />
                    <NavItem name="data structures"
                             page="/data_structures"
                             subheadings={subheadings} />
                    {/* <NavItem name="machine learning" page="/machine_learning" /> */}
                    <NavItem name="about" page="/about" />
                </div>
            </>
        )
    }
}

export default NavBar;