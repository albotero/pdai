import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { NativeModules, Platform } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"

import LanguageNames from "@localization/_names.json"

export const GetLanguage = async () =>
    await AsyncStorage.getItem("Language", (error: any, result: any) =>
        error ? console.log("ERROR Localization =>", JSON.stringify(error)) : result
    )

export const SetLanguage = async (iso: string) => await AsyncStorage.setItem("Language", iso)

const OS_Lang = () => {
    const lang =
        Platform.OS === "ios"
            ? NativeModules.SettingsManager.settings.AppleLocale ||
              NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
            : NativeModules.I18nManager.localeIdentifier
    return lang.startsWith("zh") ? lang : lang.substring(0, 2)
}

export const Rtl = () => {
    const data = i18n.getDataByLanguage(i18n.language)
    if (data) return data.rtl
}

export const Languages = {
    es: { translation: require("@localization/es.json"), names: LanguageNames.es },
    en: { translation: require("@localization/en.json"), names: LanguageNames.en },
    am: { translation: require("@localization/am.json"), names: LanguageNames.am },
    ar: { translation: require("@localization/ar.json"), names: LanguageNames.ar, rtl: "true" },
    ca: { translation: require("@localization/ca.json"), names: LanguageNames.ca },
    cs: { translation: require("@localization/cs.json"), names: LanguageNames.cs },
    da: { translation: require("@localization/da.json"), names: LanguageNames.da },
    de: { translation: require("@localization/de.json"), names: LanguageNames.de },
    dv: { translation: require("@localization/dv.json"), names: LanguageNames.dv, rtl: "true" },
    el: { translation: require("@localization/el.json"), names: LanguageNames.el },
    fr: { translation: require("@localization/fr.json"), names: LanguageNames.fr },
    ga: { translation: require("@localization/ga.json"), names: LanguageNames.ga },
    gd: { translation: require("@localization/gd.json"), names: LanguageNames.gd },
    he: { translation: require("@localization/he.json"), names: LanguageNames.he, rtl: "true" },
    hi: { translation: require("@localization/hi.json"), names: LanguageNames.hi },
    hr: { translation: require("@localization/hr.json"), names: LanguageNames.hr },
    hy: { translation: require("@localization/hy.json"), names: LanguageNames.hy },
    id: { translation: require("@localization/id.json"), names: LanguageNames.id },
    is: { translation: require("@localization/is.json"), names: LanguageNames.is },
    it: { translation: require("@localization/it.json"), names: LanguageNames.it },
    ja: { translation: require("@localization/ja.json"), names: LanguageNames.ja },
    ko: { translation: require("@localization/ko.json"), names: LanguageNames.ko },
    nl: { translation: require("@localization/nl.json"), names: LanguageNames.nl },
    no: { translation: require("@localization/no.json"), names: LanguageNames.no },
    pl: { translation: require("@localization/pl.json"), names: LanguageNames.pl },
    pt: { translation: require("@localization/pt.json"), names: LanguageNames.pt },
    ru: { translation: require("@localization/ru.json"), names: LanguageNames.ru },
    sw: { translation: require("@localization/sw.json"), names: LanguageNames.sw },
    th: { translation: require("@localization/th.json"), names: LanguageNames.th },
    tr: { translation: require("@localization/tr.json"), names: LanguageNames.tr },
    ur: { translation: require("@localization/ur.json"), names: LanguageNames.ur, rtl: "true" },
    vi: { translation: require("@localization/vi.json"), names: LanguageNames.vi },
    zh_CN: { translation: require("@localization/zh_CN.json"), names: LanguageNames.zh_CN },
    zh_TW: { translation: require("@localization/zh_TW.json"), names: LanguageNames.zh_TW },
}

i18n.use(initReactI18next).init({
    resources: Languages,
    lng: OS_Lang(),
    fallbackLng: "en",
    compatibilityJSON: "v3", // By default React Native projects does not support Intl
})

export default i18n
