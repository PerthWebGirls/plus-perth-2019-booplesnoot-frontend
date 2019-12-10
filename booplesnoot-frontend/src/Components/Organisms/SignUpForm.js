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
            username: '',
            email: '',
            password1: '',
            password2: '',
            errors: {}
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
        fetch('http://localhost:8000/api/register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                username: this.state.username,
                email: this.state.email,
                password1: this.state.password1,
                password2: this.state.password2
            })
        })
        .then(response => {
            response.json().then(data => {
                if (response.status === 422) {
                    this.setState({
                        errors: data.errors
                    });
                } else {
                    this.props.history.push({
                        pathname: '/LoginPage'
                    });
                }
            })
        })
        .catch(function(err) {
            // feedback login failure error to user
            console.error(err);
        });

        event.preventDefault();
    }


    render() {
        let {errors} = this.state;
        let errorMessages = {};

        Object.keys(errors).map(field => (
            errorMessages[field] = <ul className="errors">
                {errors[field].map(error => (
                    <li>{error}</li>
                ))}
            </ul>
        ));

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
                                                {errorMessages['first_name']}
                                            </div>
                                            <div className="form-group">
                                                <Label HTMLfor="last_name">Last Name</Label>
                                                <InputField
                                                name="last_name"
                                                onChange={this.updateState('last_name')}
                                                required
                                                />
                                                {errorMessages['last_name']}
                                            <div className="form-group">
                                                <Label HTMLfor="username">username</Label>
                                                <InputField
                                                name="username"
                                                onChange={this.updateState('username')}
                                                required
                                                />
                                                {errorMessages['username']}
                                            </div>
                                            </div>
                                            <div className="form-group">
                                                <Label forHTML="email">Email</Label>
                                                <InputField
                                                type="email"
                                                name="email"
                                                onChange={this.updateState('email')}
                                                required
                                                />
                                                {errorMessages['email']}
                                            </div>
                                            <div className="form-group">
                                                <Label forHTML="password1">Password</Label>
                                                <InputField
                                                type="password"
                                                name="password1"
                                                onChange={this.updateState('password1')}
                                                required
                                                />
                                                {errorMessages['password1']}
                                            </div>
                                            <div className="form-group">
                                                <Label forHTML="password2">Confirm Password</Label>
                                                <InputField
                                                type="password"
                                                name="password2"
                                                onChange={this.updateState('password2')}
                                                required
                                                />
                                                {errorMessages['password2']}
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
