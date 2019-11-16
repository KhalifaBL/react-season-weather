import React from 'react'
import './LoadingComponent.css'

const LoadingComponent = (props) => {
    return (
        <div className="ui segment loader-container">
            <div className="ui active inverted dimmer">
                <div className="ui text loader">{props.message}</div>
            </div>
            <p></p>
        </div>
    );
}
LoadingComponent.defaultProps = {
    message: 'Loading ...'
};
export default LoadingComponent;