import React, { Component } from 'react';

import Header from './Header.jsx';
import SlackButton from './SlackButton.jsx';
import Fakts from './Fakts.jsx';
import Footer from './Footer.jsx';

let description = 'A slash command for random facts';

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="main">
                    <Header />
                    <div className="grid-centered">
                        <h2 className="tcenter desc pt0 mt0">
                            {description}
                        </h2>
                    </div>
                    <SlackButton />
                    <Fakts />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
