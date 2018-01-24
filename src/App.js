import React, { Component } from 'react';
import logo from './logo.svg';
import LandingHeader from "./components/LandingHeader"
import LandingBody from "./components/LandingBody"
import LandingFooter from "./components/LandingFooter"
import strings from "./strings"
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
        <p>{str.welcome}</p>
        <LandingHeader language={language} logo={logo} onLanguageChange={this.onLanguageChange}/>
        <LandingBody language={language}/>
        <LandingFooter language={language}/>
      </div>
    );
  }
}

export default App;
