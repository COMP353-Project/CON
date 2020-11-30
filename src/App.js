import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import GroupHome from './Components/Groups/GroupHome';
import Home from './Components/Home/Home';
import MyAccount from './Components/MyAccount/MyAccount';
import Email from './Components/Email/Email';
import Groups from './Components/Groups/Groups';
import Login from './Components/Login/Login';
import AdminHome from './Components/AdminDashboard/AdminHome';
import AdminUsers from './Components/AdminDashboard/AdminUsers';
import AdminPost from './Components/AdminDashboard/AdminPost';
import AdminGroups from './Components/AdminDashboard/AdminGroups';
import AdminCA from './Components/AdminDashboard/AdminCA';
import CondoHome from './Components/CondoAssociation/CondoHome';
import CondoAds from './Components/CondoAssociation/CondoAds';
import CondoDiscussions from './Components/CondoAssociation/CondoDiscussions';
import CondoMeetings from './Components/CondoAssociation/CondoMeetings';
import CondoVotes from './Components/CondoAssociation/CondoVotes';

// Importing Providers
import { Provider as AccountProvider } from './context/AccountContext';
import { Provider as AuthenticationProvider } from './context/AuthenticationContext';
import { Provider as CondoAssociationProvider } from './context/CondoAssociationContext';
import { Provider as EmailProvider } from './context/EmailContext';
import { Provider as GroupsProvider } from './context/GroupsContext';

function App () {
  return (
<<<<<<< HEAD
    <main>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/my-account" component={MyAccount} />
        <Route path="/email" component={Email}></Route>
        <Route path="/group-home" component={GroupHome}></Route>
        <Route path="/groups/:id" component={Groups}/>
        <Route path="/login" component={Login}></Route>
        <Route path="/admin" component={AdminHome} exact/>        
        <Route path="/admin/users" component={AdminUsers} exact/>
        <Route path="/admin/groups" component={AdminGroups} exact/>
        <Route path="/admin/ca" component={AdminCA} exact/>
        <Route path="/admin/post" component={AdminPost} exact/>
        <Route path="/condo-association" component={CondoHome} exact/>        
        <Route path="/condo-association/discussions" component={CondoDiscussions} exact/>
        <Route path="/condo-association/ads" component={CondoAds} exact/>
        <Route path="/condo-association/meetings" component={CondoMeetings} exact/>
        <Route path="/condo-association/votes" component={CondoVotes} exact/>
      </Switch>
    </main>
=======
    <AuthenticationProvider>
      <AccountProvider>
        <CondoAssociationProvider>
          <EmailProvider>
            <GroupsProvider>
              <main>
                <NavBar />
                <Switch>
                  <Route path="/" component={Home} exact />
                  <Route path="/my-account" component={MyAccount} />
                  <Route path="/email" component={Email}></Route>
                  <Route path="/group-home" component={GroupHome}></Route>
                  <Route path="/condo-association" component={CondoAssociation}></Route>
                  <Route path="/groups/:id" component={Groups}/>
                  <Route path="/login" component={Login}></Route>

                </Switch>
              </main>
            </GroupsProvider>
          </EmailProvider>
        </CondoAssociationProvider>
      </AccountProvider>
    </AuthenticationProvider>
>>>>>>> state-management
  );
}

export default App;
