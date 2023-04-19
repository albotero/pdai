import { createContext, Dispatch, SetStateAction, useState } from "react"

import i18n, { GetLanguage, SetLanguage } from "./src/common/localization"
import Lang from "./src/screens/lang/lang"
import Pdai from "./src/screens/pdai/pdai"
import Splash from "./src/screens/splash/splash"

export type AppContextType = {
    setShowLang?: Dispatch<SetStateAction<boolean>>
    changeLang?: (iso: string) => void
}

export const AppContext = createContext<AppContextType | null>(null)

export default function App(): JSX.Element {
    const [reloadState, setReloadState] = useState<boolean>(false)
    const [isLoading, setIsLoading] = useState<Boolean>(true)
    const [showLang, setShowLang] = useState<boolean>(false)

    const changeLang = (iso: string) => {
        i18n.changeLanguage(iso)
        SetLanguage(iso)
        setReloadState(!reloadState)
    }

    GetLanguage().then((iso: string | null) => i18n.language != iso && iso && changeLang(iso))

    if (isLoading) return <Splash setIsLoading={setIsLoading} />

    if (showLang)
        return (
            <AppContext.Provider value={{ setShowLang: setShowLang, changeLang: changeLang }}>
                <Lang />
            </AppContext.Provider>
        )

    return (
        <AppContext.Provider value={{ setShowLang: setShowLang }}>
            <Pdai />
        </AppContext.Provider>
    )
}
