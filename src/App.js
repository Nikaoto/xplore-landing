import React, { Component } from 'react';
import logo from './logo.svg';
import LandingHeader from "./components/LandingHeader"
import LandingBody from "./components/LandingBody"
import LandingFooter from "./components/LandingFooter"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {language: "en"};
    this.strings = {
      ka: {
        text: "ტექსტი", 
      },
      en: {
        text: "Text"
      },
      es: {
        text: "Texteroni"
      }
    }
    this.onLanguageChange = this.onLanguageChange.bind(this)
  }

  onLanguageChange(newLanguage) {
    this.setState({language: newLanguage})
  }

  render() {
    const language = this.state.language
    const strings = this.strings[language]

    return (
      <div className="landing-page">
        <p>{strings.text}</p>
        <LandingHeader language={language} logo={logo} onLanguageChange={this.onLanguageChange}/>
        <LandingBody language={language}/>
        <LandingFooter language={language}/>
      </div>
    );
  }
}

export default App;
