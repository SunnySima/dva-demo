import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.css';


export default class Button extends Component {

    /**
     * 按钮点击事件
     */
    handleClick() {
        const { onClick } = this.props;
        onClick && onClick();
    }

    render() {
        const { btnText } = this.props;

        return (
            <div className={styles.btnItem}>
                <button onClick={() => { this.handleClick() }}>{btnText}</button>
            </div>
        )
    }
}

Button.propTypes = {
    btnText: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    btnText: 'OK',
    onClick: () => { }
}
