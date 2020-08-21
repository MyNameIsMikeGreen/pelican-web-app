import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {

    status = setInterval(() =>  {fetch('http://192.168.5.101:8000/status')
        .then(response => response.json())
        .then(data => this.setState({ status: data.status }))
        .catch((error) => console.error(error));}, 1000);

    constructor(props) {
        super(props);
        this.state = {
            status: "NOT CONNECTED",
        };
    }

    render() {
        return (
            <>
                <h1>Status: {this.state.status}</h1>
                <ActionButton label={"ACTIVATE"} action={() => actionActivate()}/>
                <ActionButton label={"DEACTIVATE"} action={() => actionDeactivate()}/>
            </>
        );
    }
}

class ActionButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.action}>{this.props.label}</button>
        )
    }
}

function actionActivate() {
    alert("Activated!")
}

function actionDeactivate() {
    alert("Deactivated!")
}

// ========================================

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
