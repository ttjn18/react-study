import React, { Component } from 'react';
import RectDOM from 'react-dom';
import './index.less';

class Confirm extends Component {
    render() {
        let cb = () => {};
        // let { conf: {onOk = cb, onCancel = cb, title = '标题'} } = this.props;
        let { msg = '确定删除吗?' } = this.props;
        return (
            <div className="r-confirm">
                <div className="content">
                    <div className="title">{msg}</div>
                    <div className="btns">
                        <button className="btn" onClick = {() => {
                            
                        }}>确定</button>
                        <button className="btn" onClick = {() => {
                            
                        }}>取消</button>
                    </div>
                </div>
            </div>
        );
    }
}

let node;
export default msg => {
    return new Promise((reslove, reject) => {
        node = document.createElement('div');
        document.body.appendChild(node);
        RectDOM.render(<Confirm msg={msg}/>, node);
    })
}