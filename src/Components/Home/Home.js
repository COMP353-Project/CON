import React from 'react';
import condo from '../../assets/condo.jpg'
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './Home.css';

function Home (props) {
    return (
        <div className="main-container" >
            <img className="img" src={condo} slt="condo"></img>

            <div className="container2">
                <h1 className="title">CON System</h1>

            </div>

            <div className="button-container">
                <Button
                    variant="contained"
                    color="secondary" container
                    style={{ size: 'large', backgroundColor: '#32a895', height: '55px', width: '200px' }}
                    component={Link} to='/login'
                >Sign as admin</Button>

                <Button
                    variant="contained"
                    color="secondary" container
                    style={{ size: 'large', backgroundColor: '#32a895', color: 'white', height: '55px', width: '200px' }}
                    component={Link} to='/login'
                >Sign in as member</Button>

            </div>


        </div>
    );
}

export default Home;