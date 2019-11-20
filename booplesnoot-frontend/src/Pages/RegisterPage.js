import React from 'react';
import PageTemplate from '../Components/Templates/PageTemplate';
import { SignUpForm } from '../Components/Organisms/SignUpForm';

const RegisterPage = () => {
    return (
        <div>
            <PageTemplate>
                <SignUpForm/>  
            </PageTemplate>         
        </div>
    )
}

export default RegisterPage;