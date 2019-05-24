
/**
 * 对react-transition-group的第一次尝试
 * CSSTransition管理单一组件
 */
import React from 'react';
import {CSSTransition} from 'react-transition-group';
import './style.css';
/*
 * 知识点
 * CSSTransition属性in为true时，其子组件会加上`${classNames}-enter`的类
 * 然后再下一个tick时，马上加上`${classNames}-enter-active`的类
 * 当in为false时，其组件会加上`${classNames}-exit`和`${classNames}-exit-active`类
 *
 * unmountOnExit为false的时候，其子组件exit后不会卸载，并添加`${classNames}-exit-done`类
 * 为true，子组件exit后会卸载
 * 这里我们直接卸载，省的其写done样式
 * */
export default class DemoApp1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
           show: true
        };
        this.handleSwitch = this.handleSwitch.bind(this);
    }
    handleSwitch() {
        this.setState({
            show: !this.state.show
        });
    }
    render() {
        return (
            <div className='app1-container'>
                <CSSTransition
                    in={this.state.show}
                    classNames='app1'
                    timeout={500}
                    unmountOnExit={true}
                >
                    <div className='app1-square' />
                </CSSTransition>
                <button
                    onClick={this.handleSwitch}
                    className='app1-btn'
                >切换
                </button>
            </div>
        );
    }
}