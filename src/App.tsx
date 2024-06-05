import { useEffect } from 'react';
import { Chat, List } from '@components';
import { socket } from '@utils';

const App: React.FC = () => {
  useEffect(() => {
    try {
      socket.on('connect', () => {
        // eslint-disable-next-line no-console
        console.log('Connected to server');
      });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error sending online event:', error);
      socket.on('disconnect', () => {
        // eslint-disable-next-line no-console
        console.log('Disconnected from server');
      });
    }

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div className="container">
      <List />
      <Chat />
    </div>
  );
};

export default App;
