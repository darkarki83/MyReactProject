import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {
  //debugger;

  let dialogsElements = props.dialogsPage.dialogsData.map( dialog => <DialogItem name={dialog.name} id={dialog.id} />,  );
  
  let messagesElements = props.dialogsPage.messagesData.map( message => <Message massage={message.message} />);

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
