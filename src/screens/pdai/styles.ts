import { View } from "react-native"
import Animated from "react-native-reanimated"
import styled from "styled-components"

import { Palette } from "../../common/palette"

export const Container = styled(View)`
    flex: 1;
    gap: 3px;
    background-color: ${Palette.BackColorApp};
`

export const Body = styled(Animated.View)`
    flex: 1;
`
