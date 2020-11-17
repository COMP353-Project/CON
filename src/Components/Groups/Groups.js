import { Button } from '@material-ui/core';
import axios from 'axios';
import React from 'react';

function Groups () {

    const [dataSent, setDataSent] = React.useState(false);
    const data = {
        id: 3,
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
    return (
        <div>
            <p>Groups page</p>
            <Button onClick={handleClick}>Click me!</Button>
        </div>

    );
}

export default Groups;
