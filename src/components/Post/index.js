
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.css';


const Post = ({ id, title, creator, status, postTime }) => {
    return (
        <div className={styles.row}>
            <div className={classnames(styles.postContent, styles.column)}>
                <div>标题</div>
                <p>创建人：xxx</p>
                <p>创建时间：xxx</p>
            </div>
            <div className={classnames(styles.postOperation, styles.column)}>
                <a>删除</a>
            </div>
        </div>
    )
}


Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    creator: PropTypes.string,
    status: PropTypes.oneOf([0, 1, 2]),
    postTime: PropTypes.number
}

export default Post;

