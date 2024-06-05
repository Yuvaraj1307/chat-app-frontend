import {
  createContext, ReactNode, useMemo, useState, 
} from 'react';
import { TChatAppContext } from 'chat-app';
import { chatDefaults } from './helper';

const ChatAppContext = createContext<TChatAppContext>(chatDefaults);

export const ChatAppContextProvider = (props: { children: ReactNode }): ReactNode => {
  const { children } = props;

  const [currentUser, setCurrentUser] = useState<NullableString>(null);

  const value = useMemo(() => {
    return {
      currentUser,
      setCurrentUser,
    };
  }, [currentUser]);

  return (
    <ChatAppContext.Provider value={value}>
      {children}
    </ChatAppContext.Provider>
  );
};

export default ChatAppContext;
