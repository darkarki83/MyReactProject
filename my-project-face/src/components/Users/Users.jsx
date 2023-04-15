import React from "react";
import s from './Users.module.css';
import * as axios from "axios";

let Users = (props) => {
    debugger;

    let getUsers = () => {
        if (!props.users || props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUsers(response.data);
                })
                .catch(error => {
                    console.error(error);
                });
        }
    }
    
    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(u =>
                <div key={u.id} >
                    <span>
                        <div ><img className={s.usersPhoto} src={u.image} /> </div>

                        <div>
                            {u.followed ? (<button >Unfollow</button>) : <button >Follow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.town}</div>
                        </span>
                    </span>
                </div>
            )
        }
    </div>
}

export default Users;