import './ProfilePosts.css'
import React from 'react'
import Posts from './posts/posts.jsx'
import { Navigate} from "react-router-dom";

const ProfilePosts = (props) => {
    if (!props.isAuth) return <Navigate to={'/login'}/>
    let photo = 'https://sun9-12.userapi.com/impg/3xrxEPzPw7GwyByGa0n4kIPCWdbIsCcCGcRvNQ/eafYYSMQbKM.jpg?size=1623x2160&quality=96&sign=9ff78ab6a0dc033305cacb2144585383&type=album'
    let newPost = React.createRef()
    let addNewPost = props.profilePage.posts.map(p => <Posts message={p.message} name={p.id}/>)
    let addNewPostText = () => {
        props.addNewPostTextContainer()
    }
    let PostChange = () => {
        let newText = newPost.current.value
        props.PostChangeContainer(newText)
        newText = ''
    }
    if (!props.profile){
        return <>Loading</>
    }
    if (props.profile.photos.large){
        photo = props.profile.photos.large
    }
    return(
        <div className='Profile'>
            <h1>My posts</h1>
            <h2>My nikname: {props.profile.fullName}</h2>
            <br />
            <div>
                <img src={photo} style={{maxWidth: '200px'}} alt="" />
            </div>
            <br />
            <textarea name="" id="" cols="30" rows="5" ref={newPost} onChange={PostChange} value={props.profilePage.newPostText}></textarea> 
            <button className='add_post' onClick={addNewPostText}>Add Post</button>
            {addNewPost}
        </div>
    )
}

export default ProfilePosts