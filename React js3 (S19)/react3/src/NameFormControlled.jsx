import React from 'react';

class NameFormControlled extends React.Component {
  state = {
    username: '',
    password: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    alert(`Controlled: User Name: ${username}, Password: ${password}`);
  };

  render() {
    const { username, password } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            User Name:
            <input type="text" name="username" value={username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" value={password} onChange={this.handleChange} />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NameFormControlled;
