import { Button } from '@material-ui/core';
import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import { Context as AuthenticationContext } from '../../context/AuthenticationContext';
import './Login.css'

function LoginFormWithContext (props) {
    const { signin } = useContext(AuthenticationContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);


    /**
     * Handles clicking on the 'sign in' button
     * @param {*} event 
     */
    const handleLogin = async (e) => {
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

                <form className="login-form">
                    <TextField
                        id="outlined-password-input"
                        className="login-form__field"
                        label="Email"
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <TextField className="input"
                        id="outlined-password-input"
                        className="login-form__field"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                    <div className="btn-container">
                        <Button
                            className="signin-btn"
                            variant="contained"
                            color="secondary" container
                            onClick={handleLogin}
                        >Sign in</Button>
                    </div>

                    {error && <p className="is-error center secondary">Your email or password is invalid. Please try again.</p>}
                </form>
            </div>
        </div>
    );
}

export default LoginFormWithContext;