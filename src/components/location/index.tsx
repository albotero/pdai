import { useContext, useEffect, useState } from "react"
import { TouchableOpacity, View } from "react-native"
import {
    Easing,
    interpolate,
    interpolateColor,
    useAnimatedStyle,
    useSharedValue,
    withTiming,
} from "react-native-reanimated"

import { CapitalizeSentence, FirstLetter } from "../../common/functions"
import i18n, { Rtl } from "../../common/localization"
import { Palette } from "../../common/palette"
import { PdaiContextType, PdaiData, PdaiDataInterface, SelectedLocations } from "../../screens/pdai/context"
import { PdaiContext } from "../../screens/pdai"
import * as S from "./styles"

interface LocationProps {
    data: PdaiDataInterface
    visible: boolean
}

export default function Location({ data, visible }: LocationProps): JSX.Element {
    const [bodyHeight, setBodyHeight] = useState<number>(0)
    const { updatePdaiData } = useContext(PdaiContext) as PdaiContextType

    const updateData = (property: string, value: number) => {
        if (property == "activity") data.selAct = value
        if (property == "damage") data.selDam = value
        updatePdaiData(data)
    }

    const updateVisibility = () => {
        SelectedLocations[data.section] = visible ? null : data.id
        updatePdaiData(data)
    }

    const progressAnimation = useSharedValue(1)
    const progressHeaderAnimation = useSharedValue(0)

    const headerAnimatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                progressHeaderAnimation.value,
                [0, 1],
                [Palette.BackColorA, Palette.BackColorB]
            ),
        }
    })

    const bodyAnimatedStyle = useAnimatedStyle(() => {
        const data = {
            opacity: interpolate(progressAnimation.value, [0, 1], [0, 1]),
            paddingVertical: interpolate(progressAnimation.value, [0, 1], [0, 3]),
        }
        if (bodyHeight > 0)
            return {
                ...data,
                height: interpolate(progressAnimation.value, [0, 1], [0, bodyHeight + 10]),
            }
        return data
    })

    useEffect(() => {
        progressAnimation.value = withTiming(visible ? 1 : 0, { duration: 1000, easing: Easing.elastic(0.5) })
        progressHeaderAnimation.value = withTiming(visible ? 1 : 0, { duration: 2000, easing: Easing.elastic(0.5) })
    })

    return (
        <S.Container>
            <S.HeaderContainer style={headerAnimatedStyle}>
                <S.Header style={{ flexDirection: Rtl() ? "row-reverse" : "row" }} onPress={updateVisibility}>
                    <S.Title style={{ textAlign: Rtl() ? "right" : "left" }}>{i18n.t(data.location)}</S.Title>
                    <S.Summary>
                        {data.selAct > 0 && (
                            <Summary
                                property="activity"
                                value={data.activity.filter((p: PdaiData) => p.value == data.selAct)[0].text}
                            />
                        )}
                        {data.damage && data.selDam !== undefined && data.selDam > 0 && (
                            <Summary
                                property="damage"
                                value={data.damage.filter((p: PdaiData) => p.value == data.selDam)[0].text}
                            />
                        )}
                    </S.Summary>
                </S.Header>
            </S.HeaderContainer>
            <S.Body
                style={bodyAnimatedStyle}
                onLayout={(event) => {
                    const { height } = event.nativeEvent.layout
                    if (bodyHeight == 0) setBodyHeight(height)
                }}
            >
                <Options
                    property="activity"
                    options={data.activity}
                    selected={data.selAct}
                    update={(value) => updateData("activity", value)}
                />
                {data.damage && data.selDam !== undefined && (
                    <Options
                        property="damage"
                        options={data.damage}
                        selected={data.selDam}
                        update={(value) => updateData("damage", value)}
                    />
                )}
            </S.Body>
        </S.Container>
    )
}

interface SummaryProps {
    property: string
    value: string
}

function Summary({ property, value }: SummaryProps): JSX.Element {
    return (
        <S.SummaryText style={{ textAlign: Rtl() ? "left" : "right" }}>
            <S.SummarySubtitle>{FirstLetter(i18n.t(property))}: </S.SummarySubtitle>
            {i18n.t(value).toLowerCase()}
        </S.SummaryText>
    )
}

interface OptionsProps {
    property: string
    options: PdaiData[]
    selected: number
    update: (value: number) => void
}

function Options({ property, options, selected, update }: OptionsProps): JSX.Element {
    return (
        <View>
            <S.OptionsTitle>{i18n.t(property)}</S.OptionsTitle>
            {options.map((data) => (
                <TouchableOpacity key={data.value} onPress={() => update(data.value)}>
                    <S.Option
                        style={
                            selected == data.value && {
                                backgroundColor: Palette.BackColorC,
                                color: Palette.HeaderColor,
                                borderRadius: 7,
                                overflow: "hidden",
                                shadowColor: "black",
                                shadowOpacity: 0.15,
                                shadowOffset: { width: 2, height: 2 },
                                shadowRadius: 2,
                                elevation: 2,
                            }
                        }
                    >
                        {CapitalizeSentence(i18n.t(data.text))}
                    </S.Option>
                </TouchableOpacity>
            ))}
        </View>
    )
}
