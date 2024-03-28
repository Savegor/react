import { UsersApi } from "../api/api"

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_LOADING = 'TOGGLE_IS_LOADING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 20,
    currentPage: 1,
    loading: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(u => {
                    if (u.id === action.userid) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case SET_USERS:
            return { ...state, users: action.users }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.currentPage }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUsersCount: action.count }
        case TOGGLE_IS_LOADING:
            return { ...state, loading: action.loading }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state, followingInProgress: action.followingProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state
    }
}

export const followSuccess = (userid) => ({ type: FOLLOW, userid })
export const unFollowSuccess = (userid) => ({ type: UNFOLLOW, userid })
export const setUsers = (users) => ({ type: SET_USERS, users })
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, count: totalUsersCount })
export const isLoading = (loading) => ({ type: TOGGLE_IS_LOADING, loading })
export const setfollowingProgress = (followingProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, followingProgress, userId })


export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(isLoading(true))
        UsersApi.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(isLoading(false))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const getUsersThunk2 = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(isLoading(true))
        dispatch(setCurrentPage(pageNumber))
        UsersApi.getUsers(pageNumber, pageSize)
            .then(data => {
                dispatch(setUsers(data.items))
                dispatch(isLoading(false))
            })
    }
}

export const unFollow = (userId) => {
    return (dispatch) => {
        dispatch(setfollowingProgress(true, userId))
        UsersApi.Unfollow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(unFollowSuccess(userId))
                }
                dispatch(setfollowingProgress(false, userId))
            })
    }
}

export const follow = (userId) => {
    return (dispatch) => {
        dispatch(setfollowingProgress(true, userId))
        UsersApi.Follow(userId)
            .then(data => {
                if (data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(setfollowingProgress(false, userId))
            })
    }
}

export default usersReducer