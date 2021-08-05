
import React from 'react';
import './App.css';
import {client} from './client';
import Posts from './components/Posts'
class App extends React.Component {
  state = {
       articles: []
  }

  componentDidMount(){
    client.getEntries()
    .then((response)=>{
      console.log(response)
           this.setState({
               articles: response.items
           })
          })
    .catch(console.error)
  }


  render() {

    return (
      <div className="App">
        <div className="container"></div>
        <header>
              <div className="wrapper">
                  <img id="logo"src="https://res.cloudinary.com/drillz/image/upload/v1628174486/logo_1_r2vknc.png"/>
              </div>
        </header>
          <main>
          <div className="wrapper">
            <Posts posts={this.state.articles} />
          </div>
            
          </main>
        <footer>© Copyright 2021 TransferDaily </footer>
      </div>
    );
  }
}

export default App;
