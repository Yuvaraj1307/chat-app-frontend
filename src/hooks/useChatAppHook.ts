import { ChatAppContext } from '@context';
import { useContext } from 'react';

export const useChatAppHook = (): TChatAppContext => {
    
  const context = useContext(ChatAppContext);

  if (!context) {
    throw new Error('useChatAppHook must be used within a ChatAppContextProvider');
  }

  return context;
};
