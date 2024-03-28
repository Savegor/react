import React from "react";
import styles from './users.module.css'
import { NavLink, Navigate } from "react-router-dom";

let Users = (props) => {
    if (!props.isAuth) return <Navigate to={'/login'}/>
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pagesPushRight = true
    let rightCurrentPage = props.currentPage + 5
    let leftCurrentPage = props.currentPage - 5
    let pages = []
    let pagesPush = () => {
        if (props.currentPage <= 6){
            leftCurrentPage = 1
        }
        else{
            pages.push(1)
        }
        if (rightCurrentPage >= pagesCount){
            rightCurrentPage = pagesCount
            pagesPushRight = false
        }
        for (let i = leftCurrentPage; i <= rightCurrentPage; i++) {
            pages.push(i)
        }
        if (pagesPushRight) pages.push(pagesCount)
    }
    pagesPush()
    return (
        <div className={styles.users}>
            {
                props.users.map(u => <div key={u.id} className={styles.user}>
                    <span className={styles.user_profile}>
                        <div>
                            <NavLink to={'/Profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small
                                    : "https://sun9-12.userapi.com/impg/3xrxEPzPw7GwyByGa0n4kIPCWdbIsCcCGcRvNQ/eafYYSMQbKM.jpg?size=1623x2160&quality=96&sign=9ff78ab6a0dc033305cacb2144585383&type=album"}
                                    alt="img" />
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id) } onClick={() => {props.unFollow(u.id)}}>Unfollow</button>
                                : <button disabled={props.followingInProgress.some(id => id === u.id) } onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span className={styles.user_status}>
                        <span className={styles.name_status}>
                            <div className={styles.fullname}>name: {u.name}</div>
                            <div className={styles.status}>status: {u.status}</div>
                        </span>
                        <span className={styles.city_country}>
                            <div className={styles.country}>{"u.location.country"}</div>
                            <div className={styles.city}>{"u.location.city"}</div>
                        </span>
                    </span>
                </div>)
            }
            <div className={styles.pages}>
                {pages.map(p => {
                    return (<span key={p} className={(props.currentPage === p) ? styles.page_number : styles.page_number_two} onClick={() => { props.onPageChanged(p) }}>{p}</span>)
                })}
            </div>
        </div>
    )
}

export default Users