import React, { Component } from 'react';
import RectDOM from 'react-dom';
import './index.less';

class Confirm extends Component {
    render() {
        let cb = () => {};
        let { msg = '确定删除吗?', onOk, onCancel } = this.props;
        return (
            <div className="r-confirm">
                <div className="content">
                    <div className="title">{msg}</div>
                    <div className="btns">
                        <button className="btn" onClick={onOk}>确定</button>
                        <button className="btn" onClick={onCancel}>取消</button>
                    </div>
                </div>
            </div>
        );
    }
}

let node;
export default msg => {
    const hide = () => {
        RectDOM.unmountComponentAtNode(node);
        document.body.removeChild(node);
    }
    return new Promise((reslove, reject) => {
        node = document.createElement('div');
        document.body.appendChild(node);
        RectDOM.render(
        <Confirm msg={msg} onOk={e => {
            hide();
            reslove(true);
        }} onCancel={e => {
            hide();
            reslove(false);
        }}/>, node);
    })
}