import React, { Component } from 'react';
class App extends Component {
  constructor() {
    super();
    this.state = {
      cloud: 'cloud provider',
    };
    this.onRadioChange = this.onRadioChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onRadioChange = (e) => {
    this.setState({
      cloud: e.target.value,
    });
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <strong>Select Cloud Provider:</strong>
          <br />
          <label>
            <input
              type="radio"
              value="AWS"
              checked={this.state.c === 'cloud provider'}
              onChange={this.onRadioChange}
            />
            <span>AWS</span>
          </label>
          <label>
            <input
              type="radio"
              value="Azure"
              checked={this.state.cloud === 'cloud provider'}
              onChange={this.onRadioChange}
            />
            <span>Azure</span>
          </label>
          <label>
            <input
              type="radio"
              value="GCP"
              checked={this.state.color === 'cloud provider'}
              onChange={this.onRadioChange}
            />
            <span>GCP</span>
          </label>
          <label>
            <input
              type="radio"
              value="NONE"
              checked={this.state.color === 'cloud provider'}
              onChange={this.onRadioChange}
            />
            <span>None</span>
          </label>
          <br />
          <br />
          <button type="submit">Choose Cloud Provider</button>
        </form>
      </div>
    );
  }
}
export default App;
