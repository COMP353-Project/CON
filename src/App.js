import './App.css';
import { Route, Switch } from 'react-router-dom';
import NavBar from './Components/NavBar/NavBar';
import GroupHome from './Components/Groups/GroupHome';
import Home from './Components/Home/Home';
import MyAccount from './Components/MyAccount/MyAccount';
import Email from './Components/Email/Email';
import Groups from './Components/Groups/Groups';
import CondoAssociation from './Components/CondoAssociation/CondoAssociation';
import Login from './Components/Login/Login';

// Importing Providers
import { Provider as AccountProvider } from './context/AccountContext';
import { Provider as AuthenticationProvider } from './context/AuthenticationContext';
import { Provider as CondoAssociationProvider } from './context/CondoAssociationContext';
import { Provider as EmailProvider } from './context/EmailContext';
import { Provider as GroupsProvider } from './context/GroupsContext';

function App () {
  return (
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
  );
}

export default App;
