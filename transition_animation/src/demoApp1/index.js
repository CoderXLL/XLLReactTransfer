import React from 'react';
import {
    //以html5提供的history api形式实现的路由
    //一般其作为项目的原始组件进行包裹
    BrowserRouter as Router,
    //路由组件，path指定匹配的路由，component指定路由匹配时展示的组件
    Route,
    //Route组件包裹器
    Switch,
    //一个高阶组件,为组件提供location，history等对象
    withRouter
} from 'react-router-dom';
//自定义HomePage组件
import HomePage from '../page/home';
//自定义SecondPage组件
import SecondPage from '../page/second';

const RouteModule = function (props) {
    return (
        <Switch location={props.location}>
            <Route exact path={'/'} component={HomePage} name={'首页'} />
            <Route path={'/second'} component={SecondPage} name={'第二页'} />
        </Switch>
    );
};

export default class DemoApp5 extends React.Component {
    render() {
        const Routes = withRouter(RouteModule);
        return (
            <Router>
                <Routes />
            </Router>
        );
    }
}