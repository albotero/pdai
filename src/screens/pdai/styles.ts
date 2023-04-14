import { Text, TouchableOpacity, View } from "react-native"
import Animated from "react-native-reanimated"
import styled from "styled-components"

import { Palette } from "../../common/palette"

export const Container = styled(Animated.View)`
    flex: 1;
    gap: 3px;
`

export const Header = styled(View)`
    background-color: ${Palette.NavigationColor};
    flex-direction: row;
    justify-content: flex-end;
    height: 60px;
    padding-horizontal: 10px;
`

export const HeaderTitle = styled(View)`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    justify-content: center;
`

export const Title = styled(Text)`
    color: black;
    font-size: 20px;
    font-variant: small-caps;
    font-weight: bold;
    text-align: center;
    text-transform: capitalize;
`

export const Button = styled(TouchableOpacity)`
    justify-content: center;
    padding-horizontal: 3px;
`
