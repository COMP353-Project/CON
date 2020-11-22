import { login } from "../../utils/JWTAuth";
import { Button } from '@material-ui/core';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import condo from '../../assets/condo.jpg'
import './Login.css';


function Login (props) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [active, setActive] = React.useState(false);
    const [success, setSuccessMessage] = React.useState("")
    const [error, setError] = React.useState(false);


    /**
     * Handles clicking on the 'sign in' button
     * @param {*} event 
     */
    const handleClick = async (event) => {
        event.preventDefault();

        let formData = {
            email: email,
            password: password
        }
        const data = await login(formData);
        console.log(data)
        if (data) {
            setActive(true);
            setError(false);
            setSuccessMessage(data.message);
        }
        else {
            setActive(false);
            setError(true);
        }
    }

    return (
        <div className="container">

            <img className="img" src={condo} slt="condo"></img>
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
                <Button
                    variant="contained"
                    color="secondary" container
                    style={{ size: 'large', backgroundColor: '#32a895', color: 'white' }}
                    onClick={handleClick}>Sign in</Button>
                {error && <p className="is-error">Your email or password is invalid. Please try again.</p>}
                {!error && <p className="is-success">{success}</p>}
            </form>
        </div>

    );
}

export default Login;
