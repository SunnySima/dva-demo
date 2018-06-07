
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.css';


export default class Dialog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isVisiable: props.isVisiable
        }
    }

    componentDidMount() {
        this.toggelBackLayer();
    }

    handleOk() {
        const { onOk } = this.props;
        this.toggleDialog(onOk);
    }

    handleCancel() {
        const { onCancel } = this.props;
        this.toggleDialog(onCancel);
    }

    /**
     * 切换显示弹出框
     * @param {回调函数} callback 
     */
    toggleDialog(callback) {
        const { isVisiable } = this.state;
        this.setState({
            isVisiable: !isVisiable
        }, () => {
            this.toggelBackLayer();
            callback && callback();
        })
    }

    /**
     * 弹出框显示时蒙层显示
     * 弹出框隐藏时蒙层隐藏
     */
    toggelBackLayer() {
        if (this.state.isVisiable) {
            document.querySelector('#back-layer').style.display = 'block';
        } else {
            document.querySelector('#back-layer').style.display = 'none';
        }
    }

    render() {
        const { isVisiable } = this.state;
        const { title, text, okText, cancelText } = this.props;
        return (
            <div style={{ height: '100%' }}>
                <div className={styles.model} style={{ display: isVisiable ? 'block' : 'none' }}>
                    <div className={styles.header}>
                        <p>{title}</p>
                    </div>
                    <div className={styles.content}>
                        <p>{text}</p>
                    </div>
                    <div className={styles.footer}>
                        <p onClick={() => { this.handleOk() }}>{okText}</p>
                        <p onClick={() => { this.handleCancel() }}>{cancelText}</p>
                    </div>
                </div>
                <div id="back-layer" className={styles.mask}></div>
            </div>
        )
    }
}


Dialog.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    isVisiable: PropTypes.bool,
    okText: PropTypes.string,
    cancelText: PropTypes.string,
    onOk: PropTypes.func,
    onCancel: PropTypes.func
}

Dialog.defaultProps = {
    title: '提示',
    text: '你看不见我 看不见我',
    isVisiable: false,
    okText: '确定',
    cancelText: '取消',
    onOk: () => { },
    onCancel: () => { }
}
