import React from 'react';
import { Modal } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  render() {
    return(
      <Modal show={this.props.show} onHide = {this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={this.props.SelectedImg} alt={this.props.title} title={this.props.title} />
          <p>{this.props.description}</p>
        </Modal.Body>

        {/* <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleCloseModal}>Close</Button>
        </Modal.Footer> */}
      </Modal>


    )
  }
}

export default SelectedBeast;
