import React from 'react';
import ContentEditable from 'react-contenteditable';

class InlineEditableContent extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.state = { html: `<span>${props.initialValue}</span>` };
  }

  handleChange = (e) => {
    this.setState({ html: e.target.value });
  };

  handleFocus = (e) => {
    if (e.target.innerText === this.props.initialValue) {
      this.setState({ html: '<span></span>' });
    }
  };

  handleBlur = (e) => {
    if (e.target.innerText.replace(/(\r\n|\n|\r)/gm, '') === '') {
      this.setState({ html: `<span>${this.props.initialValue}</span>` });
    }
  };

  render = () => {
    return (
      <ContentEditable
        innerRef={this.contentEditable}
        html={this.state.html}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        style={{
          display: 'inline',
          minWidth: '2em',
          padding: '0.25em',
          outline: 'none',
          borderBottom: '1px rgba(0,0,0,0.3) solid',
        }}
      />
    );
  };
}

export default InlineEditableContent;
