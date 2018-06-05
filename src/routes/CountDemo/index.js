import { connect } from 'dva';
import Counter from '../../components/Counter'

const mapStateToProps = ({ counter }) => {
    return { ...counter }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onReduce(count) {
            dispatch({
                type: 'counter/reduce',
                payload: {
                    count: count
                }
            })
        },
        onAdd(count) {
            dispatch({
                type: 'counter/add',
                payload: {
                    count: count
                }
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);