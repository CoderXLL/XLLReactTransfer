
/*
 * react-transition-group的第二次尝试
 * TransitionGroup管理多个组件
 * */
import React from 'react';
import {
    CSSTransition,
    TransitionGroup
} from 'react-transition-group';
import './style.css';

/*
 * 可以看出使用TransitionGroup组件后，没有in属性了
 * 那怎么控制节点的enter和exit呢，这就是Group被称为Group的原因了
 * 我们知道react的虚拟dom有diff算法机制，这是FB工程师们对节点渲染的重大优化手段。而diff机制的判定是根据key
 * 属性进行区分的，所以在key不同的时候，旧节点exit，新节点enter
 * 利用这个点，我们就可以做出上一个页面exit，下个页面enter了
 * */
export default class DemoApp2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        };
        this.handleSwitch = this.handleSwitch.bind(this);
    }
    handleSwitch(event) {
        this.setState({
            number: this.state.number === 0?1:0
        });
    }
    render() {
        return (
            <div className='app2-container'>
                <TransitionGroup>
                    <CSSTransition
                        key={this.state.number}
                        timeout={5000}
                        classNames='app2'
                        unmountOnExit={true}
                    >
                        <div className='app2-square'>{this.state.number}</div>
                    </CSSTransition>
                </TransitionGroup>
                <button className='app2-btn' onClick={this.handleSwitch}>切换</button>
            </div>
        );
    }
}