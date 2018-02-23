import config from "./config"

const defaultLanguage = config.defaultLanguage

const stringMap = {
  en: {
    headerTitle: "XPLORE",
    heading: "We're wasting too much time planning hikes.",
    headingParagraph: "All-in-one free platform for searching and quickly planning hikes, tours, and excursions, that safely works everywhere. Stop hassling with Facebook events. Simplify your life.",
    welcome: "Welcome!",
    header: "HEADER",
    body: "BODY",
    footer: "FOOTER",
    blog: "Blog",
    more: "More",
    contact: "Contact",
    privacyPolicy: "Privacy Policy",
    other: "Other",
    email: "Email",
  },
  ka: {
    welcome: "კეთილი იყოს თქვენი მობრძანება!",
    heading: "გვეყო დროის ფლანგვა ლაშქრობების გეგმვაში.",
    headingParagraph: "ლაშქრობების, ტურებისა და ექსკურსიების საძებნი და დასაგეგმი პლატფორმა რომელიც მუშაობს ყველგან, უფასოდ და უსაფრთხოდ. მორჩი Facebook-ზე ჩალიჩს. გაიმარტივე ცხოვრება.",
    header: "სათაური",
    body: "სხეული",
    footer: "საფეხური",
    blog: "ბლოგი",
    more: "მეტი",
    contact: "კონტაქტი",
    other: "სხვა",
    email: "ელ-ფოსტა",
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