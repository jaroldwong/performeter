import React from 'react';
import ContentEditable from 'react-contenteditable';

class InlineEditableContent extends React.Component {
  constructor(props) {
    super(props);
    this.contentEditable = React.createRef();
    this.state = { html: `${props.initialValue}`, isEmpty: false };
  }

  handleChange = (e) => {
    this.setState({ html: e.target.value, isEmpty: false });
    this.props.onChange(e);
  };

  handleFocus = (e) => {
    if (e.target.innerText === this.props.defaultValue) {
      this.setState({ html: '', isEmpty: true });
    }
  };

  handleBlur = (e) => {
    if (e.target.innerText.replace(/(\r\n|\n|\r)/gm, '') === '') {
      this.setState({ html: `${this.props.initialValue}`, isEmpty: false });
    }
  };

  render = () => {
    const baseStyle = {
      padding: '0.25em',
      outline: 'none',
      borderBottom: '1px rgba(0,0,0,0.3) solid',
    };

    const emptyStyle = {
      display: 'inline-block',
      minWidth: '4em',
    };

    const styles = this.state.isEmpty
      ? { ...emptyStyle, ...baseStyle }
      : baseStyle;

    return (
      <ContentEditable
        innerRef={this.contentEditable}
        html={this.state.html}
        onChange={this.handleChange}
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        style={styles}
        tagName="span"
      />
    );
  };
}

export default InlineEditableContent;
