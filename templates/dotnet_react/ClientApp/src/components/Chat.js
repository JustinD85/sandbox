import React, { Component } from 'react';
import { HubConnectionBuilder, LogLevel } from '@aspnet/signalr';

class Chat extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nick: '',
            message: '',
            messages: [],
            connection: null,
        };
    }

    sendMessage = e => {
        e && e.preventDefault();
        this.state.connection
            .invoke('SendMessage', this.state.nick, this.state.message)
            .catch(err => console.error(err));

        this.setState({ message: '' });
    };

    componentDidMount = () => {
        const nick = window.prompt('Your name:', 'Justin');

        const connection = new HubConnectionBuilder()
            .withUrl('/chat')
            .configureLogging(LogLevel.Information)
            .build()

        this.setState({ connection, nick }, () => {
            this.state.connection
                .start()
                .then(() => console.log('Connection started!'))
                .catch(err => console.log('Error while establishing connection :('));

            this.state.connection.on('ReceiveMessage', (nick, receivedMessage) => {
                const text = `${nick}: ${receivedMessage}`;
                const messages = this.state.messages.concat([text]);
                this.setState({ messages });
            });
        });
    }

    render() {
        return (
            <div>
                <br />
                <input
                    type="text"
                    value={this.state.message}
                    onKeyDown={e => e.key === 'Enter' && this.sendMessage()}
                    onChange={e => this.setState({ message: e.target.value })}
                />

                <button onClick={this.sendMessage}>Send</button>

                <div>
                    {this.state.messages.map((message, index) => (
                        <span style={{ display: 'block' }} key={index}> {message} </span>
                    ))}
                </div>
            </div>
        );
    }
}

export default Chat;