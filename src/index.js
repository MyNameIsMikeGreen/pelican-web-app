import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Main extends React.Component {
    render() {
        return (
            <>
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
