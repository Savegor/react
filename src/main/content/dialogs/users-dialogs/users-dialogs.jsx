import { NavLink } from 'react-router-dom'
import './users-dialogs.css'

const UsersDialogs = (props1) => {
    const User = (props2) => {
        return (
            <li><NavLink to={"/Dialogs/" + props2.id} className='users-navlink'>{props2.name}</NavLink></li>
        )
    }
    let data_users = props1.state.dialogs.map(
        user => <User id = {user.id} name = {user.name}/>
    )
    return (
        <div className="users">
            <nav>
                <ul>
                    {data_users}
                </ul>
            </nav>
        </div>
    )
}

export default UsersDialogs