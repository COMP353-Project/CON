import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import MyAccount from './Components/MyAccount/MyAccount';
import Email from './Components/Email/Email';
import Groups from './Components/Groups/Groups';
import CondoAssociation from './Components/CondoAssociation/CondoAssociation';

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

      </Switch>
    </main>

  );
}

export default App;
