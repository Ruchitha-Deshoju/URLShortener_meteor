import React, { Component } from 'react';

class LinkCreate extends Component {
    constructor(props) {
        super(props);
        this.state = { error: '' };
    }
    handleSubmit(event) {
        event.preventDefault(); //prevent senting http request sending
        Meteor.call('links.insert', this.refs.input.value, (error) => {
            if (error) {
                this.setState({error: 'Enter a valid URL'});
            } else {
                this.setState({error: ''});
                this.refs.input.value = '';
            }
        });
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="form-group">
                    <label>Link to shorten</label>
                    <input className="form-control" ref="input" />
                </div>
                <div className="text-danger">{this.state.error}</div>
                <button className="btn btn-primary">Shorten!</button>
            </form>
        );
    }
}

export default LinkCreate;
