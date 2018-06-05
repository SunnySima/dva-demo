import React from 'react';
import PropTypes from 'prop-types';

import styles from './index.css'

const Counter = ({ count, onReduce, onAdd }) => (
    <div className={styles.counterItem}>
        <div className={styles.counterNum}>{count}</div>
        <div className={styles.counterBtn}>
            <button onClick={() => onReduce(count)}>-</button>
            <button onClick={() => onAdd(count)}>+</button>
        </div>
    </div>
);

Counter.propTypes = {
    count: PropTypes.number.isRequired,
    onReduce: PropTypes.func.isRequired,
    onAdd: PropTypes.func.isRequired
}

Counter.defaultProps = {
    count: 0,
    onReduce: () => { },
    onAdd: () => { }
}

export default Counter;