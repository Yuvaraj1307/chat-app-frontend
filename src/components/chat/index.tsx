import {
  FC, memo, useEffect, useRef, useState,
} from 'react';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';

import Messages from './Messages';

import './style.css';

const Chat: FC = () => {
  const [openEmoji, setOpenEmoji] = useState(false);
  const [text, setText] = useState('');

  const {
    VIDEO_CALL, AUDIO_CALL, DETAILS, IMAGE_SHARING,
  } = import.meta.env;

  const endRef = useRef<HTMLDivElement>(null);

  const handleEmojiClick = (e: EmojiClickData): void => {
    setText(prev => prev + e.emoji);
  };

  useEffect(() => {
    if (endRef.current) {
      endRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return (
    <div className='chat'>
      <div className="top">
        <div className="user">
          <img src="/avatar.png" alt="avatar" />
          <div className="texts">
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
        <div className="icons">
          {AUDIO_CALL && <img src="/phone.png" alt="phone" />}
          {VIDEO_CALL && <img src="/video.png" alt="video" />}
          {DETAILS && <img src="/info.png" alt="info" />}
        </div>
      </div>
      <div className="center">
        <Messages />
        <div ref={endRef}></div>
      </div>
      <div className="bottom">
        {
          (AUDIO_CALL || VIDEO_CALL || AUDIO_CALL) && (
            <div className="icons">
              {IMAGE_SHARING && <img src="/img.png" alt="img" />}
              {VIDEO_CALL && <img src="/camera.png" alt="camera" />}
              {AUDIO_CALL && <img src="/mic.png" alt="mic" />}
            </div>
          )
        }
        <div className="emoji">
          <img src="/emoji.png" alt="emoji" onClick={() => setOpenEmoji(prev => !prev)} />
          <div className="picker">
            <EmojiPicker open={openEmoji} onEmojiClick={handleEmojiClick} />
          </div>
        </div>
        <input
          type="text"
          placeholder='Type a message...'
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button className='sendButton'>Send</button>
      </div>
    </div>
  );
};

const MemoizedChat = memo(Chat);

export default MemoizedChat;
