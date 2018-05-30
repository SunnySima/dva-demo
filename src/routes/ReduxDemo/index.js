import { createStore } from 'redux';
import { connect } from 'dva';
import reducer from './reducers'
import { VisiableFilter, toggleTodo, addTodo, setVisiableFilter } from './action'

const { SHOW_COMPLETE, SHOW_ACTIVE } = VisiableFilter;


function ReduxDemo() {
    let store = createStore(reducer)

    const unsubscribe = store.subscribe(() => {
      console.log(store.getState())
    })

    store.dispatch(addTodo('sunny1'))
    store.dispatch(addTodo('sunny2'))

    store.dispatch(toggleTodo(1))

    store.dispatch(setVisiableFilter(SHOW_COMPLETE))
    store.dispatch(setVisiableFilter(SHOW_ACTIVE))

    unsubscribe();
    
    return <div>Redux Demo</div>
}

ReduxDemo.propTypes = {
};

export default connect()(ReduxDemo);
