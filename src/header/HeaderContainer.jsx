import { connect } from "react-redux"
import Header from "./Header"
import React from "react"
import { AuthMe, setUsersData } from "../redux/auth-reducer"

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.AuthMe()
    }
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state) => {
    return {
        login: state.authUsers.login,
        isAuth: state.authUsers.isAuth
    }
}

export default connect(mapStateToProps, {setUsersData, AuthMe})(HeaderContainer)