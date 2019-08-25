

import { Component } from 'react';

import style from '../styles/navitem.scss';
import {withRouter} from 'next/router';


class NavItem extends Component {

    constructor(props) {
        super(props);

        this.state = { };
    }

    render() {
        let active;
        let className = "navitem";
        if (this.props.router.pathname == this.props.page) {
            active = true;
            className += " elev_6";
        } else {
            active = false;
        }

        return (
            <>
                <style dangerouslySetInnerHTML={{ __html: style }} />

                <a className={className} href={this.props.page}>
                    <div>
                        {this.props.name}
                    </div>

                    {
                        active &&
                        <div className="navitem_highlight" />
                    }
                </a>
            </>
        )
    }
}

export default withRouter(NavItem);
