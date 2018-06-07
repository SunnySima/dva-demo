import { routerRedux } from 'dva/router';

export default {
    namespace: 'post',
    state: {
        value: ''
    },
    effects: {
        *submit({ payload }, { call, put }) {  // eslint-disable-line
            // yield call('', { ...payload });
            yield put(routerRedux.push(`/`, {}));
            return;
        },
    },
    reducers: {
        input(state, action) {
            return {
                value: action.payload.value
            }
        }
    }
}