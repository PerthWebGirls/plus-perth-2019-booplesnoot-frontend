import React, { Component } from 'react';
import InputField from '../Atoms/InputField';
import Button from '../Atoms/Button';
import Label from '../Atoms/Label';

class LoginForm extends Component {
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
                                        <form action="index.html">
                                            <div className="form-group">
                                                <Label HTMLfor="username">Username</Label>
                                                <InputField name="username" required/>
                                            </div>
                                            <div className="form-group">
                                                <Label HTMLfor="password2">Password</Label>
                                                <InputField type="password" name="password" required />
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

export default LoginForm;