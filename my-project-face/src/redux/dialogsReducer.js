const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let initialState = {
  dialogsData: [{ id: 1, name: 'Dima' },
  { id: 2, name: 'Katia' },
  { id: 3, name: 'Nik' },
  { id: 4, name: 'Egor' }],
  messagesData: [{ id: 1, message: 'Hi' },
  { id: 2, message: 'How are you' },
  { id: 3, message: 'Whats app man' },
  { id: 4, message: 'Yo yo yo' }],
  newMessageBody: 'newText'
};

const dialogsReducer = (state = initialState, action) => {

  let stateCopy

  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody
      return {
        ...state,
        newMessageBody: '',
        messagesData: [...state.messagesData, { id: 5, message: body }]
      };

    case UPDATE_NEW_MESSAGE_BODY:
      stateCopy = {
        ...state,
        newMessageBody: action.body
      };
      return stateCopy;

    default:
      return state;
  }
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
})


export default dialogsReducer;
