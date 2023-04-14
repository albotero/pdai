import i18n from "i18next"
import { initReactI18next } from "react-i18next"
import { NativeModules, Platform } from "react-native"

const DeviceLanguage =
    Platform.OS === "ios"
        ? NativeModules.SettingsManager.settings.AppleLocale || NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
        : NativeModules.I18nManager.localeIdentifier

i18n.use(initReactI18next).init({
    resources: {
        en: { translation: require("../localization/en.json") },
    },
    lng: DeviceLanguage,
    fallbackLng: "en",
    compatibilityJSON: "v3", // By default React Native projects does not support Intl
})

export default i18n
