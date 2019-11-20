import React, { Component } from 'react';
import PageTemplate from '../Components/Templates/PageTemplate';
import LoginForm from '../Components/Organisms/LoginForm';

class LoginPage extends Component {
    render() {
        return (
            <div>
                <PageTemplate>
                    <LoginForm/>
                </PageTemplate>
            </div>
        )
    }
}

export default LoginPage;