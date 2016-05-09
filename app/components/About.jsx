import React, {Component, PropTypes} from 'react'
import {Link} from 'react-router'

class About extends Component {
    render() {
        return (
            <div>
                <h1>{'About Page'}</h1>
                <ul>
                    <li><Link to="/">{'Home'}</Link></li>
                </ul>
            </div>
        )
    }
}

export default About
