import { useContext, useState } from "react"
import { StyleSheet } from "react-native"
import Animated, { FadeIn } from "react-native-reanimated"
import Rive, { Fit } from "rive-react-native"

import i18n, { Languages } from "@common/localization"
import { Palette } from "@common/palette"
import { AppContext, AppContextType } from "@root/App-context"

import * as S from "./styles"

interface LanguageButtonProps {
    flag: string
    text: string
    translation?: string
    selected: boolean
    updateLang: () => void
}

function LanguageButton({ flag, text, translation, selected, updateLang }: LanguageButtonProps) {
    return (
        <S.Button onPress={updateLang} style={selected && Style.selected}>
            <S.Language>{flag}</S.Language>
            <S.Language>
                {text}
                {translation && <S.Translation> [{translation}]</S.Translation>}
            </S.Language>
        </S.Button>
    )
}

export default function Lang(): JSX.Element {
    const [state, setState] = useState<boolean>(false)
    const { changeLang: changeLang } = useContext(AppContext) as AppContextType

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
                            const data_cur = i18n.getDataByLanguage(i18n.language)
                            if (data && data_cur)
                                return (
                                    <LanguageButton
                                        key={iso}
                                        flag={data.translation.languageFlag}
                                        selected={i18n.language == iso}
                                        text={data.names[iso]}
                                        translation={i18n.language == iso ? undefined : data_cur.names[iso]}
                                        updateLang={() => {
                                            if (changeLang) changeLang(iso)
                                            setState(!state)
                                        }}
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
