const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE';


let initialState = {
  posts: [
    { id: 1, message: 'Hi, How are you?', likesCount: 20 },
    { id: 2, message: 'This is my first post', likesCount: 12 },
    { id: 3, message: 'I love jS', likesCount: 420 },
    { id: 4, message: 'Hi, How are you222?', likesCount: 120 }
  ],
  newPostText: 'ItAtrKDev',
  profile: {
    "aboutMe": "я круто чувак 1001%",
    "contacts": {
      "facebook": "facebook.com",
      "website": null,
      "vk": "vk.com/dimych",
      "twitter": "https://twitter.com/@sdf",
      "instagram": "instagra.com/sds",
      "youtube": null,
      "github": "github.com",
      "mainLink": null
    },
    "lookingForAJob": true,
    "lookingForAJobDescription": "не ищу, а дурачусь",
    "fullName": "samurai dimych",
    "userId": 2,
    "photos": {
      "small": "https://social-network.samuraijs.com/activecontent/images/users/2/user-small.jpg?v=0",
      "large": "https://social-network.samuraijs.com/activecontent/images/users/2/user.jpg?v=0"
    }
  }
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
    case SET_USER_PROFILE:
      return {
        ...state,
        profile: action.profile
      };

    default:
      return state;
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST })
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const onPostChangeActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text
})

export default profileReducer;