import React from 'react';
import Header from './components/Header.js';
import Footer from './components/Footer';
import Main from './Main.js';
import SelectedBeast from './components/SelectedBeast.js';
import data from './components/data.json';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      title: '',
      description: '',
      selectedImg: {},
      showModal: false,
    }
  }

  handleOpenModal = (image_url) => {
    const selectedBeast = data.find(beasts => beasts.image_url === image_url)
    console.log(image_url)

    this.setState({
      showModal: true,
      selectedImg: selectedBeast.image_url,
      title: selectedBeast.title,
      description: selectedBeast.description
    })
  }

  handleCloseModal = () => {
    this.setState({
      showModal: false
    })
  }

  render() {
    return(
      <>
        <Header />
        <Main 
          data = {this.state.data}
          handleOpenModal = {this.handleOpenModal}
        />
        <SelectedBeast 
          showModal = {this.state.showModal}
          title = {this.state.title}
          description = {this.state.description}
          selectedImg = {this.state.selectedImg}
          handleCloseModal = {this.handleCloseModal}
          // handleCloseModal = {this.handleCloseModal}

        />
        <Footer />
      </>
    )
  }
}

export default App;
