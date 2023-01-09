import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import '../App.css'

class SelectedBeast extends React.Component {
  render() {
    return(
      <Modal className='modal-selBeast' show={this.props.showModal} onHide = {this.props.handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img className='selImg' src={this.props.selectedImg} alt={this.props.title} title={this.props.title} />
          <p>{this.props.description}</p>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.handleCloseModal}>Close</Button>
        </Modal.Footer>
      </Modal>


    )
  }
}

export default SelectedBeast;
