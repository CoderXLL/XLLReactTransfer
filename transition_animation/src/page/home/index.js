import React from 'react';
import './style.css';

export default class Home extends React.Component {
    constructor(props) {
        super(props);
        this.handlePush = this.handlePush.bind(this);
    }
    handlePush(event) {
        this.props.history.push('/second')
    }
    render() {
        return (
            <div className='home-container'>
                <h1 className='home-title'>home首页</h1>
                <div>
                    <button
                        className='home-btn'
                        onClick={this.handlePush}
                    >点我push
                    </button>
                </div>
            </div>
        );
    }
}