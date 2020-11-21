import React from 'react';
import './css/validationerror.css';

class ValidationError extends React.Component {
    render() {
        const message = 
        this.props.message && this.props.touched
            ? this.props.message
            : ''
        return (
            <div className='validation'>
                {message}
            </div>
        )
    }
}

export default ValidationError;