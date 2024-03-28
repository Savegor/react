import { NavLink } from 'react-router-dom'
import './header.css'

const Header = (props) => {
    
    return (
        <header className="header">
            <div className="logo">Logo</div>
            <div className="auth">
                { props.isAuth ? props.login : <NavLink className={"authNavLink"} to={'/login'}>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header