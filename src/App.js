import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import MyAccount from './Components/MyAccount/MyAccount';
import Email from './Components/Email/Email';
import Groups from './Components/Groups/Groups';
import CondoAssociation from './Components/CondoAssociation/CondoAssociation';
import Login from './Components/Login/Login';

function App () {
  return (
    <main>
      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/my-account" component={MyAccount} />
        <Route path="/email" component={Email}></Route>
        {/* <Route path="/group-home" component={GroupHome}></Route> */}
        <Route path="/condo-association" component={CondoAssociation}></Route>
        <Route path="/groups/:id" component={Groups}/>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </main>
  );
}

export default App;
