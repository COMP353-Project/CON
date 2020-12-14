import React from 'react';
import { useParams } from 'react-router-dom';
import GroupsNav from './GroupsNav.js';
import MyGroupNav from './MyGroupNav.js';
import { Context as GroupsContext } from '../../context/GroupsContext.js';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import Typography from '@material-ui/core/Typography';

function GroupsHome () {
    const { fetchGroup, fetchGroupMembers } = React.useContext(GroupsContext);
    const { id } = useParams();
    const user_id = localStorage.getItem('userid');
    const [group, setGroup] = React.useState([]);
    const [members, setMembers] = React.useState([]);

    const getGroup = async () => {
        setGroup(await fetchGroup({ group_id: id, user_id }));
    }

    const getMembers = async () => {
        setMembers(await fetchGroupMembers(id))
    }

    React.useEffect(() => {
        getGroup();
        getMembers();
    }, []);

    const RenderGroupMembers = () => {
        if (members) {
            return members.map(({ first_name, last_name, created_at }) => {
                return (
                    <React.Fragment>
                        <List className='card'>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <ImageIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={
                                    <React.Fragment>
                                        <Typography>
                                            {first_name} {last_name}
                                        </Typography>
                                    </React.Fragment>
                                } secondary={
                                    <React.Fragment>
                                        <Typography>
                                            {created_at}
                                        </Typography>
                                    </React.Fragment>
                                } />
                            </ListItem>
                        </List>
                    </React.Fragment>
                );
            });
        }
        else {
            return (
                <div className="friend-empty">No groups!</div>
            );
        }
    }

    return (
        <div>
            <GroupsNav />
            <MyGroupNav />
            <div className="page-container">
                <div className="page-header hp">
                    <h1>{group.name}</h1>
                </div>
                <p className='card-description centered'>{group.description}</p>
                <h1>Members</h1>
                <div>
                    <RenderGroupMembers />
                </div>
            </div>
        </div>
    );
}

export default GroupsHome;
