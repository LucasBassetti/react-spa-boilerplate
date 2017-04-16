import React from 'react';
import ChatBot from 'react-simple-chatbot';

const Examples = () => (
  <div className="docs-examples">
    <ChatBot
      steps={[
        {
          id: '1',
          message: 'Hello!',
          trigger: '2',
        },
        {
          id: '2',
          message: 'Nice!',
          end: true,
        },
      ]}
    />
  </div>
);

export default Examples;
