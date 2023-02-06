import "./DestinationStyles.css";
import { Component } from "react";

class DestinationData extends Component {
  render() {
    return (
      <div className="first-des">
        <div className="des-text">
          <h2>{this.props.heading}</h2>
          <br />
          <p>{this.props.text}</p>
        </div>
        <div className="image">
          <img
            alt="img"
            src="data:image/jpeg;base64,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"
          />
          <img
            alt="img"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSE827p309EFve8eW6xuUq8sZXox40EJMsmA&usqp=CAU"
          />
        </div>
      </div>
    );
  }
}
export default DestinationData;
