import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import './katalog.css'

const Katalog = (props) => {
    return (
        <div className='katalog'>
            <nav>
                <ul>
                    <li><NavLink to={'/Profile/'+ props.myId}>Profile</NavLink></li>
                    <li><NavLink to='/Dialogs'>Dialogs</NavLink></li>
                    <li><NavLink to='/Users'>Users</NavLink></li>
                    <li><NavLink to='/Music'>Music</NavLink></li>
                    <li><NavLink to='/Setting'>Setting</NavLink></li>
                </ul>
            </nav>
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        myId: state.authUsers.userId
    }
}

let mapDispatchToProps = (dispatch) => {
    return {}
}

const KatalogContainer = connect(mapStateToProps, mapDispatchToProps)(Katalog)

export default KatalogContainer