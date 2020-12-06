import { Button } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import condo from '../../assets/condo.jpg'
import './LoginForm.css';
import { Context as AuthenticationContext } from '../../context/AuthenticationContext';

function LoginFormWithContext (props) {
    const { signin } = useContext(AuthenticationContext);
    // const { isLoading, error } = state;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    /**
     * Handles clicking on the 'sign in' button
     * @param {*} event 
     */
    const handleClick = async (e) => {
        const data = await signin({ email: email, password: password });
        if (data) {
            setError(false);
            props.history.push('/condo-association');
        }
        else {
            setError(true);
        }
    }

    return (
        <div className="login-container">
          <div className="login-form-container">
            <h1 className="login-title">Login</h1>

            <form className="form">
                <TextField
                    id="outlined-password-input"
                    label="Email"
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField className="input"
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div>
                    <Button
                        className="signin-btn"
                        variant="contained"
                        color="secondary" container
                        onClick={handleClick}
                    >Sign in</Button>
                </div>

                {error && <p className="is-error">Your email or password is invalid. Please try again.</p>}
            </form>
          </div>
        </div>
    );
}

export default LoginFormWithContext;