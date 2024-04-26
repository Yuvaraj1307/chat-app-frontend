import { FC } from 'react';

import './style.css';

const AddUser: FC = () => {
  return (
    <div className='addUser'>
      <form>
        <input type="text" name="username" />
        <button>Search</button>
      </form>
      <div className='user'>
        <div className="detail">
          <img src="/avatar.png" alt="" />
        </div>
        <button>Add User</button>
      </div>
    </div>
  );
};

export default AddUser;
