const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('error'); 
            return {
                ...state, 
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('success'); 
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('SIGNOUT_SUCCESS');
            return state;
        case 'SIGNIN_SUCCESS':
            console.log('SIGNIN_SUCCESS');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
        console.log('SIGNUP_ERROR');
            return {
                ...state,
                authError: action.err.message
            }

        default: 
        return state;
    }
};

export default authReducer;