import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {sendMessageCreator, updateNewMessageBodyCreator} from './../../redux/state'; 

const Dialogs = (props) => {
  //debugger;

  let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />,);

  let messagesElements = props.dialogsPage.messagesData.map(message => <Message massage={message.message} />);

  let newMessageElement = React.createRef();
  
  let addMessage = () => {
    props.dispatch(sendMessageCreator())
  }

  let onMessageChange = () => {
    let body = newMessageElement.current.value;
    props.dispatch(updateNewMessageBodyCreator(body))
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems} >
        {dialogsElements}
      </div>
      <div className={s.messages} >
        {messagesElements}
        <br/>
        <div>
          <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dialogsPage.newMessageBody} ></textarea>
          <button onClick={addMessage} >Add message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
