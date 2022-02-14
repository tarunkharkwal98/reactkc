import React from "react";
import Login from "./login";

class Loginbtn extends React.Component {
    state = { status: false }
    render() {
      const { status } = this.state;
      return (
        <button onClick={() => this.setState({ status: !status })}>
          {`Log ${status ? 'out' : 'in'}`}
        </button>
      );

    }
  }

  export default Loginbtn;