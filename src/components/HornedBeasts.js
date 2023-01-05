import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';

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

  clearVote = () => {
    this.setState({
      fave: 0,
      clicked: ''
    })
  }
  
  render() {
    return(
      <>
        {/* <Row className="row" xs={1} sm={2} md={3} lg={4}> */}
        <Card className='reactCard' style={{ width: '18rem' }}>
          <Card.Img onClick={this.handleHeart} variant="top" src={this.props.image_url} />
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
        {/* </Row> */}

        {/* from Lab 01 */}
        {/* <h2>{this.props.title}</h2>
        <img src={this.props.imageUrl} alt={this.props.title} title={this.props.title} />
        <p>{this.props.description}</p> */}
      </>
    )
  }
}

export default HornedBeasts;
