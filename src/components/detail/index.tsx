import { FC } from 'react';

import './style.css';

const Detail: FC = () => {
  return (
    <div className='detail'>
      <div className="user">
        <img src="/avatar.png" alt="avatar" />
        <h2>John Doe</h2>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="info">
        <div className="option">
          <div className="title">
            <span>Chat Setting</span>
            <img src="/arrowUp.png" alt="arrowUp" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Privacy % Help</span>
            <img src="/arrowUp.png" alt="arrowUp" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Photos</span>
            <img src="/arrowDown.png" alt="arrowUp" />
          </div>
          <div className="photos">
            <div className="photoItem">
              <img src="/avatar.png" alt="" />
              <span>photo_2024.png</span>
            </div>
            <img src="./download.png" alt="" />
          </div>
        </div>
        <div className="option">
          <div className="title">
            <span>Shared Files</span>
            <img src="/arrowUp.png" alt="arrowUp" />
          </div>
        </div>
        <button>Block User</button>
      </div>
    </div>
  );
};
  
export default Detail;
