import React from 'react';
import ReactDOM from 'react-dom';
import SeasonsDisplay from './SeasonsDisplay'
import LoadingComponent from './LoadingComponent'

class App extends React.Component {
    state = { lat: null, errorMessage: '' }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })

        );
    }
    renderContent() {
        if (this.state.errorMessage !== '') {
            return <div>An error has occured</div>
        } else if ((this.state.errorMessage === '') && (!this.state.lat)) {
            return (<div>
                <LoadingComponent message="Please allow us location request" ></LoadingComponent> </div>);
        } else {
            return (<div>
                <SeasonsDisplay lat={this.state.lat} ></SeasonsDisplay>
            </div>);

        }
    }
    render() {

        return (
            <div>{this.renderContent()}</div>
        );

    }
}
ReactDOM.render(<App></App>, document.getElementById('root'));