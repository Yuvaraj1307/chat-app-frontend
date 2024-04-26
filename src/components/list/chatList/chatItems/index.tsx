import { FC } from 'react';

import './style.css';

const ChatItem: FC = () => {
  return (
    <>
      <div className="chatItem">
        <img src="/avatar.png" alt="avatar" />
        <div className="texts">
          <span>John Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src="/avatar.png" alt="avatar" />
        <div className="texts">
          <span>John Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src="/avatar.png" alt="avatar" />
        <div className="texts">
          <span>John Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src="/avatar.png" alt="avatar" />
        <div className="texts">
          <span>John Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src="/avatar.png" alt="avatar" />
        <div className="texts">
          <span>John Doe</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="chatItem">
        <img src="/avatar.png" alt="avatar" />
        <div className="texts">
          <span>John Doe</span>
          <p>Hello</p>
        </div>
      </div>
    </>
  );
};

export default ChatItem;
