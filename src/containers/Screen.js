import React, { Component } from 'react'
import { Cuadrante } from '../componentas'
import { Button } from 'semantic-ui-react'

class Screen extends Component {

    constructor() {
        super();
        this.state = { colors: ['Red', 'Blue', 'Green', 'Yellow'] };
        this.rotate = this.rotate.bind(this);
    }

    rotate() {
        const cores = this.state.colors;
        cores.unshift(cores.pop());
        this.setState({ colors: cores })
    }

    render() {

        return (
            <div className="container">
                <Cuadrante classname="cuadrante" color={this.state.colors[0]} />
                <Cuadrante classname="cuadrante" color={this.state.colors[1]} />

                <Cuadrante classname="cuadrante" color={this.state.colors[3]} />
                <Cuadrante classname="cuadrante" color={this.state.colors[2]} />

                <Button primary fluid inverted className="button" onClick={this.rotate.bind(this)}>Click to rotate colors</Button>
            </div>
        )
    }
}

export default Screen