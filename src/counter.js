import { render } from '@testing-library/react';
import React from 'react';

export default class Counter extends React.Component {
    constructor(props) {
        super(props);

        // Events pt2, we remove the below (its state)
        
        // this.state = {
        //     name: props.name,
        //     count: 0
        // };
        
        // Below we are binding the method to our constructor
        this.handleClick = this.handleClick.bind(this);
    }

    // If we don't want to use the anonymous function (onClick below), we need to bind
    //  it or something.  So do the following:
    
    handleClick() {
        this.props.onClick(this.props.name);  // Replaced below
        // this.setState(state => ({count: state.count + 1}));
    }

    render() {
        return (
            <button 
                className="btn btn-primary"
                onClick={this.handleClick}>

                {/* Replaced the below code w/ this.handleClick         */}
                {/* {() => this.setState(state => ({count: state.count + 1}))}> */}

                {this.props.name} {this.props.count}  
            </button>
        );
    }    
}