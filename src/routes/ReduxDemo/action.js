export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIABLE_FILTER = 'SET_VISIABLE_FILTER';

export const VisiableFilter = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETE: 'SHOW_COMPLETE',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}


export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    }
}

export function toggleTodo(index) {
    return {
        type: TOGGLE_TODO,
        index
    }
}

export function setVisiableFilter(filter) {
    return {
        type: SET_VISIABLE_FILTER,
        filter
    }
}