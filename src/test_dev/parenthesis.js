import React from 'react';

class Parenthesis extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValid: false }
  }

  handleChange(e){
    this.setState({ isValid: this.checkParenthesis(e.target.value) });
  }

  /*
    check if parenthesis is valid
    Params: parenthesis => String
    Return: Validate if parenthesis is valid
    
    ##Examples: 
    validParentheses( "()" ) => returns true
    validParentheses( ")(()))" ) => returns false
    validParentheses( "(" ) => returns false
    validParentheses( "(())((()())())" ) => returns true
    All input strings will be nonempty, and will only consist of open parentheses '(' and/or closed parentheses ')'
  */
  checkParenthesis(parenthesis){
    var valid = false;
    /** Your awesome code here **/
    return valid;
  }

  render() {
    return (
      <div>
        <h1>Parenthesis</h1>
        <input onChange={(e) => {this.handleChange(e)}} ></input>
        <p>It is { this.state.isValid ? 'Valid' : 'Invalid' }</p>
      </div>
    )
  }
}

export default Parenthesis;
