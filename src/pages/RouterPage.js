import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Link,
    Route,
    Switch
} from 'react-router-dom'
import HomePage from './HomePage'
import UserPage from './UserPage'


export default class RouterPage extends Component {
    render() {
        return (
            <div>
                <h3>RouterPage</h3>
                <Router>
                    <Link to="/">首页</Link>
                    <Link to="/user">用户中心</Link>

                    <Switch>
                        {/* Route渲染优先级：children>component>render。
                            这三种⽅式互斥，你只能⽤⼀种。 */}
                        <Route
                            exact
                            path="/"
                            component={HomePage}
                        // children={() => <div>children</div>}
                        // render={() => <div>render</div>}
                        />
                        <Route path="/user" component={UserPage} />
                        <Route component={EmptyPage} />
                    </Switch>
                </Router>
            </div>
        )
    }
}

class EmptyPage extends Component {
    render() {
        return (
            <div>
                <h3>EmptyPage-404</h3>
            </div>
        );
    }
}
