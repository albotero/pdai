import { useState } from "react"
import { SafeAreaView } from "react-native"

import Pdai from "./src/screens/pdai/pdai"
import Splash from "./src/screens/splash/splash"
import { Palette } from "./src/common/palette"

export default function App(): JSX.Element {
    const [isLoading, setIsLoading] = useState<Boolean>(true)
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Palette.BackColorApp }}>
            {isLoading ? <Splash setIsLoading={setIsLoading} /> : <Pdai />}
        </SafeAreaView>
    )
}
