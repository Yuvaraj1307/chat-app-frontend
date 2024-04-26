import { FC } from 'react';

import './style.css';

const UserInfo: FC = () => {
  const { VIDEO_CALL } = import.meta.env;
  return (
    <div className='userInfo'>
      <div className="user">
        <img src='/avatar.png' alt="avatar" />
        <h2>John Doe</h2>
      </div>
      <div className="icons">
        {/* <img src='/more.png' alt="more" /> */}
        {VIDEO_CALL && <img src='/video.png' alt="video" />}
        <img src='/edit.png' alt="edit" />
      </div>
    </div>
  );
};

export default UserInfo;
