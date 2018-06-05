
export default {
    namespace: 'counter',
    state: {
        count: 0
    },
    reducers: {
        reduce(state, action) {
            let count = action.payload.count;
            if (count === 0) {
                return state;
            }
            return {
                count: count - 1
            };
        },
        add(state, action) {
            return {
                count: action.payload.count + 1
            };
        },
    },
};