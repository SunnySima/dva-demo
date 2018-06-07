import { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './index.css'


export default class TextInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: props.value
        }
    }


    handleInput(e) {
        const inputVal = e.target.value;
        this.setState({
            value: inputVal
        }, () => {
            this.props.onInput && this.props.onInput(inputVal);
        });
    }

    render() {
        const { description, disable } = this.props;

        return (
            <div className={styles.inputItem}>
                <p className={styles.title}>{description}</p>
                <div className={styles.container}>
                    <textarea readOnly={disable} onInput={(e) => { this.handleInput(e) }} value={this.state.value} />
                </div>
            </div>
        )

    }
}


TextInput.propTypes = {
    description: PropTypes.string,
    value: PropTypes.string,
    disable: PropTypes.bool,
    onInput: PropTypes.func
}


TextInput.defaultProps = {
    description: '请输入内容',
    value: '',
    disable: false,
    onInput: () => { }
}
