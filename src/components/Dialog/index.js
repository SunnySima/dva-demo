
import PropTypes from 'prop-types';

import styles from './index.css';

const Dialog = (props) => {
    const { title, text, isVisiable, okText, cancelText, onOk, onCancel } = props;
    return (
        <form>
            <div className="model" style={{ display: isVisiable ? 'block': 'none'}}>
                <div className="header">
                    {title}
                </div>
                <div className="content">
                    {text}
                </div>
                <div className="footer">
                    <button type="submit">{okText}</button>
                    <button>{cancelText}</button>
                </div>
            </div>
        </form>
    )
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
    title: '弹出框',
    text: '',
    isVisiable: false,
    okText: '确定',
    cancelText: '取消',
    onOk: () => {},
    onCancel: () => {}
}

export default Dialog;