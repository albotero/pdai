import { StyleSheet } from "react-native"
import Rive, { Fit } from "rive-react-native"

import * as S from "./styles"

interface SplashProps {
    setIsLoading: (isLoading: boolean) => void
}

export default function Splash({ setIsLoading }: SplashProps): JSX.Element {
    setTimeout(() => setIsLoading(false), 10000)
    return (
        <S.Container>
            <Rive
                resourceName="splash"
                artboardName={"PDAI 1"}
                stateMachineName={"pdai"}
                fit={Fit.FitWidth}
                style={SplashStyle.animation}
            />
        </S.Container>
    )
}

const SplashStyle = StyleSheet.create({
    animation: {
        width: "90%",
        maxWidth: 600,
    },
})
