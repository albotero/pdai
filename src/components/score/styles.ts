import { Text, TouchableOpacity } from "react-native"
import Animated from "react-native-reanimated"
import styled from "styled-components"

import { Palette, TextShadow } from "../../common/palette"

export const Container = styled(Animated.View)`
    padding: 20px 10px 25px 20px;
    align-items: center;
    justify-content: center;
    gap: 5px;
`

export const Title = styled(Text)`
    color: ${Palette.BackColorApp};
    font-size: 18px;
    font-variant: small-caps;
    font-weight: bold;
    text-transform: capitalize;
    ${TextShadow()}
`

export const Score = styled(Text)`
    color: ${Palette.BackColorApp};
    font-size: 24px;
    font-variant: oldstyle-nums;
    font-weight: bold;
    ${TextShadow()}
`

export const ClearButton = styled(TouchableOpacity)`
    margin: 5px;
`
