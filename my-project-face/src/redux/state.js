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
      { id: 4, message: 'Yo yo yo' }]
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
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };

      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);

    } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
  }
}

export default store;

window.store = store;