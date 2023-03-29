import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';


let dialogsData = [{id: 1, name:'Dima'},
{id: 2, name:'Katia'},
{id: 3, name:'Nik'},
{id: 4, name:'Egor'} ]

let dialogsElements = dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />,  );

let messagesData = [{id: 1, message:'Hi'},
{id: 2, message:'How are you'},
{id: 3, message:'Whats app man'},
{id: 4, message:'Yo yo yo'} ]

let messagesElements = messagesData.map( message => <Message massage={message.message} />);

const Dialogs = (props) => {
  return (
      <div className={s.dialogs}>
        <div className={s.dialogsItems} >
          {dialogsElements}
        </div>
        <div className={s.messages} >
          {messagesElements}
        </div>
      </div>
  );
}

export default Dialogs;
