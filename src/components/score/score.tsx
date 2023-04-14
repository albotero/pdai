import { useEffect } from "react"
import { Easing, interpolateColor, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated"

import i18n from "../../common/localization"
import * as S from "./styles"

interface ScoreProps {
    score: number
}

/**
 * PDAI Score:
 *   < 15 mild
 *   15 - 45 moderate
 *   > 45 severe
 */
export default function Score({ score }: ScoreProps): JSX.Element {
    const totalScore = useSharedValue(0)

    const scoreAnimatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(totalScore.value, [14, 30, 45], ["#2B9E0C", "#E1C303", "#E90909"]),
        }
    })

    useEffect(() => {
        totalScore.value = withTiming(score, { duration: 500, easing: Easing.elastic(0.5) })
    })

    return (
        <S.Container style={scoreAnimatedStyle}>
            <S.Title>{i18n.t("score")}</S.Title>
            <S.Title>:</S.Title>
            <S.Score>{score}</S.Score>
            <S.Score>/</S.Score>
            <S.Score>263</S.Score>
        </S.Container>
    )
}
