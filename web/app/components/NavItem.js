

import { Component } from 'react';

import style from '../styles/navitem.scss';
import {withRouter} from 'next/router';


class NavItem extends Component {

    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {
        const depth = this.props.depth || 0;

        let active = false;
        let open = false;
        let className = "navitem";
        if (this.props.router.pathname == this.props.page) {
            active = true;
            className += " elev_6";
        }

        if ((this.props.page != '/' && this.props.router.pathname.indexOf(this.props.page) == 0)
            || (this.props.page == this.props.router.pathname)) {
            className += " nav_open";
            open = true;
        }

        const subheadings = [];
        if (this.props.subheadings) {
            for (let i = 0; i < this.props.subheadings.length; i++) {
                const subheading = this.props.subheadings[i];
                subheadings.push(
                    <NavItem name={subheading.name}
                             page={this.props.page + subheading.path}
                             depth={depth + 1}
                             router={this.props.router} />
                )
            }
        }

        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: style }} />

                <a className={className} href={this.props.page}>
                    <div style={{paddingLeft: 30 * depth}}>
                        {this.props.name}
                    </div>

                    {
                        active &&
                        <div className="navitem_highlight" />
                    }
                </a>

                {
                    open &&
                    subheadings
                }
            </>
        )
    }
}

export default withRouter(NavItem);
