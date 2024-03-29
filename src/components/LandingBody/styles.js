import config from "../../values/config"

const defaultStyle = config.defaultLanguage

const styleMap = {
  en: {
    headingTitle: {
      fontFamily: "Lato",
      fontWeight: 900,
      fontSize: 47,
      margin: 0,
    },
    headingParagraph: {
      fontFamily: "Roboto",
      maxWidth: 900,
      fontWeight: 300,
      fontSize: 27,
    },
    buttonContainer: { 
      alignSelf: "center",
      padding: "10px 20px 40px 20px",
      display: "flex", 
      flexDirection: "row", 
      alignItems: "center",
      justifyContent: "space-around",
      fontFamily: "Lato",
      fontSize: 15,
    },
  },
  ka: {
    headingTitle: {
      fontFamily: "BPG Rioni Vera",
      fontSize: 37,
      margin: 0,
    },
    headingParagraph: {
      fontFamily: "BPG Arial",
      maxWidth: 900,
      fontSize: 24,
    },
  },
  ru: {
    headingTitle: {
      fontFamily: "Roboto",
      fontSize: 37,
      fontWeight: 900 ,
      margin: 0,
    },
    headingParagraph: {
      fontFamily: "Roboto",
      maxWidth: 800,
      fontSize: 25,
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
