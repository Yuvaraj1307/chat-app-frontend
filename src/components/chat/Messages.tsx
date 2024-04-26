import { FC } from 'react';

const Messages: FC = () => {
  const isImageIsEnable = import.meta.env.IMAGE_SHARING;
  return (
    <>
      <div className="message own">
        <div className="texts">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, obcaecati.
          </p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className="message">
        <img src="/avatar.png" alt="avatar" />
        <div className="texts">
          {
            isImageIsEnable && (
              <>
                {/* Received Image */}
                <img
                  src="/avatar.png"
                  alt="recieved image"
                />
              </>
            )
          }
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, obcaecati.
          </p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className="message own">
        <div className="texts">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, obcaecati.
          </p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className="message">
        <img src="/avatar.png" alt="avatar" />
        <div className="texts">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, obcaecati.
          </p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className="message own">
        <div className="texts">
          {
            isImageIsEnable && (
              <>
                {/* Sent Image */}
                <img
                  src="/avatar.png"
                  alt="sent image"
                />
              </>
            )
          }
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, obcaecati.
          </p>
          <span>1 min ago</span>
        </div>
      </div>
      <div className="message">
        <img src="/avatar.png" alt="avatar" />
        <div className="texts">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor, obcaecati.
          </p>
          <span>1 min ago</span>
        </div>
      </div>
    </>
  );
};

export default Messages;
