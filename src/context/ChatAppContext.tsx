import { createContext, ReactNode } from 'react';
import { chatDefaults } from './helper';

const ChatAppContext = createContext<TChatAppContext>(chatDefaults);

export const ChatAppContextProvider = (props: { children: ReactNode }): ReactNode => {
  const { children } = props;
  return (
    <ChatAppContext.Provider value={{}}>
      {children}
    </ChatAppContext.Provider>
  );
};

export default ChatAppContext;
