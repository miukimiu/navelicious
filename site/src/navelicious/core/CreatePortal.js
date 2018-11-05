import React from 'react';
import ReactDOM from 'react-dom';

class CreatePortal extends React.Component {
  constructor(props) {
    super(props);
    // Create container DOM element and append to DOM.
    this.overlayContainer = document.createElement('div');
    document
      .getElementById('navelicious-section')
      .appendChild(this.overlayContainer);
  }

  componentWillUnmount() {
    document
      .getElementById('navelicious-section')
      .removeChild(this.overlayContainer);
  }

  render() {
    return ReactDOM.createPortal(
      <div>
        <div>{this.props.children}</div>
      </div>,
      this.overlayContainer
    );
  }
}

export default CreatePortal;
