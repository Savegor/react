import React from "react";
import ProfilePostsContainer from "./ProfilePostsContainer";
import { connect } from "react-redux";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { GetProfile } from "../../../redux/Profile-reducer";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        location={location}
        params={params}
        navigate={navigate}
      />
    );
  }

  return ComponentWithRouterProp;
}

class ProfileClassContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.params.userId
        this.props.GetProfile(userId)
    }
    render() {
        return (
            <div>
                <ProfilePostsContainer {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
}) 

let WithRouterProfileClassContainer = withRouter(ProfileClassContainer)

export default connect(mapStateToProps, {GetProfile})(WithRouterProfileClassContainer)