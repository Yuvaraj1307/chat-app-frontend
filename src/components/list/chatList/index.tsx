import { FC, useState } from 'react';

import AddUser from './addUser';
import ChatItem from './chatItems';
import SearchBar from './searchBar';

import './style.css';

const ChatList: FC = () => {
  const [addMode, setAddMode] = useState(false);
  return (
    <div className='chatList'>
      <SearchBar addMode={addMode} setAddMode={setAddMode} />
      <div className="chatItems">
        <ChatItem />
      </div>
      {addMode && <AddUser />}
    </div>
  );
};

export default ChatList;
