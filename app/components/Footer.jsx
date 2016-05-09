import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <footer className="grid-12-centered mt0 mb0">
                <div className="col-10 pb0">
                    <p className="mt1 mb1">
                        {'Powered by '}
                        <a href="https://www.wikipedia.org/">{'Wikipedia'}</a>
                        {' | '}
                        {'Hosted on '}
                        <a href="https://beepboophq.com/">{'BeepBoop'}</a>
                    </p>
                </div>
            </footer>
        );
    }
}

export default Footer;
