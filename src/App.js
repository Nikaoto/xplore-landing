import React, { Component } from 'react';
import logo from './logo.svg';
import LandingHeader from "./components/LandingHeader"
import LandingBody from "./components/LandingBody"
/*import LandingFooter from "./components/LandingFooter"*/
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {language: "en"};
  }

  onLanguageChange(newLanguage) {
    console.log("App.js- new lang is", newLanguage)
    //this.setState({language: newLanguage})
  }

  render() {
    const language = this.state.language

    return (
      <div className="landing-page">
        <LandingHeader language={language} logo={logo} onLanguageChange={this.onLanguageChange}/>
        <LandingBody language={language}/>
        {/*<LandingFooter language={language}/>*/}
      </div>
    );
  }
}

export default App;
