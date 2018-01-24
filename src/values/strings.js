import config from "./config"

const defaultLanguage = config.defaultLanguage

const stringMap = {
  en: {
    welcome: "Welcome!",
    header: "HEADER",
    body: "BODY",
    footer: "FOOTER",
  },
  ka: {
    welcome: "კეთილი იყოს თქვენი მობრძანება!",
    header: "სათაური",
    body: "სხეული",
    footer: "საფეხური",
  },
}

const strings = (language) => {
	return stringMap[language] || stringMap[defaultLanguage]
}

export default strings