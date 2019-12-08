import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import update from 'immutability-helper';
import Label from '../Atoms/Label';
import InputField from '../Atoms/InputField';
import Button from '../Atoms/Button';

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirm_password: ''
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
        fetch('http://localhost:8000/users', {
            method: 'POST',
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                email: this.state.email,
                password: this.state.password,
                //backend might need to add a confirm password field on the api
                confirm_password: this.state.confirm_password
            })
        })
        .then(response => response.json())
        .then(data => {
            this.props.history.push({
                pathname: '/LoginPage'
            });
        })
        .catch(err => {
            // feedback user creation failure error to user
            console.error(err);
        });
    }

    render() {
        return (
            <div>
                <section id="register" className="bg-light py-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 mx-auto">
                                <div className="card">
                                    <div className="card-header bg-primary text-white">
                                        <h4><i className="fas fa-user-plus"></i> Register</h4>
                                    </div>
                                    <div className="card-body">
                                        <form onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <Label HTMLfor="first_name">First Name</Label>
                                                <InputField
                                                name="first_name"
                                                onChange={this.updateState('first_name')}
                                                required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <Label HTMLfor="last_name">Last Name</Label>
                                                <InputField
                                                name="last_name"
                                                onChange={this.updateState('last_name')}
                                                required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <Label forHTML="email">Email</Label>
                                                <InputField
                                                type="email"
                                                name="email"
                                                onChange={this.updateState('email')}
                                                required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <Label forHTML="password">Password</Label>
                                                <InputField
                                                type="password"
                                                name="password"
                                                onChange={this.updateState('password')}
                                                required
                                                />
                                            </div>
                                            <div className="form-group">
                                                <Label forHTML="confirm_password">Confirm Password</Label>
                                                <InputField
                                                type="password"
                                                name="confirm_password"
                                                onChange={this.updateState('confirm_password')}
                                                required
                                                />
                                            </div>
                                            <Button value="Register">Register</Button>
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

export default withRouter(SignUpForm);