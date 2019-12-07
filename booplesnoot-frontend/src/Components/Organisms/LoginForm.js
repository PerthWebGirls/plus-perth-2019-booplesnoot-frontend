import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import update from 'immutability-helper';
import InputField from '../Atoms/InputField';
import Button from '../Atoms/Button';
import Label from '../Atoms/Label';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.updateState = this.updateState.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateState(key) {
        return (event) => {
            this.setState(
                update(this.state, {[key]: {$set: event.target.value}})
            );
        }
    }

    handleSubmit(event) {
        //need full API url for login e.g. /sessions
        fetch('http://localhost:8000/auth/', {
            method: 'POST',
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(response => response.json())
        .then(data => {
            // store the token, probably in data.token or data.session.token (change local storage to data)
            localStorage.setItem('token', data.token);
            this.props.history.push({
                pathname: '/AccountPage'
            });
        })
        .catch(function(err) {
            // feedback login failure error to user
            console.error(err);
        });
    }

    render() {
        return (
            <div>
                <section id="login" className="bg-light py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="card">
                                    <div className="card-header bg-primary text-white">
                                        <h4><i className="fas fa-sign-in-alt"></i>Login</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <Label HTMLfor="username">Username</Label>
                                                <InputField
                                                    name="username"
                                                    onChange={this.updateState('username')}
                                                    required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <Label HTMLfor="password2">Password</Label>
                                                <InputField
                                                    type="password"
                                                    name="password"
                                                    onChange={this.updateState('password')}
                                                    required />
                                            </div>
                                            <Button>Login</Button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default withRouter(LoginForm);