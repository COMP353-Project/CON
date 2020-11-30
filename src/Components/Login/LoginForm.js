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
    const handleClick = async () => {
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
        <div className="container">

            <img className="img" src={condo} alt="condo"></img>
            <div className="container2">
                <h1 className="title">CON System</h1>
            </div>

            <form className="form">
                <TextField
                    id="outlined-password-input"
                    label="Email"
                    type="email"
                    variant="outlined"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                <TextField className="input"
                    id="outlined-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="outlined"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                <div>
                    <Button
                        variant="contained"
                        color="secondary" container
                        style={{ size: 'large', backgroundColor: '#32a895', color: 'white' }}
                        onClick={handleClick}
                    >Sign in</Button>
                </div>

                {error && <p className="is-error">Your email or password is invalid. Please try again.</p>}
            </form>
        </div>

    );
}

export default LoginFormWithContext;