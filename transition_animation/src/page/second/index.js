import React from 'react';
import './style.css';

export default class SecondPage extends React.Component {
    constructor(props) {
        super(props);
        this.handlePush = this.handlePush.bind(this);
        this.handlePop = this.handlePop.bind(this);
    }
    handlePush(event) {

    }
    handlePop(event) {
        this.props.history.goBack();
    }
    render() {
        return (
            <div className={'second-container'}>
                <h1 className={'second-title'}>当前为第二页</h1>
                <div>
                    <button
                        className='second-popBtn'
                        onClick={this.handlePop}
                    >点我pop
                    </button>
                    <button
                        className='second-pushBtn'
                        onClick={this.handlePush}
                    >点我push
                    </button>
                </div>
            </div>
        );
    }
}