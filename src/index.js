import React from 'react';
import ReactDOM from 'react-dom';

import Parenthesis from './test_dev/parenthesis';

class HappyCode extends React.Component {
  render() {
    return (
      <div>
        <Parenthesis />
      </div>
    )
  }
}

ReactDOM.render(
  <HappyCode />,
  document.getElementById('root')
);
