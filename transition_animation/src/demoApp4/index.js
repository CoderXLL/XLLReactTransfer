
/*
 * react-transition-group的第三次尝试
 * TransitionGroup diff机制做转场动画
 * */
import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    withRouter
} from 'react-router-dom';
import HomePage from '../page/home';
import SecondPage from '../page/second';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import './style.css';

const RouteModule = function (props) {
    return (
        <TransitionGroup style={{position: 'releative'}}>
            <CSSTransition
                //key为路由路径,因为使用高阶组件withRouter
                //所以会有location和history属性
                key={props.location.pathname}
                timeout={500}
                classNames={'app3'}
            >
                <Switch location={props.location}>
                    <Route exact path={'/'} component={HomePage} name={'首页'} />
                    <Route path={'/second'} component={SecondPage} name={'第二页'} />
                </Switch>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default class DemoApp3 extends React.Component {
    render() {
        const Routes = withRouter(RouteModule);
        return (
            <Router>
                <Routes />
            </Router>
        );
    }
}