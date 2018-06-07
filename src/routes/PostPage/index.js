import { connect } from 'dva';

import Post from '../../components/Post';

const PostPage = ({ posts }) => {
    return (
        <div>
            {
                posts && posts.map((post) => {
                    return <Post id={post.id} title={post.title} creator={post.creator} postTime={post.postTime} />
                })
            }
        </div>
    )
}


function mapStateToProps({ post }) {
    return { ...post }
}

export default connect(mapStateToProps)(PostPage);