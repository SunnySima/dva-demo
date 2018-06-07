import { connect } from 'dva';

import TextInput from '../../../components/TextInput';
import Button from '../../../components/Button';


const AddPost = ({ value, onInput, onSubmit }) => {

    return (
        <div style={{ height: '100%', marginTop: '10px' }}>
            <TextInput value={value} onInput={(value) => { onInput(value) }} />
            <Button btnText={'提交'} onClick={() => { onSubmit(value) }} />
        </div>
    )
}

function mapStateToProps({ post }) {
    return { ...post }
}


function mapDispatchToProps(dispatch) {
    return {
        onInput(value) {
            debugger
            dispatch({
                type: 'post/input',
                payload: {
                    value: value
                }
            })
        },
        onSubmit(value) {
            dispatch({
                type: 'post/submit',
                payload: {
                    value: value
                }
            })
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddPost)