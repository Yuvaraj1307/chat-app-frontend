import { FC } from 'react';
import { Chat, List } from '@components';

const App: FC = () => {
  return (
    <div className="container">
      <List />
      <Chat />
    </div>
  );
};

export default App;
