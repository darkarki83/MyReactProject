import React from "react";
import s from './Users.module.css';
import { NavLink } from "react-router-dom";

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i < pagesCount + 1; i++) {
        pages.push(i);
    }

    return <div>
        <div>
            {
                pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage} onClick={(e) => { props.onPageChanged(p); }} > {p} </span>
                })
            }
        </div>
        {
            props.users.map(u =>
                <div key={u.id} >
                    <span>
                        <NavLink to={'/profile/' + u.id} >
                            {(u.photos.small !== null) ? (
                                <div ><img className={s.usersPhoto} src={u.photos.small} /> </div>
                            ) : (
                                <div ><img className={s.usersPhoto} src={'https://avatarfiles.alphacoders.com/893/thumb-89303.gif'} /> </div>
                            )}
                        </NavLink>
                        <div>
                            {u.followed ? (<button onClick={props.follow}  >Unfollow</button>) : <button onClick={props.unfollow}    >Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </span>
                    </span>
                </div>
            )
        }
    </div>
}

export default Users;

