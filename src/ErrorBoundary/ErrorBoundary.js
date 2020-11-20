import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class ErrorBoundary extends Component{
    state = {
        hasError: false
    };

    componentDidCatch() {
        this.setState({ hasError: true })
    }
    
    render(){
        
        if (this.state.hasError){
            return(
                <h2>Hmmm...something isn't quite right here...</h2>
            )
        }
        
        return this.props.children
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.element
}