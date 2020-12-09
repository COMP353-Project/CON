import React from 'react';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../../../Global/BackButton';
import Box from '../../../Global/Box';
import CondoNav from '../../CondoNav';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';

const GeneralMeeting = () => {
    const { id } = useParams();
    const [generalMeeting, setGeneralMeeting] = React.useState([]);
    const { fetchGeneralMeeting } = React.useContext(CondoAssociationContext);


    /**
      * Function that fetches a general meeting by id
      */
    const getGeneralMeeting = async () => {
        setGeneralMeeting(await fetchGeneralMeeting({ id }));
    };

    React.useEffect(() => {
        getGeneralMeeting();
    }, []);

    return (
        <>
            <CondoNav />
            <div className="page-container">
                <BackButton />
                <Box>
                    <div className="header-container">
                        <div className="card-info">
                            <h3 className="card-title">{generalMeeting.title}</h3>
                            <div className="card-date">{generalMeeting.created_at}</div>
                        </div>
                        <Link to={`/condo-association/meetings/${id}/edit`}>
                            <div className="details-button">Edit</div>
                        </Link>
                    </div>
                    <div className="card-description">
                        {generalMeeting.description}
                    </div>
                    <div className="card-description">
                        <h3>Agenda:</h3>
                        {generalMeeting.agenda}
                    </div>
                    <div className="card-description">
                        <h3>Resolution:</h3>
                        {generalMeeting.resolution}
                    </div>
                </Box>
            </div>
        </>
    );
}

export default GeneralMeeting;