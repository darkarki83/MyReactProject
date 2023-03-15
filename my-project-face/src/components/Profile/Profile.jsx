import s from './Profile.module.css';

const Profile = () => {
  return (
      <div className={s.profile}>
        <div>
          <img src='https://upload.wikimedia.org/wikipedia/commons/3/34/Tufa_towers_in_Mono_Lake-1000px.jpeg' ></img>
        </div>
        <div>
          ava + discription
        </div>
        <div>
        my posts
          <div>
            New post
          </div>
            <div className={s.posts} >
                <div className={s.item} >post1</div>
                <div className={s.item} >post2</div>
                <div className={s.item}>post3
            </div>
          </div>
        </div>
      </div>
  );
}

export default Profile;
