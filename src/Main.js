import React from "react";
import HornedBeasts from './components/HornedBeasts.js';
// import { Container } from "react-bootstrap";
import './Main.css';

class Main extends React.Component {
  render() {

    let beastsArr = this.props.data.map(element => {
      return <HornedBeasts
          key={element._id}
          image_url={element.image_url}
          title={element.title}
          description={element.description}
          handleOpenModal = {this.props.handleOpenModal}
        />
      
    });

    return (
      <>
        <main>
          {/* <Container> */}
            {/* <Row xs={1} sm={2} md={2} lg={4}> */}
              {beastsArr}
            {/* </Row> */}
          {/* </Container> */}
        </main>
          
      </>
    )
  }
}

export default Main;
