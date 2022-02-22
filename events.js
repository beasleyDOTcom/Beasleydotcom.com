'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    return (<h1>HERE</h1>)
  }
}

const domContainer = document.querySelector('#react-events');
ReactDOM.render(e(LikeButton), domContainer);