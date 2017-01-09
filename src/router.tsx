/**
 * Created by caozheng on 2017/1/4.
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';
import MainPage from "./js/mainPage";

interface AppRouterType {
    history ?: any
}


class AppRouter extends React.Component<AppRouterType, any> {
    constructor (props: any) {
        super(props);
    }

    render() {
        const history = this.props && this.props.history;
        const routerProps = {
            component: MainPage,
            ignoreScrollBehavior: true
        };
        return(
            <Router history={history}>
                <Route path="/index" {...this.props} {...routerProps}>
                    <IndexRoute component={MainPage}/>
                    {/*<Route path="square" component={PostIndex} title="广场"/>*/}
                </Route>
            </Router>
        )
    }
}

function mapStateToProps() {
    return {
        routerState : ''
    }
}
export default connect(mapStateToProps)(AppRouter)
