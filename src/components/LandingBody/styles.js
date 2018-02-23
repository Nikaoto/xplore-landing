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
      fontSize: 35,
      margin: 0,
    },
    headingParagraph: {
      fontFamily: "BPG Arial",
      maxWidth: 750,
      fontSize: 17,
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