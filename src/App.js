import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import UserProfile from './pages/UserProfile';
import NavBar from './pages/component/NavBar';
import BusinessProfile from './pages/BusinessProfile';
import Subscription from './pages/Subscription';
import Security from './pages/Security';
import store from './reduxboilerplate/Store';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <React.Fragment>
                    <Router>
                        <React.Fragment>
                            <NavBar />
                            <Switch>
                                <Route path="/" exact component={Login} />
                                <Route path="/userprofile" component={UserProfile} />
                                <Route path="/businessprofile" component={BusinessProfile} />
                                <Route path="/subscription" component={Subscription} />
                                <Route path="/security" component={Security} />
                            </Switch>
                        </React.Fragment>
                    </Router>
                </React.Fragment>
            </Provider>
        )
    }
}
export default App;