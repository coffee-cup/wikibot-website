import React, { Component } from 'react';

import Avatar from '../assets/avatar.png';

class Header extends Component {
    render() {
        return (
            <header className="grid-12-centered tcenter">
                <div className="col-10_xs-12">
                    <img srcSet={Avatar} className="avatar" />
                    <h1 className="large mt2 mb1">/fakt</h1>
                </div>
            </header>
        );
    }
}

export default Header;
