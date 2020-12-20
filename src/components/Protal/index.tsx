import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Protal extends Component {
  public state = { counter: 0 };

  increase() {
    this.setState((preState: any) => ({
      counter: preState.counter + 1
    }));
  }

  render() {
    // ReactDOM.render(<button>Click</button>, document.getElementById('protal'));
    return (
      <div id="father" onClick={this.increase.bind(this)}>
        <div>counter: {this.state.counter}</div>
        {/* <button>Click</button> */}
        {ReactDOM.createPortal(<button>Click</button>, document.getElementById('protal') as HTMLElement)}
      </div>
    )
  }
}