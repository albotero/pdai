import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import Animated from "react-native-reanimated"
import styled from "styled-components"

import { Palette } from "../../common/palette"

export const Container = styled(View)`
    overflow: hidden;
    border-top-width: ${StyleSheet.hairlineWidth}px;
    border-top-color: ${Palette.HeaderColor};
    margin-top: -${StyleSheet.hairlineWidth}px;
`

export const HeaderContainer = styled(Animated.View)`
    padding-horizontal: 1px;
`

export const Header = styled(TouchableOpacity)`
    padding: 5px 10px;
    justify-content: space-between;
    align-items: center;
    z-index: 99;
`

export const Title = styled(Text)`
    color: ${Palette.HeaderColor};
    font-size: 16px;
    font-variant: small-caps;
    font-weight: 600;
    padding-vertical: 3px;
    text-transform: capitalize;
`

export const Summary = styled(View)`
    gap: 3px;
    max-width: 45%;
`

export const SummaryText = styled(Text)`
    color: ${Palette.HeaderColor};
    font-size: 11px;
    text-transform: lowercase;
`

export const SummarySubtitle = styled(Text)`
    font-size: 12px;
    font-variant: small-caps;
    font-weight: 600;
`

export const Body = styled(Animated.View)`
    padding-horizontal: 10px;
    z-index: 1;
`

export const OptionsTitle = styled(Text)`
    color: ${Palette.HeaderColor};
    font-size: 16px;
    font-weight: 500;
    padding-vertical: 7px;
    text-transform: capitalize;
`

export const Option = styled(Text)`
    padding: 2.5px 10px;
    font-size: 14px;
`
