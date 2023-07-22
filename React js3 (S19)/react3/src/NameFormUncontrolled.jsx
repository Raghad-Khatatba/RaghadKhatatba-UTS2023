import React from 'react';

class NameFormUncontrolled extends React.Component {
  handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    const password = event.target.password.value;
    alert(`Uncontrolled: User Name: ${username}, Password: ${password}`);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            User Name:
            <input type="text" name="username" />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input type="password" name="password" />
          </label>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default NameFormUncontrolled;
