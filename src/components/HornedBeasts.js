import React from 'react';
import Button from 'react-bootstrap/Button';
import { Card } from 'react-bootstrap';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fave: 0,
      clicked: ''
    }
  }

  handleHeart = () => {
    this.setState({
      fave: this.state.fave + 1,
      clicked: this.state.clicked + '♥️'
    })
  }

  handleImageClick = () => {
    this.props.handleOpenModal(this.props.image_url)
  }

  clearVote = () => {
    this.setState({
      fave: 0,
      clicked: ''
    })
  }
  
  render() {
    return(
      <>
        {/* <Col> */}
          <Card className='reactCard' style={{ width: '18rem' }}>
            <Card.Img className='img-card' variant="top" onClick={this.handleImageClick} src={this.props.image_url} />
            <Card.Body>
              <Card.Title>{this.props.title}</Card.Title>
              <Card.Text>
                <p>{this.props.description}</p>
              </Card.Text>
              <Card.Text>
                <p>{this.state.fave} Votes</p>
                <p>{this.state.clicked}</p>
              </Card.Text>
              <Button className='reactButton' variant="primary" onClick={this.handleHeart}>Favorite</Button>
              <Button className='reactButtonClear' variant="primary" onClick={this.clearVote}>Clear</Button>
            </Card.Body>
          </Card>
        {/* </Col> */}
       
      </>
    )
  }
}

export default HornedBeasts;
