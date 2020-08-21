import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const HOST = 'http://192.168.5.101:8000';   // TODO: Variable host
const STATUS_ENDPOINT = HOST + '/status';
const ACTIVATE_ENDPOINT = HOST + '/actions/activate';
const DEACTIVATE_ENDPOINT = HOST + '/actions/deactivate';
const RESCAN_ENDPOINT = HOST + '/actions/rescan';

class Main extends React.Component {

    status = setInterval(() =>  {fetch(STATUS_ENDPOINT)
        .then(response => response.json())
        .then(data => this.setState({ status: data.status }))
        .catch((error) => console.error(error));}, 1000);

    constructor(props) {
        super(props);
        this.state = {
            status: "NOT CONNECTED",
        };
    }

    render() {  // TODO: Deactivate buttons based on status
        return (
            <>
                <h1>Status: {this.state.status}</h1>
                <br />
                <ActionButton label={"ACTIVATE"} action={() => actionActivate()}/>
                <br />
                <ActionButton label={"DEACTIVATE"} action={() => actionDeactivate()}/>
                <br />
                <ActionButton label={"RESCAN"} action={() => actionRescan()}/>
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
    executeAndLogGetRequest(ACTIVATE_ENDPOINT + '?timeout_seconds=600'); // TODO: Variable timeout
}

function actionDeactivate() {
    executeAndLogGetRequest(DEACTIVATE_ENDPOINT);
}

function actionRescan() {
    executeAndLogGetRequest(RESCAN_ENDPOINT);
}

function executeAndLogGetRequest(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.error(error));
}

// ========================================

ReactDOM.render(
    <Main />,
    document.getElementById('root')
);
