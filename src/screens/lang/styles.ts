import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import styled from "styled-components"

import { Palette, TextShadow } from "@common/palette"

export const Container = styled(View)`
    flex: 1;
    background-color: ${Palette.BackColorApp};
`

export const Background = styled(View)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
`

export const ScrollLanguages = styled(ScrollView)`
    flex: 1;
`

export const Grid = styled(View)`
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-self: center;
    width: 85%;
    padding: 10px 0 30px 0;
`

export const Button = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 46%;
    margin: 3px 2px;
`

export const Language = styled(Text)`
    padding: 7px 2px;
    text-transform: capitalize;
    color: black;
    font-size: 13px;
    font-weight: 400;
    ${TextShadow(Palette.BackColorApp, "0", "10px")}
`

export const Translation = styled(Text)`
    text-transform: capitalize;
    font-size: 12px;
`
