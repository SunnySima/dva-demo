
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './index.css';


const Post = ({ id, title, creator, status, postTime, onDelete }) => {

    return (
        <div className={styles.row}>
            <div className={classnames(styles.postContent, styles.column)}>
                <div className={styles.postTitle}>{title}</div>
                <p>创建人：{creator}</p>
                <p>创建时间：{getPostTimeStr(postTime)}</p>
            </div><div className={classnames(styles.postOperation, styles.column)}>
                <p onClick={() => onDelete(id)}>删除</p>
            </div>
        </div>
    )
}

function getPostTimeStr(postTime) {
    if (!postTime) return null;
    const time = new Date(postTime || 0);
    return `${time.getFullYear()}-${getFullNum(time.getMonth() + 1)}-${getFullNum(time.getDate())} ${getFullNum(time.getHours())}:${getFullNum(time.getMinutes())}`;
}

function getFullNum(num) {
    return num < 10 ? '0' + num : num;
}


Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    creator: PropTypes.string,
    status: PropTypes.oneOf([0, 1, 2]),
    postTime: PropTypes.number,
    onDelete: PropTypes.func
}

Post.defaultProps = {
    id: 0,
    title: '无标题',
    status: 0,
    postTime: +new Date(),
    onDelete: () => { }
}

export default Post;

