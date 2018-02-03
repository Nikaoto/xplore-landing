import config from "../../values/config"

const defaultStyle = config.defaultLanguage

const styleMap = {
  en: {
    headingTitle: {
      fontFamily: "Lato",
      fontWeight: 900,
      fontSize: 37,
      margin: 0,
    },
    headingParagraph: {
      fontFamily: "Roboto",
      maxWidth: 600,
      fontWeight: 300,
      fontSize: 17,
    },
  },
  ka: {
    headingTitle: {
      fontFamily: "BPG Rioni Arial",
      fontSize: 35,
      margin: 0,
    },
    headingParagraph: {
      fontFamily: "BPG Mrgvlovani",
      maxWidth: 750,
      fontSize: 15,
    },
  },
}

const styles = (language) => {
  // Check if chosen style in styleMap
  if (styleMap[language] === undefined) {
    return styleMap[defaultStyle]
  }

  // Merge objects
  let ret = {}
  for (let key in styleMap[defaultStyle]) {
    if (key in styleMap[language]) {
      ret[key] = styleMap[language][key]
    } else {
      ret[key] = styleMap[defaultStyle][key]
    }
  }

  return ret
}

export default styles