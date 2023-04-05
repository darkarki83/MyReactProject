import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';
import {addMessageActionCreator, onMessageChangeActionCreator} from './../../redux/state'; 

const Dialogs = (props) => {
  //debugger;

  let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} />,);

  let messagesElements = props.dialogsPage.messagesData.map(message => <Message massage={message.message} />);

  let newMessageElement = React.createRef();
  
  let addMessage = () => {
    props.dispatch(addMessageActionCreator())
  }

  let onMessageChange = () => {
    let text = newMessageElement.current.value;
    props.dispatch(onMessageChangeActionCreator(text))
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
          <textarea ref={newMessageElement} onChange={onMessageChange} value={props.dialogsPage.newMessageText} ></textarea>
          <button onClick={addMessage} >Add message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
