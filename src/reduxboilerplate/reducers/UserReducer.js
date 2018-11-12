import * as types from '../actions/Types';

const UserReducer = (state = [], { type, payload }) => {

    switch (type) {
        case types.ADD_USER:
            let pData = [{
                fname: payload.fname,
                lname: payload.lname,
                email: payload.email,
                toggle: false
            }]
            state = [...state, ...pData];
            return state;
        
        case types.GET_USERS:
            return state;

        case types.TOGLE_USER:
            let data = state[payload];
            data.toggle = !data.toggle; 
            state[payload] = data;
            state = [...state];
            return state;

        default:
            return state
    }
}
export default UserReducer;