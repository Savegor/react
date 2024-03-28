import { connect } from 'react-redux'
import ProfilePosts from './ProfilePosts.jsx'

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage,
        profile: state.profilePage.profile,
        isAuth: state.authUsers.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        PostChangeContainer: (newText) => {
            dispatch({text: newText, type: 'UPDATE-NEW-POST-TEXT'})
        },
        addNewPostTextContainer: () => {
            dispatch({type: 'ADD-POST'})
        }
    }
}

const ProfilePostsContainer = connect(mapStateToProps, mapDispatchToProps)(ProfilePosts)

export default ProfilePostsContainer