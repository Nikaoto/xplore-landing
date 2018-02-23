import React, { Component } from 'react'
import logo from "./logo.png"
import squareLogo from "./squareLogo.png"
import LandingHeader from "./components/LandingHeader"
import LandingBody from "./components/LandingBody"
import LandingFooter from "./components/LandingFooter"
import strings from "./values/strings"
import config from "./values/config"
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {language: config.defaultLanguage};
    this.onLanguageChange = this.onLanguageChange.bind(this)
  }

  componentDidMount() {
    document.title = config.siteTitle
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
        <LandingBody strings={str} language={language}/>
        <LandingFooter strings={str} language={language} logo={squareLogo}/>
      </div>
    );
  }
}

export default App;
