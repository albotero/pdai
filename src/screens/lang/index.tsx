import { useContext, useState } from "react"
import { StyleSheet } from "react-native"
import Animated, { FadeIn } from "react-native-reanimated"
import Rive, { Fit } from "rive-react-native"

import { AppContext, AppContextType } from "../../../App"
import i18n, { Languages } from "../../common/localization"
import { Palette } from "../../common/palette"

import * as S from "./styles"

interface LanguageButtonProps {
    flag: string
    langName: string
    selected: boolean
    updateLang: () => void
}

function LanguageButton({ flag, langName, selected, updateLang }: LanguageButtonProps) {
    return (
        <S.LanguageButton onPress={updateLang} style={selected && Style.selected}>
            <S.LanguageText>
                {flag}&nbsp;&nbsp;{langName}
            </S.LanguageText>
        </S.LanguageButton>
    )
}

export default function Lang(): JSX.Element {
    const [state, setState] = useState<boolean>(false)
    const { changeLang: changeLang } = useContext(AppContext) as AppContextType

    const updateLang = (iso: string) => {
        if (changeLang) changeLang(iso)
        setState(!state)
    }

    return (
        <S.Container>
            <Animated.View entering={FadeIn.duration(2000)} style={{ flex: 1 }}>
                <S.Background>
                    <Rive
                        resourceName="world"
                        artboardName={"World"}
                        stateMachineName={"State Machine 1"}
                        fit={Fit.FitWidth}
                        style={Style.animation}
                    />
                </S.Background>
                <S.ScrollLanguages>
                    <S.Grid>
                        {Object.keys(Languages).map((iso: string) => {
                            const data = i18n.getDataByLanguage(iso)
                            if (data)
                                return (
                                    <LanguageButton
                                        key={iso}
                                        flag={data.translation.languageFlag}
                                        langName={data.translation.languageName}
                                        selected={i18n.language == iso}
                                        updateLang={() => updateLang(iso)}
                                    />
                                )
                        })}
                    </S.Grid>
                </S.ScrollLanguages>
            </Animated.View>
        </S.Container>
    )
}

const Style = StyleSheet.create({
    animation: {
        width: "100%",
    },
    selected: {
        backgroundColor: Palette.BackColorB,
        color: Palette.HeaderColor,
        fontWeight: "700",
    },
})
