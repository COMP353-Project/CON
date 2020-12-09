import React from 'react';
import { Link, useParams } from 'react-router-dom';
import BackButton from '../../../Global/BackButton';
import Box from '../../../Global/Box';
import CondoNav from '../../CondoNav';
import { Context as CondoAssociationContext } from '../../../../context/CondoAssociationContext';

const AdminMeeting = () => {
    const { id } = useParams();
    const [adminMeeting, setAdminMeeting] = React.useState([]);
    const { fetchAdminMeeting } = React.useContext(CondoAssociationContext);

    /**
      * Function that fetches a admin meeting by id
      */
    const getAdminMeeting = async () => {
        setAdminMeeting(await fetchAdminMeeting({ id }));
        console.log(adminMeeting);
    };

    React.useEffect(() => {
        getAdminMeeting();
    }, []);

    return (
        <>
            <CondoNav />
            <div className="page-container">
                <BackButton />
                <Box>
                    <div className="header-container">
                        <div className="card-info">
                            <h3 className="card-title">{adminMeeting.title}</h3>
                            <div className="card-date">{adminMeeting.created_at}</div>
                        </div>
                        <Link to={`/condo-association/meetings/${id}/edit`}>
                            <div className="details-button">Edit</div>
                        </Link>
                    </div>
                    <div className="card-description">
                        {adminMeeting.description}
                    </div>
                    <div className="card-description">
                        <h3>Agenda:</h3>
                        {adminMeeting.agenda}
                    </div>
                    <div className="card-description">
                        <h3>Minutes:</h3>
                        {adminMeeting.minutes}
                    </div>
                </Box>
            </div>
        </>
    );
}

export default AdminMeeting;