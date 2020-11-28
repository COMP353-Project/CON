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
import AdminHome from './Components/AdminDashboard/AdminHome';
import AdminUsers from './Components/AdminDashboard/AdminUsers';
import AdminPost from './Components/AdminDashboard/AdminPost';
import AdminGroups from './Components/AdminDashboard/AdminGroups';
import AdminCA from './Components/AdminDashboard/AdminCA';

function App () {
  return (
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
        <Route path="/admin" component={AdminHome} exact/>        
        <Route path="/admin/users" component={AdminUsers} exact/>
        <Route path="/admin/groups" component={AdminGroups} exact/>
        <Route path="/admin/ca" component={AdminCA} exact/>
        <Route path="/admin/post" component={AdminPost} exact/>
      </Switch>
    </main>
  );
}

export default App;
