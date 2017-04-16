import React from 'react';

const helloWorldCode =
`ReactDOM.render(
  <h1>Hello, world!</h1>,
  document.getElementById('root')
);
`;

const HelloWorld = () => (
  <div className="docs-hello-world">
    <p>Check the hello world code</p>
    <pre>
      <code>
        { helloWorldCode }
      </code>
    </pre>
  </div>
);

export default HelloWorld;
