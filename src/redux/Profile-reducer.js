import { UsersApi } from "../api/api"

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const SET_USERS_PROFILE = 'SET_USERS_PROFILE'

let initialState = {
    posts: [
        {id: 1, message: "Hi my name is Egor", likeCount: 12},
        {id: 2, message: "Hi my name is Nikita", likeCount: 12},
        {id: 3, message: "Hi my name is Olga", likeCount: 12},
        {id: 4, message: "Hi my name is Irina", likeCount: 12}
    ],
    newPostText: 'egor.com',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type){
        case ADD_POST: {
            let newPost = {
                id: 10,
                message: state.newPostText,
                likesCount: 0
            }
            let stateCopy = {...state}
            stateCopy.posts = [...state.posts]
            stateCopy.posts.push(newPost)
            stateCopy.newPostText = ''
            return stateCopy
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...state}
            stateCopy.newPostText = action.text
            return stateCopy
        }
        case SET_USERS_PROFILE:
            return {...state, profile: action.profile}
        default:
            return state
    }   
}
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})

export const GetProfile = (userId) => {
    return (dispatch) => {
        UsersApi.getProfile(userId)
            .then(data => {
                dispatch(setUsersProfile(data))
            })
    }
}


export default profileReducer
