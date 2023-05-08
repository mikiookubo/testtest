import React, { Component } from 'react';
import Validation from './test2';

class App extends Component {
  state = {
    info: {
      email: '',
      password: '',
    },
    message: {
      email: '',
      password: '',
    },
    loading: false,
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const key = event.target.name;
    const value = event.target.value;
    const { info, message } = this.state;

    this.setState({
      info: { ...info, [key]: value },
    });
    this.setState({
      message: {
        ...message,
        [key]: Validation.formValidate(key, value),
      },
    });
  };

  canSubmit = (): boolean => {
    const { info, message, loading } = this.state;

    const validInfo =
      Object.values(info).filter((value) => {
        return value === '';
      }).length === 0;
    const validMessage =
      Object.values(message).filter((value) => {
        return value !== '';
      }).length === 0;
    return validInfo || validMessage || !loading;
  };

  submit = () => {
    this.setState({ loading: true });

    this.setState({ loading: false });
  };

  render() {
    const { info, message } = this.state;

    return (
      <React.Fragment>
        <p>
          <label>メールアドレス: </label>
          <input
            type="email"
            name="email"
            value={info.email}
            onChange={(event) => this.handleChange(event)}
          />
          {message.email && (
            <p style={{ color: 'red', fontSize: 8 }}>{message.email}</p>
          )}
        </p>
        <p>
          <label>パスワード: </label>
          <input
            type="password"
            name="password"
            value={info.password}
            onChange={(event) => this.handleChange(event)}
          />
          {message.password && (
            <p style={{ color: 'red', fontSize: 8 }}>{message.password}</p>
          )}
        </p>
        <p />
        <p>
          <button disabled={!this.canSubmit()} onClick={() => this.submit()}>
            送信
          </button>
        </p>
      </React.Fragment>
    );
  }
}

export default App;
