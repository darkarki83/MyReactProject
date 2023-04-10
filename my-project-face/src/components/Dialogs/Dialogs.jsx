import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/Message';
import DialogItem from './DialogItem/DialogItem';

const Dialogs = (props) => {

  let dialogsElements = props.dialogsPage.dialogsData.map(dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />,);

  let messagesElements = props.dialogsPage.messagesData.map(message => <Message massage={message.message} key={message.id} />);

  let newMessageBody = props.dialogsPage.newMessageBody;
  
  let onSendMessageClick = () => {
    props.sendMessage();
  }

  let onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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
          <textarea onChange={onNewMessageChange} value={newMessageBody} ></textarea>
          <button onClick={onSendMessageClick} >Add message</button>
        </div>
      </div>
    </div>
  );
}

export default Dialogs;
