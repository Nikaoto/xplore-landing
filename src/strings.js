import config from "./config"

const defaultLanguage = config.defaultLanguage

const stringMap = {
  en: {
    welcome: "Welcome!",
  },
  ka: {
    welcome: "კეთილი იყოს თქვენი მობრძანება!",
  },
}

const strings = (language) => {
	return stringMap[language] || stringMap[defaultLanguage]
}

export default strings