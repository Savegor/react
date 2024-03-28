import { connect } from 'react-redux'
import Users from './users'
import React from 'react'
import loading_gif from '../../../image/loading.gif'
import { follow, unFollow, setfollowingProgress, getUsersThunk, getUsersThunk2 } from '../../../redux/users-reducers'

// let maxCurrentPage = 5

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunk2(pageNumber, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.loading ?
                <div>
                    <img src={loading_gif} alt="loading" style={{ maxWidth: '300px' }} />
                </div> 
                : <Users totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    followingInProgress={this.props.followingInProgress}
                    isAuth={this.props.isAuth}
                />
            }
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        loading: state.usersPage.loading,
        followingInProgress: state.usersPage.followingInProgress,
        isAuth: state.authUsers.isAuth
    }
}

export default connect(mapStateToProps, { unFollow, follow, setfollowingProgress, getUsersThunk, getUsersThunk2 })(UsersContainer)