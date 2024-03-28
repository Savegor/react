import { UsersApi } from "../api/api"

const SET_USERS_DATA = 'SET_USERS_DATA'

let initialState = {
    userId: null,
    isAuth: false,
    login: null,
    email: null
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS_DATA:
            return {...state, ...action.data, isAuth: true, userId: action.data.id}
        default:
            return state
    }
}

export const setUsersData = (id, email, login) => ({type: SET_USERS_DATA, data: {id, email, login}})

export const AuthMe = () => {
    return (dispatch) => {
        UsersApi.authMe()
            .then(data => {
                if (data.resultCode === 0){
                    let {id, login, email} = data.data
                    dispatch(setUsersData(id, email, login))
                }
            })
    }
}

export default AuthReducer