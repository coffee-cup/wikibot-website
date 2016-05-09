import React, { Component } from 'react';

let didYou = 'Did you know...';

class Fakts extends Component {
    constructor() {
        super();
        this.state = {
            fact: '',
        };
    }

    componentDidMount() {
        this.setState({
            fact: 'fuck',
        });
    }

    newFact() {
        this.setState({
            fact: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        });
        // WikiFakt.getRandomFact().then((fact) => {
        //     this.setState({
        //         fact,
        //     });
        // });
    }

    render() {
        return (
            <div className="fakts grid">
                <div className="col-12">
                    <div className="grid-centered">
                        <h2 ref="didYou" className="did-you-know col-6_sm-8_xs-10">
                            {didYou}
                        </h2>
                    </div>
                </div>
                <div className="col-12">
                    <div className="grid-centered">
                        <p className="fact col-6_sm-8_xs-10">
                            {this.state.fact}
                        </p>
                    </div>
                </div>
                <div className="col-12">
                    <div className="grid-centered">
                        <div className="col-4">
                            <a onClick={this.newFact.bind(this)} className="new-fact button none">New Fact!</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Fakts;
