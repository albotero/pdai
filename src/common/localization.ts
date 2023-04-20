import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { NativeModules, Platform } from "react-native"
import AsyncStorage from "@react-native-community/async-storage"

export const GetLanguage = async () =>
    await AsyncStorage.getItem("Language", (error: any, result: any) => result || console.log(JSON.stringify(error)))

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
    es: { translation: require("@localization/es.json") },
    en: { translation: require("@localization/en.json") },
    am: { translation: require("@localization/am.json") },
    ar: { translation: require("@localization/ar.json"), rtl: "true" },
    ca: { translation: require("@localization/ca.json") },
    cs: { translation: require("@localization/cs.json") },
    da: { translation: require("@localization/da.json") },
    de: { translation: require("@localization/de.json") },
    dv: { translation: require("@localization/dv.json"), rtl: "true" },
    el: { translation: require("@localization/el.json") },
    fr: { translation: require("@localization/fr.json") },
    ga: { translation: require("@localization/ga.json") },
    gd: { translation: require("@localization/gd.json") },
    hi: { translation: require("@localization/hi.json") },
    hr: { translation: require("@localization/hr.json") },
    hy: { translation: require("@localization/hy.json") },
    id: { translation: require("@localization/id.json") },
    is: { translation: require("@localization/is.json") },
    it: { translation: require("@localization/it.json") },
    iw: { translation: require("@localization/iw.json"), rtl: "true" },
    ja: { translation: require("@localization/ja.json") },
    ko: { translation: require("@localization/ko.json") },
    nl: { translation: require("@localization/nl.json") },
    no: { translation: require("@localization/no.json") },
    pl: { translation: require("@localization/pl.json") },
    pt: { translation: require("@localization/pt.json") },
    ru: { translation: require("@localization/ru.json") },
    sw: { translation: require("@localization/sw.json") },
    th: { translation: require("@localization/th.json") },
    tr: { translation: require("@localization/tr.json") },
    ur: { translation: require("@localization/ur.json"), rtl: "true" },
    vn: { translation: require("@localization/vi.json") },
    zh_CN: { translation: require("@localization/zh_CN.json") },
    zh_TW: { translation: require("@localization/zh_TW.json") },
}

i18n.use(initReactI18next).init({
    resources: Languages,
    lng: OS_Lang(),
    fallbackLng: "en",
    compatibilityJSON: "v3", // By default React Native projects does not support Intl
})

export default i18n
