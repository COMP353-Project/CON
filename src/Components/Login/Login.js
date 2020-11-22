import { login } from "../../utils/JWTAuth";
import { Button } from '@material-ui/core';
import React from 'react';



function Login (props) {

    const initialState = {
        userInfo: {
            email: '',
            password: '',
        },
        errorMsg: '',
        successMsg: '',
    }

    const [logInState, setLoginState] = React.useState(initialState);


    const handleClick = async (event) => {
        let info = {
            email: "kenza@con.com",
            password: "password"
        }
        const data = await login(info);
        console.log(data)
        if (data) {
            setLoginState({
                ...initialState,
            });

        }
        else {
            setLoginState({
                ...logInState,
                successMsg: '',
                errorMsg: data.message
            })
        }
    }

    console.log(logInState);

    return (
        <div>
            <Button variant="contained" color="secondary" container style={{ size: 'large', backgroundColor: 'black', color: 'white' }} onClick={handleClick}>Sign in</Button>
        </div>
    );
}

export default Login;
