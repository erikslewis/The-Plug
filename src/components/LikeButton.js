import React from 'react';
import '../styles/LikeButton.css';

class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this._handleClick.bind(this);
  }

  _handleClick(event) {
    event.preventDefault();
    if (this.props.liked) {
      this.props.onDislike();
    } else {
      this.props.onLike();
    }
  }

  render() {
    return (
      <button
        className="LikeButton__root"
        onClick={this.handleClick}>
        {this.props.liked ?
        (<i className="fa fa-thumbs-up LikeButton__icon LikeButton__icon--liked"/>) :
        (<i className="fa fa-thumbs-o-up LikeButton__icon"/>)}
      </button>
    );
  }
}

export default LikeButton;
