let state = {
  profilePage:{
    postsData:[{id: 1, message:'Hi, How are you?', likesCount: 20},
    {id: 2, message:'This is my first post', likesCount: 12},
    {id: 3, message:'I love jS', likesCount: 420},
    {id: 4, message:'Hi, How are you222?', likesCount: 120} ]
  },
  dialogsPage: {
    dialogsData:[{id: 1, name:'Dima'},
    {id: 2, name:'Katia'},
    {id: 3, name:'Nik'},
    {id: 4, name:'Egor'} ],

    messagesData:[{id: 1, message:'Hi'},
    {id: 2, message:'How are you'},
    {id: 3, message:'Whats app man'},
    {id: 4, message:'Yo yo yo'} ]
  }
}

export let addPost = (postMessage) => {
   let newPost = {
    id: 5,
    message: postMessage,
    likesCount:0
   };

  state.profilePage.postsData.push(newPost);
} 

export default state;
