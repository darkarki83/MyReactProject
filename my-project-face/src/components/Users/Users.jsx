import React from "react";
import s from './Users.module.css';

let Users = (props) => {
debugger;
    if (props.users.length === 0) {
        debugger;
        props.setUsers([
            { id: 1, fullName: 'Artiom Krol', status: 'i Am A Boss', location: { country: 'Ukraina', town: 'Odessa' }, image: 'https://avatarfiles.alphacoders.com/893/thumb-89303.gif', followed: true, },
            { id: 2, fullName: 'Artiom Krol', status: 'i Am A Boss', location: { country: 'Israel', town: 'Ariel' }, image: 'https://avatarfiles.alphacoders.com/893/thumb-89303.gif', followed: true, },
            { id: 3, fullName: 'Artiom Krol', status: 'i Am A Boss', location: { country: 'Canada', town: 'Winnipeg' }, image: 'https://avatarfiles.alphacoders.com/893/thumb-89303.gif', followed: false, }
        ])
    }

    return <div>
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