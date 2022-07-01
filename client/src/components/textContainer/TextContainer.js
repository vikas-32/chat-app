import React from 'react';

import './TextContainer.css';

const TextContainer = ({ users }) => (
  <div className="textContainer">
    <div>
      <h1>Realtime Chat Application <span role="img" aria-label="emoji">💬</span></h1>
      <h2>Created with React, Express, Node and Socket.IO <span role="img" aria-label="emoji">❤️</span></h2>
      <h2>Try it out right now! <span role="img" aria-label="emoji">⬅️</span></h2>
    </div>
    {
      users
        ? (
          <div>
            <h1>People currently chatting:</h1>
            <div className="activeContainer">
              <h2>
                {users.map(({name}) => (
                  <div key={name} className="activeItem">
                    {name}
                    <img alt="Online Icon" src="data:image/png;base64,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" height="30px" width="30px"  />
                  </div>
                ))}
              </h2>
            </div>
          </div>
        )
        : null
    }
  </div>
);

export default TextContainer;