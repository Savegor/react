import './posts.css'

const Posts = (props) => {
    return (
        <div className='posts'>
            <div className="infouser">
                <img src="https://kartinkived.ru/wp-content/uploads/2021/12/avatarka-dlya-vatsapa-krasivaya-panda.jpg" alt="avatar" />
                <div className="username">{props.name}</div>
            </div>
            <div className='message'>{props.message}</div>
        </div>
    )
}

export default Posts