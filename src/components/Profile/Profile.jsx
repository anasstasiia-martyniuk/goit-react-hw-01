import c from './Profile.module.css'

export const Profile = ({ name, tag, location, image, stats }) => {
return (    
    <>
<div className={c.card}>
    <div>
      <img
        src={image}
        alt="User avatar"
        className={c.avatar}
      />
      <p className={c.username}>{name}</p>
      <p className={`${c.tag} ${c.gray}`}>{tag}</p>
      <p className={c.gray}>{location}</p>
    </div>
  
    <ul className={c.list}>
      <li className={c.item}>
        <span>Followers</span>
        <span className={c.fat}>{stats.followers}</span>
      </li>
      <li className={c.item}>
        <span>Views</span>
        <span className={c.fat}>{stats.views}</span>
      </li>
      <li className={c.item}>
        <span>Likes</span>
        <span className={c.fat}>{stats.likes}</span>
      </li>
    </ul>
  </div>
  </>
  );
}