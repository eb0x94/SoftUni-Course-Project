import React, { Component } from 'react';

export default class ShowPersonalMessagesView extends Component{
    render(){
        let personalMsgDiv = this.props.messages.map(msg =>
            <div key={msg._id} className="personal-single-message">
                <h3>{msg.title}</h3>
                <p>{msg.description}</p>
                <span>{this.getActions(msg)}</span>
            </div>);
        return(
            <div className="personal-messages-view">
                <h1>Your personal messages are shown below</h1>
                {personalMsgDiv}
            </div>
        );
    }

    getActions(message) {
            return (<span>
                    <input type="button" value="Edit"
                           onClick={this.props.editMessageClicked.bind(this, message._id)} />
                    &nbsp;
                    <input type="button" value="Delete"
                           onClick={this.props.deleteMessageClicked.bind(this, message._id)} />
                </span>
            );

    }
}