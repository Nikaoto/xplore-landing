import config from "./config"

const defaultLanguage = config.defaultLanguage

const stringMap = {
  en: {
    headerTitle: "XPLORE",
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
  // Check if chosen language in strinMap
  if (stringMap[language] === undefined) {
    return stringMap[defaultLanguage]
  }

  // Merge objects
  let ret = {}
  for (let key in stringMap[defaultLanguage]) {
    if (key in stringMap[language]) {
      ret[key] = stringMap[language][key]
    } else {
      ret[key] = stringMap[defaultLanguage][key]
    }
  }

  return ret
}

export default strings