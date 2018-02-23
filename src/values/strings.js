import config from "./config"

const defaultLanguage = config.defaultLanguage

const stringMap = {
  en: {
    headerTitle: "XPLORE",
    heading: "Hikers, it's time we ditched Facebook.",
    headingParagraph: "All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone. Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.",
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