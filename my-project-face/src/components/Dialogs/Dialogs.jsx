import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';



const DialogItem = (props) => {
  let path = `/dialogs/${props.id}`

  return (
        <div>
          <div className={`${s.dialog} ${s.active} `}>
            <NavLink to={path} >{props.name}</NavLink>
          </div>
        </div>
  );
}

const Messages = (props) => {
  return (
    <div className={s.messages}>
      <div className={s.massage} >{props.massage}</div>
  </div>
  );
}


const Dialogs = (props) => {
  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems} >
          <DialogItem name='Dima' id='1' />
          <DialogItem name='Katia' id='2'  />
          <DialogItem name='Nik' id='3'  />
          <DialogItem name='Egor' id='4'  />
        </div>
        <div>
          <Messages massage='Hi' />
          <Messages massage='How are you' />
          <Messages massage='Whats app man ' />
        </div>
      </div>
  );
}

export default Dialogs;
