import './dialogs.css'
import Messag from './messag/messag'
import UsersDialogs from './users-dialogs/users-dialogs'

const Dialogs = (props) => {
    return(
        <div className='messages'>
            <UsersDialogs state = {props.store.getState().dialog}/>
            <Messag/>
        </div>
    )
}

export default Dialogs