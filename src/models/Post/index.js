import { routerRedux } from 'dva/router';

export default {
    namespace: 'post',
    state: {
        value: '',
        posts: []
    },
    subscriptions: {
        setup({ dispatch, history }) {
            history.listen((location, action) => {
                if (location.pathname === '/postPage') {
                    dispatch({
                        type: 'getPosts',
                        payload: {},
                    });
                }
            })
        }
    },
    effects: {
        * submit({ payload }, { call, put }) { // eslint-disable-line
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
        },
        getPosts(state, action) {
            const posts = [];
            for (let index = 1; index <= 5; index++) {
                posts.push({
                    id: index,
                    title: 'test post' + index,
                    creator: 'Sunny Sima',
                    postTime: +new Date()
                })
            }
            return Object.assign({}, state, { posts: posts });
        }
    }
}