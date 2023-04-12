const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, How are you?', likesCount: 20 },
    { id: 2, message: 'This is my first post', likesCount: 12 },
    { id: 3, message: 'I love jS', likesCount: 420 },
    { id: 4, message: 'Hi, How are you222?', likesCount: 120 }
  ],
  newPostText: 'ItAtrKDev'
};

const profileReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_POST:
      let text = state.newPostText;
      return {
        ...state,
        newPostText: '',
        posts: [...state.posts, { id: 5, message: text, likesCount: 0 }]
      };

    case UPDATE_NEW_POST_TEXT:
      return {
        ...state,
        newPostText: action.newText
      };

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })

export const onPostChangeActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profileReducer;