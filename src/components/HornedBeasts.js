import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: 0,
      fave: 0
    }
  }
  render() {
    return(
      <>
        <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.title} title={this.props.title} />
        <p>{this.props.description}</p>
      </>
    )
  }
}

export default HornedBeasts;
