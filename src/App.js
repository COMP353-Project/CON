import './App.css';
import { Route, Switch } from 'react-router-dom';
import '../src/css/GlobalStyles.css';
import NavBar from './Components/NavBar/NavBar';
import GroupsHome from './Components/Groups/GroupsHome'
import GroupsRequests from './Components/Groups/GroupsRequests'
import PublicHomepage from './Components/Home/PublicHomePage';
import PrivateHomepage from './Components/Home/PrivateHomePage';
import MyAccount from './Components/MyAccount/MyAccount';
import Email from './Components/Email/Email';
import Groups from './Components/Groups/Groups';
import AllGroups from './Components/Groups/AllGroups'
import MyGroups from './Components/Groups/MyGroups'
import Login from './Components/Login/Login';
import AdminUsers from './Components/AdminDashboard/AdminUsers';
import AdminPost from './Components/AdminDashboard/AdminPost';
import AdminGroups from './Components/AdminDashboard/AdminGroups';
import AdminCA from './Components/AdminDashboard/AdminCA';
import Discussions from './Components/CondoAssociation/Discussions/pages/Discussions';
import PostDiscussion from './Components/CondoAssociation/Discussions/components/DiscussionForm';
import Discussion from './Components/CondoAssociation/Discussions/pages/Discussion';
import EditDiscussion from './Components/CondoAssociation/Discussions/pages/EditDiscussion';
import Ads from './Components/CondoAssociation/Ads/pages/Ads';
import PostAd from './Components/CondoAssociation/Ads/pages/PostAd';
import Ad from './Components/CondoAssociation/Ads/pages/Ad';
import EditAd from './Components/CondoAssociation/Ads/pages/EditAd';
import CondoMeetings from './Components/CondoAssociation/Meetings/pages/Meetings';
import PostMeeting from './Components/CondoAssociation/Meetings/pages/PostMeeting';
import EditMeeting from './Components/CondoAssociation/Meetings/pages/EditMeeting';
import GeneralMeeting from './Components/CondoAssociation/Meetings/pages/GeneralMeeting';
import AdminMeeting from './Components/CondoAssociation/Meetings/pages/AdminMeeting';
import CondoVotes from './Components/CondoAssociation/Votes/pages/Votes';
import Vote from './Components/CondoAssociation/Votes/pages/Vote';
import PostVote from './Components/CondoAssociation/Votes/pages/PostVote';
import EditVote from './Components/CondoAssociation/Votes/pages/EditVote';

// Importing Providers
import { Provider as AccountProvider } from './context/AccountContext';
import { Provider as AuthenticationProvider } from './context/AuthenticationContext';
import { Provider as CondoAssociationProvider } from './context/CondoAssociationContext';
import { Provider as EmailProvider } from './context/EmailContext';
import { Provider as GroupsProvider } from './context/GroupsContext';
import { Provider as AdminProvider } from './context/AdminContext';

function App () {

  return (
    <AdminProvider>
      <AuthenticationProvider>
        <AccountProvider>
          <CondoAssociationProvider>
            <EmailProvider>
              <GroupsProvider>
                <main>
                  <NavBar />
                  <Switch>
                    <Route path="/" component={PublicHomepage} exact />
                    <Route path="/home" component={PrivateHomepage} exact />
                    <Route path="/my-account" component={MyAccount} />
                    <Route path="/email" component={Email}></Route>
                    <Route path="/login" component={Login} exact></Route>

                    {/* Group routes */}
                    <Route path="/groups/:id/home" component={GroupsHome} exact />
                    <Route path="/groups/:id/posts" component={Groups} exact />
                    <Route path="/groups/:id/requests" component={GroupsRequests} exact />
                    <Route path="/groups/my-groups" component={MyGroups} exact></Route>
                    <Route path="/groups/all-groups" component={AllGroups} exact />

                    {/* Admin routes */}
                    <Route path="/admin/users" component={AdminUsers} exact />
                    <Route path="/admin/groups" component={AdminGroups} exact />
                    <Route path="/admin/ca" component={AdminCA} exact />
                    <Route path="/admin/post" component={AdminPost} exact />

                    {/* Condo association routes */}
                    <Route path="/condo-association/discussions/new" component={PostDiscussion} exact />
                    <Route path="/condo-association/discussions/:id/edit" component={EditDiscussion} exact />
                    <Route path="/condo-association/discussions/:id" component={Discussion} exact />
                    <Route path="/condo-association/discussions" component={Discussions} exact />

                    <Route path="/condo-association/ads/new" component={PostAd} />
                    <Route path="/condo-association/ads/:condo_assoc_post_id/edit" component={EditAd} />
                    <Route path="/condo-association/ads/:condo_assoc_post_id" component={Ad} />
                    <Route path="/condo-association/ads" component={Ads} />

                    <Route path="/condo-association/meetings" component={CondoMeetings} exact />
                    <Route path="/condo-association/meetings/new" component={PostMeeting} />

                    <Route path="/condo-association/meetings-admin/:id" component={AdminMeeting} exact />
                    <Route path="/condo-association/meetings-general/:id" component={GeneralMeeting} exact />
                    <Route path="/condo-association/meetings/:id/edit" component={EditMeeting} />

                    <Route path="/condo-association/votes" component={CondoVotes} exact />
                    <Route path="/condo-association/votes/new" component={PostVote} />
                    <Route path="/condo-association/votes/:id" component={Vote} exact />
                    <Route path="/condo-association/votes/:id/edit" component={EditVote} />

                    <Route path="/condo-association/votes" component={CondoVotes} exact />

                  </Switch>
                </main>
              </GroupsProvider>
            </EmailProvider>
          </CondoAssociationProvider>
        </AccountProvider>
      </AuthenticationProvider>
    </AdminProvider>
  );
}

export default App;
