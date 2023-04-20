import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import styled from "styled-components"

import { Palette, Shadow } from "@common/palette"

export const Container = styled(View)`
    flex: 1;
    background-color: ${Palette.BackColorApp};
`

export const Scroll = styled(ScrollView)`
    flex: 1;
`

export const Separator = styled(View)`
    align-self: center;
    border-bottom-color: ${Palette.HeaderColor};
    border-bottom-width: 1.5px;
    margin-vertical: 10px;
    width: 80%;
    ${Shadow()}
`

export const Grid = styled(View)`
    flex-direction: row;
    flex-wrap: wrap;
    align-self: center;
    align-items: center;
    justify-content: center;
    padding: 10px;
`

export const Data = styled(View)`
    align-items: center;
`

export const Title = styled(Text)`
    color: ${Palette.HeaderColor};
    font-size: 20px;
    font-weight: 600;
    font-variant: small-caps;
    text-transform: capitalize;
    width: 100%;
`

export const Description = styled(Text)`
    color: black;
    padding-horizontal: 7.5px;
    font-size: 14px;
    font-variant: small-caps;
    font-weight: 400;
    text-transform: capitalize;
    width: 100%;
`

export const Social = styled(TouchableOpacity)`
    margin: 2px 10px;
`

export const User = styled(Text)`
    color: black;
    font-size: 14px;
    font-weight: 300;
    line-height: 17px;
    margin-horizontal: 5px;
`
