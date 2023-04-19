import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import styled from "styled-components"

import { Palette, TextShadow } from "../../common/palette"

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

export const LanguageButton = styled(TouchableOpacity)`
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 48%;
    margin: 3px 2px;
`

export const LanguageText = styled(Text)`
    padding: 7px 0;
    text-transform: capitalize;
    color: black;
    font-size: 13.5px;
    font-weight: 400;
    ${TextShadow(Palette.BackColorApp, "0", "10px")}
`
