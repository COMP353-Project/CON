import { Button } from '@material-ui/core';
import axios from 'axios';
import React from 'react';

function Groups () {

    const [dataSent, setDataSent] = React.useState(false);
    const data = {
        name: 'example',
        email: 'example@example.com',
        feedback: 'hey! this is my feedback'
    }

    const handleClick = () => {
        axios({
            method: 'post',
            url: 'http://localhost/con/CON/api/example.php',
            headers: {
                'content-type': 'application/json'
            },
            data: data
        })
            .then(result => {
                console.log(result.data)
                setDataSent(result.data.sent)
                console.log(dataSent)
                console.log('hey im here!')
            })
            .catch(error => setDataSent({
                error: error.message
            }));
    }

    React.useEffect(() => {
        handleClick();
    });

    return (
        <div>
            <div style={{ padding: 100 }}>
                <h1>Groups page</h1>

                <Button variant="contained" color="secondary" container style={{ size: 'large', backgroundColor: 'black', color: 'white' }} onClick={handleClick}>Click me!</Button>
            </div>
        </div>

    );
}

export default Groups;
