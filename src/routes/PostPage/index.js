import { connect } from 'dva';

import Post from '../../components/Post';

const PostPage = ({ posts }) => {
    return (
        <div></div>
    )
}


function mapStateToProps({ posts }) {
    return { ...posts }
}

export default connect(mapStateToProps)(PostPage);