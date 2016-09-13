import React from 'react';

class TextInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ''
    };
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return(
      <div className="form-group">
        <label htmlFor={this.props.id}>{this.props.placeholder}:</label>
        <input
          type="text"
          className="form-control"
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={(e) => this.handleChange(e)}
          id={this.props.id} />
      </div>
    );
  }
};

TextInput.propTypes = {

};

TextInput.defaultProps = {

};

export default TextInput;
