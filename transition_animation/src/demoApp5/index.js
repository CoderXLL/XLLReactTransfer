
/*
 * react-transition-group的第四次尝试
 * 兼容push和pop效果
 **/
import React from 'react';
import './style.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    withRouter
} from 'react-router-dom';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import HomePage from '../page/home';
import SecondPage from '../page/second';

const RouteModule = function (props) {
    return (
        <TransitionGroup
            style={{position: 'releative'}}
            childFactory={child => React.cloneElement(
                  child,
                  {classNames: props.history.action === 'PUSH'?'app4-push':'app4-pop'}
            )}
        >
            <CSSTransition
                key={props.location.pathname}
                timeout={500}
                classNames={props.history.action === 'PUSH'?'app4-push':'app4-pop'}
            >
                <Switch location={props.location}>
                    <Route exact path={'/'} component={HomePage} name={'首页'} />
                    <Route path={'/second'} component={SecondPage} name={'第二页'} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default class DemoApp4 extends React.Component {
    render() {
        const Routes = withRouter(RouteModule);
        return (
            <Router>
                <Routes />
            </Router>
        );
    }
}