import * as types from './Types';

export const addUsers = (data) => ({
    type: types.ADD_USER,
    payload: data
})

export const getUsers = () => ({
    type: types.GET_USERS,
    payload: ''
})

export const toggleUser = (index) => ({
    type: types.TOGLE_USER,
    payload: index
})
