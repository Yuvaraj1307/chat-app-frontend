import { FC, memo } from 'react';

import UserInfo from './userInfo';
import ChatList from './chatList';

import './style.css';

const List: FC = () => {
  return (
    <div className='list'>
      <UserInfo />
      <ChatList />
    </div>
  );
};

const MemoizedList = memo(List);

export default MemoizedList;
