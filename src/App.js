import './App.css';
import NavBar from './components/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home/Home';
import MyAccount from './components/MyAccount/MyAccount';
import Email from './components/Email/Email';
import Groups from './components/Groups/Groups';
import CondoAssociation from './components/CondoAssociation/CondoAssociation';
import Login from './components/Login/Login';

function App () {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/my-account" component={MyAccount} />
        <Route path="/email" component={Email}></Route>
        <Route path="/groups" component={Groups}></Route>
        <Route path="/condo-association" component={CondoAssociation}></Route>
        <Route path="/login" component={Login}></Route>

      </Switch>
    </main>
  );
}

export default App;
