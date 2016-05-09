import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

import Avatar from '../assets/avatar.png';

class Header extends Component {
    render() {
        return (
            <header className="grid-12-centered tcenter">
                <div className="col-10_xs-12">
                    <img src={Avatar} className="avatar" />
                    <h1 className="large mt2">/fakt</h1>
                </div>
            </header>
        )
    }
}

export default Header
