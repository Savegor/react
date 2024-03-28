import {Route, Routes } from 'react-router-dom'
import './content.css'
import Dialogs from './dialogs/dialogs'
import UsersContainer from './users/users-container'
import ProfileClassContainer from './Profile/ProfileClassContainer'


const Content = (props) => {
    return (
        <div className='content'>
            <Routes>
                <Route path="/Profile/:userId" element={<ProfileClassContainer store = {props.store}/>} />
                <Route path="/Dialogs/*" element={<Dialogs store = {props.store}/>} />
                <Route path="/Users" element={<UsersContainer store = {props.store}/>} />
                <Route path="/Music" element={<div>Music</div>} />
                <Route path="/Setting" element={<div>Setting</div>} />
                <Route path="/login" element={<div>login</div>} />
            </Routes>
        </div>
    )
}

export default Content