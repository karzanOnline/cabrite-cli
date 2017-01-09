/**
 * Created by caozheng on 2017/1/4.
 */
import * as React from 'react';
import * as ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouter from './router';
import entryStores from './stores/entryStores';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { browserHistory } from 'react-router';
//公共js

interface RootPropsType {

}

const history = syncHistoryWithStore(browserHistory, entryStores, {
    selectLocationState(state) {
        return state.get('routing');
    },
});

class Root extends React.Component<RootPropsType, any> {
    render() {
        return (
            <Provider store={entryStores}>
                <AppRouter history={history} />
            </Provider>
        );
    }

}
ReactDOM.render(<Root />, document.getElementById('wrapper'));