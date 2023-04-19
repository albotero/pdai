import { useContext } from "react"
import { StyleSheet, View } from "react-native"
import Animated, { FadeIn } from "react-native-reanimated"
import Rive, { Fit } from "rive-react-native"

import { AppContext, AppContextType } from "../../../App"
import i18n, { Languages } from "../../common/localization"
import { Palette } from "../../common/palette"
import Header, { HeaderButton } from "../../components/header/header"

import * as S from "./styles"

interface LanguageButtonProps {
    flag: string
    langName: string
    iso: string
    selected: boolean
}

function LanguageButton({ flag, langName, iso, selected }: LanguageButtonProps) {
    const { changeLang: changeLang } = useContext(AppContext) as AppContextType

    return (
        <S.LanguageButton onPress={() => changeLang && changeLang(iso)} style={selected && Style.selected}>
            <S.LanguageText>
                {flag}&nbsp;&nbsp;{langName}
            </S.LanguageText>
        </S.LanguageButton>
    )
}

export default function Lang(): JSX.Element {
    const { setShowLang: setShowLang } = useContext(AppContext) as AppContextType

    return (
        <S.Container>
            <Header
                title={i18n.t("selectLang")}
                buttons={[
                    <HeaderButton
                        key="return"
                        text={"\u1438"}
                        textSize={18}
                        action={() => setShowLang && setShowLang(false)}
                    />,
                ]}
                style={{ justifyContent: "flex-start" }}
            />
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
                            return data ? (
                                <LanguageButton
                                    key={iso}
                                    flag={data.translation.languageFlag}
                                    langName={data.translation.languageName}
                                    iso={iso}
                                    selected={i18n.language == iso}
                                />
                            ) : (
                                <></>
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
