import { useContext, useEffect } from "react"
import { Alert } from "react-native"
import { Easing, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

import { CapitalizeSentence } from "../../common/functions"
import i18n, { Rtl } from "../../common/localization"
import { PdaiContextType } from "../../screens/pdai/context"
import { PdaiContext } from "../../screens/pdai"
import * as S from "./styles"

/**
 * PDAI Score:
 *   < 15 mild
 *   15 - 45 moderate
 *   > 45 severe
 */
export default function Score(): JSX.Element {
    const { pdaiData, resetPdaiData } = useContext(PdaiContext) as PdaiContextType

    let score: number = 0
    for (const data of pdaiData) score += data.selAct + (data.selDam || 0)

    const progressScore = useSharedValue(score)

    const scoreAnimatedStyle = useAnimatedStyle(() => ({
        backgroundColor: interpolateColor(progressScore.value, [14, 30, 45], ["#2B9E0C", "#E1C303", "#E90909"]),
    }))

    useEffect(() => {
        progressScore.value = withTiming(score, { duration: 500, easing: Easing.elastic(0.5) })
    })

    const clearData = () => {
        Alert.alert(i18n.t("clearData"), i18n.t("clearDataMessage").toString(), [
            { text: CapitalizeSentence(i18n.t("cancel")), style: "cancel" },
            {
                text: CapitalizeSentence(i18n.t("clearData")),
                style: "destructive",
                onPress: resetPdaiData,
            },
        ])
    }

    return (
        <S.Container style={[{ flexDirection: Rtl() ? "row-reverse" : "row" }, scoreAnimatedStyle]}>
            <S.Title>{i18n.t("score")}</S.Title>
            <S.Title>:</S.Title>
            <S.Score>{score}</S.Score>
            <S.Score>/</S.Score>
            <S.Score>263</S.Score>
            <S.ClearButton onPress={clearData}>
                <S.Score>{"\u{1F5D1}"}</S.Score>
            </S.ClearButton>
        </S.Container>
    )
}
