
const initState = {
    username: "",
    profile: "",
    userid: 0
}

const UPDATE_STATE = "UPDATE_STATE"
function reducer(state = initState, action)
{
    switch(action.type)
    {
        case UPDATE_STATE:
            return{...state, ...action.payload}
        default:
            return {...state};
    }
}

export default reducer;

export function updateState(user)
{
    console.log(user);
    return{
        type: UPDATE_STATE,
        payload: user
    }
}