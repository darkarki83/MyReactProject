const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

let store = {

  _state: {
    profilePage: {
      postsData: [
        { id: 1, message: 'Hi, How are you?', likesCount: 20 },
        { id: 2, message: 'This is my first post', likesCount: 12 },
        { id: 3, message: 'I love jS', likesCount: 420 },
        { id: 4, message: 'Hi, How are you222?', likesCount: 120 }
      ],
      newPostText: 'ItAtrKDev'
    },

    dialogsPage: {
      dialogsData: [{ id: 1, name: 'Dima' },
      { id: 2, name: 'Katia' },
      { id: 3, name: 'Nik' },
      { id: 4, name: 'Egor' }],
      messagesData: [{ id: 1, message: 'Hi' },
      { id: 2, message: 'How are you' },
      { id: 3, message: 'Whats app man' },
      { id: 4, message: 'Yo yo yo' }],
      newMessageBody: 'newText'
    }
  },
  _callSubscriber() {
    console.log('state is change');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };

    this._state.profilePage.postsData.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },
  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  dispatch(action) {    // { type: 'ADD_POST' }
    debugger;
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };

      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);

    } else if (action.type === SEND_MESSAGE) {
      let newMessage = {
        id: 5,
        message: this._state.dialogsPage.newMessageBody,
      };

      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageBody = '';
      this._callSubscriber(this._state);

    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);

    }
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const onPostChangeActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export const sendMessageCreator = () => ({ type: SEND_MESSAGE })

export const updateNewMessageBodyCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body
})

export default store;

window.store = store;