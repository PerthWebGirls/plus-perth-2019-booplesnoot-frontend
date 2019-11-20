import React from 'react';
import Label from '../Atoms/Label';
import InputField from '../Atoms/InputField';
import Button from '../Atoms/Button';

export const SignUpForm = () => {
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
                                    <form action="index.html">
                                        <div className="form-group">
                                            <Label HTMLfor="first_name">First Name</Label>
                                            <InputField                                      
                                            name="first_name"                                        
                                            required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <Label HTMLfor="last_name">Last Name</Label>
                                            <InputField
                                            name="last_name"                                        
                                            required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <Label HTMLfor="username">Username</Label>
                                            <InputField                                       
                                            name="username"                                        
                                            required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <Label forHTML="email">Email</Label>
                                            <InputField
                                            type="email"
                                            name="email"                                        
                                            required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <Label forHTML="password2">Password</Label>
                                            <InputField
                                            type="password"
                                            name="password"                                        
                                            required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <Label forHTML="password">Confirm Password</Label>
                                            <InputField
                                            type="password"
                                            name="password2"                                        
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

export default SignUpForm;