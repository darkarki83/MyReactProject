import s from './Post.module.css';

const Post = (props) => {

  debugger;

  return (
    <div className={s.item}
    >
      <img src='https://avatarfiles.alphacoders.com/893/thumb-89303.gif' />
      {props.message}
      <div>
        <span>Likes : {props.likes} </span>
      </div>
    </div>

  );
}

export default Post;
