import React, {useState} from 'react'

import {Jumbotron} from 'react-bootstrap'
import LoginForm from '../../components/login/Login'
import ResetPassword from '../../components/login/PasswordReset'

import './Entry.style.css'

const Entry = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [formLoad, setFormLoad] = useState('login')


    const handleOnChange =(e) => {
        const {name, value} = e.target

        switch (name) {
            case 'email':
                setEmail(value)
                break;

            case 'password':
                setPassword(value)
                break;
        
            default:
                break;
        }
    }

    const handleOnSubmit = (e) => {
        e.preventDefault();

        if(!email || !password){
            return alert("Fill up the all form ")
        }
        console.log(email, password)
    }


    const handleOnResetSubmit = (e) => {
        e.preventDefault();

        if(!email){
            return alert("Fill up the all form ")
        }
        console.log(email, password)
    }

    const formSwitcher = (frmTypes) => {
        setFormLoad(frmTypes)
    }


    return (
        <div className="entry-page bg-info">
            <Jumbotron className="form-box">
                {formLoad === 'login' && (
                <LoginForm 
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                formSwitcher={formSwitcher}
                email={email}
                password={password}
                />
                )}
            </Jumbotron>
            <Jumbotron className="form-box">
                {formLoad === 'reset' && ( 
                <ResetPassword
                    handleOnChange={handleOnChange}
                    handleOnSubmit={handleOnSubmit}
                    handleOnResetSubmit={handleOnResetSubmit}
                    email={email}
                    />
                )}
            </Jumbotron>
        </div>
    )
}
export default Entry