import React, { Component } from 'react';
import logo from './logo.svg';
import LandingHeader from "./components/LandingHeader"
import LandingBody from "./components/LandingBody"
import LandingFooter from "./components/LandingFooter"
import strings from "./values/strings"
import config from "./values/config"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {language: "en"};
    this.onLanguageChange = this.onLanguageChange.bind(this)
  }

  onLanguageChange(newLanguage) {
    this.setState({language: newLanguage})
  }

  render() {
    const language = this.state.language
    const str = strings(language)

    return (
      <div className="landing-page">
        <LandingHeader strings={str} languages={config.languages} logo={logo} 
          onLanguageChange={this.onLanguageChange} />
        <LandingBody strings={str}/>
        <LandingFooter strings={str}/>
      </div>
    );
  }
}

export default App;
