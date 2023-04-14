import Animated from "react-native-reanimated"
import styled from "styled-components"

import { Palette } from "../../common/palette"

const textShadow = `
    text-shadow-color: #000B;
    text-shadow-offset: 1px 1px;
    text-shadow-radius: 5px;
`

export const Container = styled(Animated.View)`
    padding: 20px 10px 25px 20px;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 5px;
`

export const Title = styled(Animated.Text)`
    color: ${Palette.BackColorApp};
    font-size: 18px;
    font-variant: small-caps;
    font-weight: bold;
    text-transform: capitalize;
    ${textShadow}
`

export const Score = styled(Animated.Text)`
    color: ${Palette.BackColorApp};
    font-size: 24px;
    font-variant: oldstyle-nums;
    font-weight: bold;
    ${textShadow}
`
