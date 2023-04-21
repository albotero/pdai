import { createContext } from "react"

export type AppContextType = {
    changeLang?: (iso: string) => void
}

export const AppContext = createContext<AppContextType | null>(null)
